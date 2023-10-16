import fs from 'node:fs';
import { createGzip } from 'node:zlib';

// ReadStream : lecture (méthode read)
// WriteStream : écriture (méthode write)
// DuplexStream : lecture + écriture (méthodes read + write)
// TransformStream : lecture -> transformation -> écriture (méthodes read + write)

const rs = fs.createReadStream('big-file.html');
const ws = fs.createWriteStream('big-file.html.zip');
const ts = createGzip();

rs.once('open', () => {
  console.log('file big-file.html opened');
});

rs.on('data', () => {
  console.log('data received from big-file.html');
});

rs.on('close', () => {
  console.log('file big-file.html closed');
});

// Sous un environnement Posix (Linux, Mac, Git Bash, WSL)
// on peut chainer les programmes avec des pipes
// cat big-file.html | gzip > big-file.html.copy

// Dans l'API stream on peut faire pareil
rs.pipe(ts).pipe(ws);
