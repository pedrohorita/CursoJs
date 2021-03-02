const tec = new Map()
tec.set('react', {framework: false})
tec.set('angular', {framework: true})

console.log(tec.react)
console.log(tec.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']    
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})


console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)