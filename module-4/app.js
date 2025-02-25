const FileSystem = require ('fs').promises;

async function readFile(nameFile) {
    try{
         const conter = await FileSystem.readFile(nameFile,'utf-8');
         console.log(`conter de ${nameFile} :\n${conter}`);
         
    }catch(erreur){
        console.log(`erreur lors de la lecture de ${nameFile} :`,erreur);
        
    }
}
readFile('exemple.txt');



async function fetchData() {
    try{
        const response =  await fetch("https://randomuser.me/api/?results=24");
        const data = await response.json();
        console.log(data);
        
    }catch(error) {

        console.error('Errueur lors de la recuperation des donnees:',error);
    }
    
}
fetchData()

fetch('https://api.blablagues.net/?rub=blagues')
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error('Erreur lors de la récupération des données:', error);
});