import { app } from './app';
import http from 'node:http';

let PORT = 3001;

function start() {
  const server = http.createServer(app);
  server.on('error', (err) => {
    if ((err as any).code === 'EADDRINUSE') {
      PORT++;
      return start();
    }
    console.log(err);
  });
  server.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
  });
}

start();
