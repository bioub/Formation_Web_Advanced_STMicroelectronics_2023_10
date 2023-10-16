import EventEmitter from "node:events";

class UserService extends EventEmitter {
  async login(username: string, password: string) {
    console.log('TODO impletement login');
    this.emit('logged', username);
  }

  async create(username: string, password: string) {
    console.log('TODO impletement login');
    this.emit('created', username);
  }
}


// Projet A
const userServiceA = new UserService();
// .on / .off / .once
userServiceA.on('created', (username: string) => {
  console.log('TODO send email to ' + username);
});

await userServiceA.create('romain', '123456');


// Projet B
const userServiceB = new UserService();
userServiceB.on('created', (username: string) => {
  console.log('TODO send SMS to ' + username);
});

await userServiceB.create('toto', 'titi');
