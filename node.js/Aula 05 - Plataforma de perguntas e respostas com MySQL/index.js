import express from "express";
import bodyParser from "body-parser";
import connection from "./database/database.js";   // ✅ com extensão
import Pergunta from "./database/Pergunta.js";     // ✅ com extensão
import Resposta from "./database/Resposta.js";

const app = express();

// Conexão com o banco
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((msgErro) => {
    console.log("Erro ao conectar:", msgErro);
  });

// Configurações
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas
app.get("/", async (req, res) => {
  const perguntas = await Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then(perguntas => {
    //DESC é decrescente || ASC é crescente
    res.render("index", { perguntas: perguntas});
    console.log(perguntas);
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  const { titulo, descricao } = req.body;

  Pergunta.create({ titulo, descricao }).then(() => {
    res.redirect("/");
  });
});

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: {id: id}
  }).then(pergunta => {
    if(pergunta != undefined){ //Pergunta encontrada
      
      Resposta.findAll({
        where: {perguntaId: pergunta.id},
        order:[ ['id', 'DESC'] ] 
      }).then(respostas => {
        res.render("pergunta", {
        pergunta: pergunta,
        respostas: respostas
      });
    });
    }else{ // Não encontrada
      res.redirect("/");
    }
  })
});

app.post("/responder", (req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect("/pergunta/"+perguntaId);
  })
});

// Porta
app.listen(3000, () => {
  console.log("App rodando na porta 3000!");
});
