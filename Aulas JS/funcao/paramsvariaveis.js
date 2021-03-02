function soma() {
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i];
    }
    return soma;
}


console.log(soma(1, 2));
console.log(soma());
console.log(soma(2));
console.log(soma(1, 2, 10));
console.log(soma(1, 2, 15, 11, 1, 14, 7));
console.log(soma(1, 2, "teste"));
console.log(soma("a", "2", "OK"));

