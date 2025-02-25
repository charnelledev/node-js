const http = require('http');

http.createServer((req, res) => {

res.end('Bonjour, bienvenue sur mon serveur !');

}).listen(5000, () => console.log('Serveur en cours sur http://localhost:5000'))




