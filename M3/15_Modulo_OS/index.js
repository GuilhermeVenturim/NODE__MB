const os = require("os");

//Quantos cpus tem o servidor:
console.log(os.cpus());

//Quanto de memória tem livre na máquina:
console.log(os.freemem());

//Qual o diretório da home:
console.log(os.homedir());

//Qual é o sistema operacional que está rodando nessa máquina:
console.log(os.type());

