
// const http = require('http');

import  http from 'http';  
import fileSystem  from 'fs';
import path from 'path';                                                          
const server = http.createServer((req,res) =>{
    console.log(`${req.method} ${req.url}`);
    
    // gestion des routes baser sur l'url demander

    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('page d\' accueil')
        
    }else if (req.url === '/about'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('a propos'); 
    }else {
        res.writeHead(404,{'content-type':'text/html; utf-8'});
        res.end("<h1 style=' color: red;'>page non trouver<?h1>"); 
    }
    
    // res.writeHead(200,{'content-type':'text/plain'});
    // res.end('Bonjour, bienvenue sur mon serveur Node.js');

})
server.listen(3002, ()=> {
    console.log('server demarre sur le port 3002 avec succes');
    
    });