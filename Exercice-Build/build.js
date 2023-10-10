const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkdir(dirPath) {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath);
}

async function buildJs() {
  // Exercice 3
  // Utiliser Promise.all pour lire les 2 fichiers en même temps
  const bufHorloge = await fs.readFile(horlogeJsPath);
  const bufIndex = await fs.readFile(indexJsPath);

  await fs.appendFile(appJsDistPath, bufHorloge);
  await fs.appendFile(appJsDistPath, bufIndex);
}

async function buildHtml() {
  let strIndex = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  strIndex = strIndex.replace('<script src="./js/horloge.js"></script>', '')
    .replace('./js/index.js', './app.js');

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
