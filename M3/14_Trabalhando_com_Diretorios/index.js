const fs = require("fs");

//Se não existir a pasta passada como parâmetro, exibir texto "Não existe!" e em seguida criar a pasta em questão com mkdirSync.
if(!fs.existsSync("./test")){
    console.log("Não existe!")
    fs.mkdirSync("test")
} else if(fs.existsSync("./test")){
    console.log("Existe!")
}