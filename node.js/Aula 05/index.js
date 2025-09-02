import express from "express";
import bodyParser from "body-parser";
import connection from "./database/database.js";
import Pergunta from "./database/Pergunta.js";

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
  const perguntas = await Pergunta.findAll({ raw: true, order: [["id", "DESC"]] });
  res.render("index", { perguntas });
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

// Porta
app.listen(3000, () => {
  console.log("App rodando na porta 3000!");
});