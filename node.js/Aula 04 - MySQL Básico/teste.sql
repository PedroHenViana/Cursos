Create Table usuarios( /*Comando de como criar uma tabela*/
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT 
);

INSERT INTO usuarios(nome, email, idade) values( /*comando de como inserir na tabela*/
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

select * from usuarios where idade = 19;