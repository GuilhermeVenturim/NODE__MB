const fs = require("fs");

console.log("Início")

fs.writeFileSync("arquivo.txt", "Oi");            //Esse método diz que essa linha seja executada e a próxima linha espere.

console.log("Fim");

