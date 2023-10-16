import net from 'node:net';
import process from 'node:process';

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('connection received port 8080');
  socket.pipe(process.stdout);
});

server.on('error', (err) => {
  // console.log('error occured', err);
  if ((err as any).code === 'EADDRINUSE') {
    console.log('error port 8080 in use');
  }
});

server.on('listening', () => {
  console.log('server started on port 8080');
});

server.listen(8080);
