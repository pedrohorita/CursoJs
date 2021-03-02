Array.prototype.filter2 = function(f, arg) {
    const r = []
    if (arg === undefined) {
        arg = this
    }
    for(let key = 0;key< arg.length; key++) {
        if(f(arg[key], key, arg)) {
            r.push(arg[key])
        }
    }
    return r
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


const produtos2 = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
const caro = e => e.preco >= 500
const fragil = e => e.fragil


console.log(produtos.filter2(caro).filter2(fragil))
console.log([].filter2(caro, produtos2).filter2(fragil)) 