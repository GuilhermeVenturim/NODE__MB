const fs = require("fs");

console.log("Início")

fs.writeFile("arquivo.txt", "Oi", function(err) {
    setTimeout(function(){
        console.log("Arquivo criado!");
    }, 1000);
});

console.log("Fim");

//Esse método permite executar parte do código de forma assincrona enquanto o restante sincrono é executado. Não dependendo do resultado do Async para o Sync continuar a ser executado.