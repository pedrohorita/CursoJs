Array.prototype.map2 = function(f) {
    const r = []
    for(let key = 0;key< this.length; key++) {
        r.push(f(this[key], key, this))
    }
    return r
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]


const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 
const toObject = e => JSON.parse(e)
const getPreco = e => e.preco

const resultado = carrinho.map2(toObject).map2(getPreco).map2(paraDinheiro)
console.log(resultado)