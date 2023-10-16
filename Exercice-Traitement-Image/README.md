# Exercice Node.js Asynchrone

Le but de cet exercice est de parcourir les images du répertoire `src` et de les copier dans un répertoire `dest` en appliquant les opérations suivantes :

- applatir les répertoires (les nouvelles images se trouveront directement dans le répertoire `dest`)
- renommer les fichiers sans espaces, caractères spéciaux et accents
- redimensionner les images pour qu'elles ne dépassent pas `300px` de large
- réduire le poids des fichiers en utilisant des bibliothèques de compression
- générer un rapport au format JSON

## 1 - Initialisation du projet

Cloner ou télécharger ce repository.

A l'intérieur du projet, créer un fichier `package.json` en tapant la commande `npm init` ou `yarn init`.

Créer un fichier `build.js` à la racine du projet puis ajouter un script dans le fichier `package.json` pour qu'on puisse lancer le build des images via la commande `npm run start` ou `yarn start`

## 2 - Placer vous dans le répertoire du projet

Dans le fichier `build.js` ajouter la ligne suivante :

```javascript
process.chdir(__dirname);
```

Cette ligne garantit que les chemins seront relatifs au dossier racine du projet et non au current working directory (CWD -> le dossier dans lequel se trouve le Terminal)

## 3 - Installation de `fs-extra`

Installer la bibliothèque `fs-extra` via la commande `npm install fs-extra`

