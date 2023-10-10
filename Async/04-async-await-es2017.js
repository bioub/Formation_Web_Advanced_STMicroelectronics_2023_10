import fs from 'node:fs/promises';

// si mon API est basé sur des promesses (ce qui est le cas de fs/promises)
// on peut utiliser les fonctions asynchrones :

async function copyPackageJson() {
  try {
    const data = await fs.readFile('package.json');
    await fs.writeFile('package.json.copy', data);
    console.log('Copy done');
  } catch (err) {
    // Gestion d'erreur générique
    console.log(err);
  }
}

copyPackageJson();

// pile d'appel
// ^
// |
// |
// |                                [writeFile   ] ..⟳..       [lg           ]
// |[readFile]  ..⟳..               [taskReadFile]             [taskWriteFile]
// +------------------------------------------------------------------------------> temps
