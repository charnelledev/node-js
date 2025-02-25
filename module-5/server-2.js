
// const http = require('http');
// const PORT = 50001;
// const server = http.createServer((req, res)=>{

//     try{
//         switch(req.url){
//             case '/':
//                 res.writeHead(200,{'content-type':'text/plain '});
//                 res.end('@é"&(-');
//                 break;
//                 case'/about':
//                 res.writeHead(200, {'content-type':'text/plain;charset=utf-8'});
//                 res.end('cesi est la page a propos @"èé');
//                 break;
                
//                 default:
//                     res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
//                     res.end('Page non trouvée.');
//                     break;
//                 }
//             }catch (error) {
// console.error('Erreur lors de la gestion de la requête :', error);
// res.writeHead(500, { 'Content-Type': 'text/plain' });
// res.end('Une erreur est survenue sur le serveur.');
// }
// });

// server.listen(PORT, () => {
// console.log(`Serveur en cours sur http://localhost:${PORT}`);

// })



// const http = require('http');
// const fs=require('fs').promises;

// const server = http.createServer(async (req,res) =>{
//     try{
//         const data = await fs.readFile('./index.txt',  'utf-8');
//         res.writeHead(200,{'content-type':'text/txt'});
//         res.end(data);
        
//     }catch(error){
//         res.writeHead(500,{'content-type':'text/plain'});
//         res.end('erreur interne du sreveur');
//         console.error('erreur de lecture du fichier:',error);
        
//     }
// });

// server.listen(3000,() =>{
//     console.log('serveur en ecoute sur le port 3000');
    
// })




function simulateAsyncOperation(id, delay) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (Math.random() > 0.8) {
    reject(`Erreur dans l'opération ${id}`);
    } else {
    resolve(`Résultat de l'opération ${id}`);
    }
}, delay);
});
}
const operations = [
simulateAsyncOperation(1, 800),
simulateAsyncOperation(2, 5000),
simulateAsyncOperation(3, 800)
];
Promise.all(operations)
.then(results => {
console.log('Tous les résultats:', results);
})
.catch(error => {
console.error('Une erreur est survenue:', error);
});