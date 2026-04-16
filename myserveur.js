/**
 * le fichier myserveur.js a pour mission de créer le serveur de l'application
 */

// J'importe le package HTTP
const http = require("http");


// J'importe l'application app.js
const app = require("./app");

// Je créer un server HTTP
const server = http.createServer(app);

const numeroPort = 3007

server.listen(numeroPort,() => {
    console.log("Le serveur est à l'écoute sur le port ", numeroPort);
})    
    