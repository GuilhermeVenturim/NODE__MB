//Impressão de mais de um valor:
const x = 1911;
const y = "Guilherme";
const z = [1, 2];

console.log(x, y, z);

//Contagem de impressões com uso de template strings:
console.count(`O valor de X é ${x}. Contagem:`);
console.count(`O valor de X é ${x}. Contagem:`);
console.count(`O valor de X é ${x}. Contagem:`);
console.count(`O valor de X é ${x}. Contagem:`);

//Variável entre string. %s converte para string o valor da variável passada no argumento seguinte.
console.log("O nome dele é %s, e ele é programador!", y);

//limpar o console:
setTimeout(() => {
    console.clear()
}, 2000);
