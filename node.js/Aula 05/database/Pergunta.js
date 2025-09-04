import { DataTypes } from "sequelize";
import connection from "./database.js";   // ✅ corrigido com extensão

const Pergunta = connection.define("perguntas", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Pergunta.sync({ force: false }) // cria a tabela se não existir
  .then(() => {
    console.log("Tabela 'perguntas' sincronizada!");
  });

export default Pergunta;
