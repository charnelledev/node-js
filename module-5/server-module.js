
// const http = require('http');
import { log } from 'console';
import  http from 'http';                                                             
const server = http.createServer((req,res) =>{
    console.log(`${req.method} ${req.url}`);
    
    
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Bonjour, bienvenue sur mon serveur Node.js');

})
server.listen(3000, ()=> {
    console.log('server demarre sur le port 3000 avec succes');
    
    });