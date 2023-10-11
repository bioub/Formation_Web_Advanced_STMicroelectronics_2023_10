const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const process = require('node:process');
const { minify } = require('terser');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
let appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkdir(dirPath) {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let bufferOrStr = Buffer.concat(buffers);

  if (args.minify) {
    const { code } = await minify(bufferOrStr.toString('utf-8'));
    bufferOrStr = code;
  }

  let checksum;

  if (args.hash) {
    checksum = crypto.createHash('md5').update(bufferOrStr).digest('hex');
    appJsDistPath = appJsDistPath.replace('.js', `.${checksum}.js`);
  }

  await fs.writeFile(appJsDistPath, bufferOrStr);

  return checksum;
}

async function buildHtml(checksum) {
  let strIndex = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  strIndex = strIndex.replace('<script src="./js/horloge.js"></script>', '')
    .replace('./js/index.js', './app.js');

  if (checksum) {
    strIndex = strIndex.replace('./app.js', `./app.${checksum}.js`);
  }

  await fs.writeFile(indexHtmlDistPath, strIndex);
}

async function build() {
  try {
    await rmAndMkdir(distPath);
    await buildJs();
    await buildHtml();
  } catch (error) {
    console.log(err);
  }
}

build();
