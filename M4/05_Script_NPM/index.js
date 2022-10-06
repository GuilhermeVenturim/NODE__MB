const _ = require("lodash");
//import chalk from "chalk";
const chalk = require("chalk");

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

const diff = _.difference(a, b);

console.log(chalk.bgRed.bold(diff));
//Resultado: os números apresentados não constam no Array b.


//ATENÇÃO!!!
//Versão do chalk utilizado:
//npm i chalk@4.1.2 --save-dev

//Comando utilizado para utilizar o script:
//npm run start