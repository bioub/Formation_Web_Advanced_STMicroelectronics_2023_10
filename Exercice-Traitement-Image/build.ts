#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import { glob } from 'glob';
import { kebabCase } from 'lodash-es';
import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

process.chdir(__dirname);

type ReportObj = { name: string, imgPath: string };
type Report = Record<string, ReportObj[]>;

async function rmAndMkdir(dirPath: string) {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath);
}

async function copyOrResizeImage(srcImgPath: string, destImgPath: string, destWidth: number) {
  const { width = 0 } = await sharp(srcImgPath).metadata();

  if (width > destWidth) {
    await sharp(srcImgPath).resize(destWidth).toFile(destImgPath);
  } else {
    await fs.copyFile(srcImgPath, destImgPath);
  }
}

async function copyImages() {
  const srcImgPaths = await glob('src/**/*.{png,svg}');

  const report: Report = {};

  for (const srcImgPath of srcImgPaths) {
    const [, category] = srcImgPath.split('/');
    const { name, ext } = path.parse(srcImgPath);
    const destImgPath = `dest/${kebabCase(name)}${ext}`;

    if (ext === '.svg') {
      await fs.copyFile(srcImgPath, destImgPath);
    } else {
      await copyOrResizeImage(srcImgPath, destImgPath, 300);
    }

    await imagemin(['dest/*.{png,svg}'], {
      destination: 'dest',
      plugins: [
        (imageminPngquant as any)(),
        (imageminSvgo as any)(),
      ]
    });
  

    if (!report[category]) {
      report[category] = [];
    }

    report[category].push({
      name: name, imgPath: destImgPath,
    });
  }

  await fs.writeFile('dest/report.json', JSON.stringify(report));
}

await rmAndMkdir('dest');
await copyImages();
