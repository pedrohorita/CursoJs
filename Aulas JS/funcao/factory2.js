function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    };
}

const a = criarProduto("a", 1.2);
const b = criarProduto("b", 5.2);

console.log(a);
console.log(b);