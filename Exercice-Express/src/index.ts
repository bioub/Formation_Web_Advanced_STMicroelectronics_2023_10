import { app } from './app';
import http from 'node:http';
import mongoose from 'mongoose';

let PORT = 3001;

async function start() {
  const server = http.createServer(app);
  server.on('error', (err) => {
    if ((err as any).code === 'EADDRINUSE') {
      PORT++;
      return start();
    }
    console.log(err);
  });

  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  server.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
  });
}

start();
