const soma = (a, b) => a + b
console.log(soma(2, 3))

const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()



function log(texto = 'Node') {
    console.log(texto)
}
log('A')
log(null)
log()


function total(...nums) {
    let total = 0
    nums.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))