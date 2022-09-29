//nome

console.log(process.argv);                                                                  //Acessar funcionalidade process.argv

const args = process.argv.slice(2);                                                         //Encontrar argumento

console.log(args);                                                                          //Mostrar argumento encontrado

const nome = args[0].split("=")[1];                                                         //Armazenar valor encontrado
console.log(nome);                                                                          //Exibir valor armazenado

const nascimento = args[1].split("=")[1];                                                   //Armazenar valor encontrado
console.log(nascimento);                                                                    //Exibir valor armazenado

console.log(`O nome dele é ${nome} e o ano de seu nascimento é ${nascimento}.`)             //Exibir resultados de forma amigável

//Comando usado no terminal para testar a funcionalidade:
//node index.js nome=Guilherme