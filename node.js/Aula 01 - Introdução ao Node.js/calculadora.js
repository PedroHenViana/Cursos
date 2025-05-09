var nome = "Minha Calculadora Versão 1.0";

function soma(a,b){
    return a + b;
};

function mult (a,b){
    return a * b;
};

function sub (a,b){
    return a - b;
};

function div (a,b){
    return a/b;
};

module.exports = {
    soma, mult, sub, div, nome
};

/* module.exports = soma; */ //Como exportar  modulo, pode ser feito com qualquer arquivo