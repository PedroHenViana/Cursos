import { DataTypes } from "sequelize";
import connection from "./database";

const Pergunta = connection.define('pergunta', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Pergunta.sync({force: false}).then(() => {
    console.log("Tabela 'perguntas' sincronizada")
});

export default Pergunta;