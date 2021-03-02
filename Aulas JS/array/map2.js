const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]


const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 
const toObject = e => JSON.parse(e)
const getPreco = e => e.preco

const resultado = carrinho.map(toObject).map(getPreco).map(paraDinheiro)
console.log(resultado)