import http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello, world !');
  res.end();
});

server.on('error', (err) => {
  // console.log('error occured', err);
  if ((err as any).code === 'EADDRINUSE') {
    console.log('error port 8080 in use');
  }
});

server.listen(8080, () => {
  console.log('server started on port 8080');
});
