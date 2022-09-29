function a() {
    console.log("Exacutando a()")
};

function b() {
    console.log("Exacutando b()")
};

function c() {
    console.log("Exacutando c()")
    a()
    b()
};

c();

//O NodeJs executa o código de cima para baixo. Observe a ordem de execução após chamar a função "c": c, a e por último b.