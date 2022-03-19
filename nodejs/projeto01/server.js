const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = './pcRamUsage.js';

http.createServer((req, res) => {
res.end('<h1>Working</h1>')
}).listen(3000, () => console.log(` Server is running in ${host}:${port}, ${stats}`));