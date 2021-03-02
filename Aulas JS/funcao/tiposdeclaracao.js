console.log(soma(3, 4)); 
//console.log(sub(3, 4));

//function declaration // funciona antes da definição
function soma(x, y) {
    return x + y;
}

//function expression //não funciona antes da definição
const sub = function (x, y) {
    return x - y;
}

//named function expression //não funciona antes da definição
const mult = function mult(x, y) {
    return x * y;
}