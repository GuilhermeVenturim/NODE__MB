//Módulo externo
const minimist = require("minimist");

//Módulo interno
const soma = require("./soma").soma;

const args = minimist(process.argv.slice(2));

//parseInt converte string em número
const a = parseInt(args["a"]);
const b = parseInt(args["b"]);


soma(a, b);

//Comando utilizado no terminal como exemplo:
//node index.js --a=1900 --b=11