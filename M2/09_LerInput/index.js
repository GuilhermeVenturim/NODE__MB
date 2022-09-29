const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

//Inicia o readline
readline.question("Qual linguagem de programação você aprendeu primeiro? ", (language) => {
    if(language === "Python"){
        console.log("Isso nem é linguagem, hahaha.")
    }else {
        console.log(`A primeira linguagem de programação que aprendi foi ${language}.`)
    }

    readline.close         //Para a execução do readline
});
