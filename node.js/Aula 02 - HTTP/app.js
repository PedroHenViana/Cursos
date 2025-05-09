var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("Bem vindo ao meu site!")
}).listen(8181); 
console.log("Meu servidor está rodando");

// Quando executamos este comando listen(), ele está criando um servidor http no nosso computador na porta 8181
// O número da porta pode ser trocado a qualquer momento
// Nesta aula vemos como criar uma aplicação web através do HTTP