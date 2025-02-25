import express from 'express';
const port = 3001;

const app =  new express();


//lancer le server

app.listen(port, () =>{
    console.log(`serveur demarre sur le port ${port} avec succes ok`);
    
});