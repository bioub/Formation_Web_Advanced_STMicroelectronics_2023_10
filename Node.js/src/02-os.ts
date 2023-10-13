import os from 'node:os';

// redondant avec process
console.log(os.arch());
console.log(os.platform());


console.log(os.cpus());
console.log(os.availableParallelism()); // === os.cpus().length
console.log(os.networkInterfaces());

console.log(os.endianness());
console.log(os.freemem() / 1024 / 1024);
console.log(os.totalmem());

console.log(os.loadavg());
console.log(os.tmpdir());


console.log(os.userInfo());
console.log(os.uptime());
