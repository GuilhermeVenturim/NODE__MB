const path = require("path");

//Path absoluto
console.log(path.resolve('test.txt'));

//Formar path
const midFolder = "relatorios";
const fileName = "guilherme.txt";

const finalPath = path.join("/", "arquivos", midFolder, fileName);

console.log(finalPath);