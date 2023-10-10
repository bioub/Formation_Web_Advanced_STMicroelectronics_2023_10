import fs from 'node:fs';

// En version synchrone les appels s'enchainent
// La gestion d'erreur peut centralisée avec try .. catch
try {
  const data = fs.readFileSync('package.json');
  fs.writeFileSync('package.json.copy', data);
  console.log('Copy done');
} catch (err) {
  // Gestion d'erreur générique
  console.log(err);
}

// pile d'appel
// ^
// |
// |
// |
// |try { [readFile                     ][writeFile                 ][lg] }
// +----------------------------------------------------------------------------> temps


// En version synchrone les appels sont imbriqués (en pyramide)
// La gestion d'erreur ne peut pas être centralisée
// On appelle cela un Callback Hell / Pyramid of Doom
fs.readFile('package.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('package.json.copy', data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy done');
      }
    });
  }
});

// pile d'appel
// ^
// |
// |
// |                                [writeFile   ] ..⟳..       [lg           ]
// |[readFile]  ..⟳..               [taskReadFile]             [taskWriteFile]
// +------------------------------------------------------------------------------> temps
