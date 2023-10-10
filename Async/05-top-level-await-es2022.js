import fs from 'node:fs/promises';

// top-level await ne fonctionne qu'avec les modules ESM
// modifie le comportement de ce qui suit (la ligne 15 ici)
// s'exécutera après la copie

try {
  const data = await fs.readFile('package.json');
  await fs.writeFile('package.json.copy', data);
  console.log('Copy done');
} catch (err) {
  // Gestion d'erreur générique
  console.log(err);
}

// pile d'appel
// ^
// |
// |
// |                                [writeFile   ] ..⟳..       [lg           ]
// |[readFile]  ..⟳..               [taskReadFile]             [taskWriteFile]
// +------------------------------------------------------------------------------> temps
