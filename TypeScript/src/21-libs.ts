import { Chalk, Options } from 'chalk'; // le fichier .d.ts est dans node_modules/chalk
import _ from 'lodash'; // le fichier .d.ts a été installé via @types/lodash
import fs from 'node:fs/promises'; // le fichier .d.ts a été installé via @types/node@^MA_VERSION_DE_NODE
import { getInt } from 'mdn-random'; // le .d.ts a du être écrit

const options: Options = {
  level: 3,
};
const chalk = new Chalk(options);

console.log(chalk.red('Hello'));
console.log(_.kebabCase('Bonjour à tous'));
console.log(getInt(0, 100));
console.log(await fs.readFile('package.json', { encoding: 'utf-8' }));
