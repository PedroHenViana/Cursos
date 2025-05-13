Comando necessários para criar um banco e inserir valores dentro dele
/*  mysql -h localhost -u root -p - Comando necessário para fazer login no seu banco de dados via CMD para acesso localhost
    SHOW DATABASES; - Comando para mostrar se possui um banco de dados criado
    CREATE DATABASE sistemaDeCadastro(exemplo de nome); - Comando para criar um banco de dados caso não possua ou se deseja ter mais
    SHOW DATABASES; - Em seguida da criação do banco de dados, execute o comando novamente para ver se foi criado, caso não foi, repita o processo
    USE sistemaDeCadastro; - Comando para acessar o banco de dados para realizar operações
    Create Table NomeDaTabela(funções dela) - Comando de como criar uma tabela e atribuir funções e limites para o que vai ser salvo*/

Create Table usuarios( 
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT 
);

/* SHOW TABLES; - Comando para mostrar as tabelas criadas no banco de dados
    DESCRIBE usuarios; - Comando para descrever uma tabela em especifico com os valores que ela possui
    Em seguidas temos exemplos de como inserir valores nessa tabela*/

INSERT INTO usuarios(nome, email, idade) values(
    "Pedro Viana",
    "email@teste.com.br",
    19
);

INSERT INTO usuarios(nome, email, idade) values(
    "Jorge Henrique",
    "email@teste11.com.br",
    16
);

INSERT INTO usuarios(nome, email, idade) values(
    "Mark Thomas",
    "email@teste22.com.br",
    30
);

SELECT * FROM usuarios WHERE idade = 19; /* Comando que puxa as informações dos usuarios que tem 19 anos*/
SELECT * FROM usuarios WHERE idade >= 19; /* Mesma função que a linha de cima mas com excessão que ele puxa as informações apartir dos 19 anos*/

/*select * from (Selecione todos) usuarios(Da tabela usuarios) where idade >= 19(Que tenha mais ou igual que 19 como idade)

Como utilizar a clausula DELETE

    DELETE como diz o nome é utilizado para deletar um registro de alguma tabela
    DELETE(Deletar) FROM(os registros da seguinte tabela) usuarios(Se utilizar o comando até aqui a tabela inteira será excluida)
    DELETE FROM usuarios WHERE(serve para dar uma condição especificando onde será excluido e qual valor será deletado)*/

DELETE FROM usuarios WHERE nome = "Jorge"; /*Todos os campos que tiverem esse mesmo nome será excluido, caso seja mais especifico colocar o nome inteiro*/

/*Comando para executar uma atualização na tabela

    UPDATE(Irá atualizar a seguinte tabela) 
    usuarios(tabela especificada que será atualizada) 
    SET(Coluna que será atualizada) 
    nome(Coluna escolhida para alteração)
    WHERE(Comando onde escolhe o registro para sofrer alteração)

    */

UPDATE usuarios SET nome = "Nome de Teste" WHERE = "Mark Thomas";