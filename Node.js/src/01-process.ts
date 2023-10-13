// function(exports, required, module, __filename, __dirname)
import process from "node:process";

// node dist/01-process.js --minify --hash
// manipuler argv via les libs : minimist, yargs, commander
console.log(process.argv);

// CWD : Current Working Dir
// le dossier dans lequel se trouve mon terminal
// IMPORTANT : quand on manipule un fichier en relatif
// le chemin relatif dépend du CWD
console.log(process.cwd());

// pour modifier le CWD depuis Node :
// avec ce code tous les chemins seraient relatifs à la racine du projet
process.chdir(__dirname + '/..');
console.log(process.cwd());

// Infos sur le CPU et la RAM
console.log(process.cpuUsage());
console.log(process.memoryUsage);
console.log(process.resourceUsage());

// Les variables d'environnement
console.log(process.env.PATH);

// quand NODE_ENV vaut production
// les commandes yarn ou npm n'installe pas les devDependencies
console.log(process.env.NODE_ENV);

console.log(process.platform); // darwin (mac), win32 (windows), linux
console.log(process.arch); // arm64
console.log(process.version); // v18.18.1


console.log(process.uptime());

process.exit(1); // kill le process avec une erreur

