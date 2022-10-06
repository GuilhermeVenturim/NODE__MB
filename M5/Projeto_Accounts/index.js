//Importando módulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';

//Módulos internos (Core modules)
import fs from 'fs';

//Chamando a função:
operation();

function operation() {
    inquirer
    .prompt([
        {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: ["Criar conta", "Consultar Saldo", "Depositar", "Sacar", "Sair"],
        },
    ])
    .then((answer) => {
        const action = answer['action']
        
        if(action === 'Criar conta') {
            createAccount()
        }
    })
    .catch((err) => console.log(err))
};

//Create on account
function createAccount() {
    console.log(chalk.bgGreen.black(`Parabéns por escolher o nosso banco!`))
    console.log(chalk.green(`Defina as opções da sua conta a seguir:`))
    buildAccount()
};

function buildAccount() {

    inquirer.prompt([
        {
            name:'accountName',
            message: 'Digite seu nome para a conta:'
        }
    ]).then(answer => {

        const accountName = answer['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esse conta já existe. Por favor, escolha outro nome!'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`,
        '{"balance": 0}',
        function(err) {
            console.log(err)
        },
        )

        console.log(chalk.green('Parabéns, sua conta foi criada!'))
        operation();
    })
    .catch(err => console.log(err))
};






