//Instale o inquirer e chalk.
//const inquirer = require("inquirer");                  *****   O import não funcionou dessa forma.   *****
import inquirer from "inquirer";
import chalk from "chalk";
//const chalk = require("chalk");                        *****   O import não funcionou dessa forma.   *****

//Utilize o inquirer para receber o nome e o ano de nascimento do usuário.
inquirer.prompt([{
    name: "pergunta1",
    message: "Digite seu nome: ",
}, {
    name: "pergunta2",
    message: "Digite seu ano de nascimento: ",
}]).then((questions) => {
//Apresentar uma resposta amigável ao usuário com bg amarelo e cor de texto preto.
    console.log(chalk.bgYellow.black(`Seu nome é ${questions.pergunta1}, e seu ano de nascimento é ${questions.pergunta2}`));
})
//Insira um tratamento para um possível erro do inquirer com o catch.
.catch(err => console.log(err));



