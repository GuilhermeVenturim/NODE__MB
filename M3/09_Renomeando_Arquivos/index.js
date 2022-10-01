const fs = require("fs");

const arqOld = "arquivo.txt";
const arqNew = "new.txt"

fs.rename(arqOld, arqNew, function(err) {

    if(err) {
        console.log(err)
        return
    } 

    console.log(`Esse arquivo ${arqOld} foi renomeado: ${arqNew}`)
});