Vous trouverez la documentation de `fs-extra` ici [https://github.com/jprichardson/node-fs-extra](https://github.com/jprichardson/node-fs-extra).

`fs-extra` reprend les fonctions du module `fs` de Node.js documentées ici : [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html) et ajoute 15 méthodes plus haut niveau (`copy`, `move`, `remove`, `emptyDir`...)

Comme indiqué dans sa documentation `fs-extra` propose 3 versions de chaque fonction :

- asynchrone basée sur des promesses (et donc utilisable avec le style `.then/.catch/.finally` ou `async/await`)
- asynchrone basée sur des callbacks
- synchrone

```javascript
const fs = require('fs-extra');

// Async with promises:
fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))
  .catch((err) => console.error(err));

// Async with callbacks:
fs.copy('/tmp/myfile', '/tmp/mynewfile', (err) => {
  if (err) return console.error(err);
  console.log('success!');
});

// Sync:
try {
  fs.copySync('/tmp/myfile', '/tmp/mynewfile');
  console.log('success!');
} catch (err) {
  console.error(err);
}

// Async/Await:
async function copyFiles() {
  try {
    await fs.copy('/tmp/myfile', '/tmp/mynewfile');
    console.log('success!');
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
```

## 4 - Créer et vider le répertoire `dest`

En utilisant `fs-extra` et le style `async/await` créer une fonction `rmAndMkdir` qui supprime puis créer un nouveau répertoire `dest`.

_Indication : la méthode `remove` de `fs-extra` ne provoque pas d'erreur si on l'utilise sur un dossier inexistant._

Appeler la fonction `rmAndMkdir` en fin de fichier comme ceci :

```javascript
(async function () {
  await rmAndMkdir();
})();
```

## 5 - Copier les fichiers

On souhaite maintenant recopier les images de `src` vers `dest` en supprimant les sous-dossiers, les majuscules et les caractères autres que les lettres latines non accentuées, les chiffres et les tirets.

Par exemple le fichier `src/Médias - Presse - Editions/La Nouvelle République.svg` devra être copié vers `dest/la-nouvelle-republique.svg`

Pour cela installer les bibliothèques `globby` et `lodash` : `npm install globby lodash`.

Créer et appeler la fonction asynchrone `copyImages` comme ceci :

```javascript
async function copyImages() {
  const srcImgPaths = await globby('src/**/*.{png,svg}');

  console.log(srcImgPaths);
}

(async function () {
  await rmAndMkdir();
  await copyImages();
})();
```

_Indication : pensez à importer `globby` en début de fichier_

Boucler ensuite sur la variable `srcImgPaths` pour recopier les fichiers comme demandé.

_Indication :_

_Vous pourriez avoir besoin :_

- _de la méthode `parse` du module `path` de Node.js ([doc](https://nodejs.org/api/path.html))_
- _des méthodes `deburr` et `kebabCase` de Lodash pour supprimer les accents et caractères spéciaux et remplacer les espaces par des tirets ([doc](https://lodash.com/docs))_
- _de la méthode `copy` de `fs-extra` ([doc](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md))_

## 6 - Générer un rapport JSON

Modifier la fonction `copyImages` pour qu'elle génère un objet `report` qui devra contenir les données suivantes :

```javascript
{
  Agences: [
    { name: 'Agence Surf', imgPath: 'agence-surf.png' },
    { name: 'Aneo', imgPath: 'aneo.svg' },
    { name: 'AxioCode', imgPath: 'axio-code.svg' },
    // ...
  ],
  Agroalimentaire: [
    { name: 'Danone', imgPath: 'danone.png' },
    { name: 'Maître CoQ', imgPath: 'maitre-co-q.png' }
  ],
  'Assurances - Mutuelles': [
    {
      name: 'Solidaris - Mutualité Socialiste (Belgique)',
      imgPath: 'solidaris-mutualite-socialiste-belgique.svg'
    }
  ],
  // ...
}
```

Pour récupérer la catégorie (Agences, Agroalimentaire...) vous pourriez avoir besoin de :

- la propriété `sep` du module `path` de Node.js ([doc](https://nodejs.org/api/path.html))
- la méthode `split` de l'API String de JavaScript ([doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))

Ecrire ensuite le contenu de cet objet dans le fichier `report.json` en utilisant la méthode `writeJson` de fs-extra.

## 7 - Redimensionner les images

Installer la bibliothèque de traitement d'image `sharp` : `npm install sharp`

Créer une nouvelle fonction asynchrone `copyOrResizeImage` qui prendra en paramètres `srcImgPath`, `destImgPath` et `maxWidth` (la largeur maximale souhaitée pour l'image).

Appeler cette fonction dans `copyImages` si l'extension est différente de `.svg`, sinon garder la ou les instructions précédentes qui recopiaient le fichier de `src` vers `dest`, exemple :

```javascript
if (ext === '.svg') {
  await fs.copy(srcImgPath, destImgPath);
} else {
  await copyOrResizeImage(srcImgPath, destImgPath, 300);
}
```

Dans `copyOrResizeImage`, utiliser les méthodes `metadata` et `resize` de `sharp` pour et redimensionner les images uniquement si la taille d'origine est supérieure à `maxWidth`.

Vous pouvez vous inspirer de l'exemple ci-dessous, si ce n'est que les `.then` devront être écrits dans le style `async/await` : [https://sharp.pixelplumbing.com/api-input#examples](https://sharp.pixelplumbing.com/api-input#examples)

_Indication : la méthode `resize` est synchrone, pas besoin de la préfixer avec `await`._

Utiliser ensuite la méthode `.toFile()` de `sharp` pour créer la nouvelle image (toujours avec `async/await`) : [https://sharp.pixelplumbing.com/api-output](https://sharp.pixelplumbing.com/api-output)

## 8 - Réduire le poids des images

Installer la bibliothèque `imagemin` en version 7 et ses plugins `imagemin-pngquant` et `imagemin-svgo` : `npm install imagemin@7 imagemin-pngquant imagemin-svgo`

Créer la fonction asynchrone `reduceImagesSize` et l'appeler après la fonction `copyImages`.

Réduire le poids des fichiers en vous inspirant des exemples suivants :

- [https://github.com/imagemin/imagemin/tree/v7.0.1#usage](https://github.com/imagemin/imagemin/tree/v7.0.1#usage)
- [https://github.com/imagemin/imagemin-svgo#usage](https://github.com/imagemin/imagemin-svgo#usage);

Attention : à partir de sa version 8 `imagemin` utilise les modules ESM ce qui veut dire que vous ne pourrez plus utiliser la fonction `require` à l'avenir.
