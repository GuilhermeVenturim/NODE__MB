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
        }else if(action === 'Consultar Saldo') {
            getAccountBalance()
        }else if(action === 'Depositar') {
            deposit()
        }else if(action === 'Sacar') {
            widthDraw()
        }else if(action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
            process.exit()
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

//Add an amount to user account
function deposit() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual  o nome da sua conta?'
        }
    ])
    .then((answer) => {

        const accountName = answer['accountName']

    //Verify is account exists
        if(!checkAccount(accountName)) {
            return deposit()
        }

        inquirer.prompt([
            {
                name:'amount',
                message:'Quanto você deseja depositar?',
            },
        ]).then((answer) => {

            const amount = answer['amount']

            //Add an amount

            addAmount(accountName, amount)

            operation()

        }).catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function checkAccount(accountName) {

    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, tente novamente!'))
        return false
    }

    return true
}

function addAmount(accountName, amount) {

    const accountData = getAccount(accountName)

    if(!amount) {

        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))

        return deposit

    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
        console.log(err)
        },
    )

    console.log(
        chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`),
        )
    //console.log(`Seu saldo agora é de R$ ${accountData}`)
}

function getAccount(accountName) {

    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

//Show account balance
function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {

        const accountName = answer["accountName"]

        //verify is account exists
        if(!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(
            `Olá, o saldo da sua conta é de R$ ${accountData.balance}`
        ))

        operation()

    }).catch(err => console.log(err))
}

//WidthDraw an amount from user account

function widthDraw() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {

        const accountName = answer['accountName']

        if(!checkAccount(accountName)) {

            return widthDraw()

        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja sacar?'
            }
        ]).then((answer) => {

            const amount = answer['amount']

            removeAmount(accountName, amount)

        }).catch(err => console.log(err))
    })
    .catch(err => console.log(err))

}

function removeAmount(accountName, amount) {

    const accountData = getAccount(accountName)

    if(!amount) {

        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'),
        )

        return widthDraw()
    }

    if(accountData.balance < amount) {

        console.log(chalk.bgRed.black('Valor indisponível!'))

        return widthDraw()

    }

    //Salvar valor após saque:

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi realizado um saque de R$ ${amount} na sua conta!`))

    operation()

}







