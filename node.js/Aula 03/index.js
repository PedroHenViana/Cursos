const express = require("express"); //Nesta linha de codigo estamos importando o Express
const app = express(); //Nesta linha estamos iniciando o Express na const app
// Tanto para importar ou inicializar podem ser var, const e etc, que conseguira importar e executar
// Mas a const pode favorecer a mais com a segurança no futuro para evitar erros no Projeto

app.get("/", function(requisicao, resposta){
    resposta.send("Bem vindo a minha aplicação!")
});

app.get("/blog/:artigo", function(req, res){
    var artigo = req.params.artigo;

    if(artigo){
        res.send("Artigo: " + artigo + " !");
    }else{
        res.send("Seja bem vindo ao meu blog de estudos!");
    }
});

app.get("/canal", function(req, res){
    res.send("Seja bem vindo ao meu canal");
});

app.get("/ola/:nome", function(req, res){
    //REQ são os dados enviados pelo usuário
    //RES é a resposta que vai ser enviada para o usuário
    var nome = req.params.nome;
    res.send("<h01>Oi " + nome + " </h01>");
});

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("O servidor iniciou com sucesso!");
    }
});