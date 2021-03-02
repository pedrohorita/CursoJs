const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona no último elemento do array 
console.log(pilotos)

pilotos.shift()
console.log(pilotos) // remove o primeiro elemento do array


pilotos.unshift('Hamilton') // adiciona no primeiro elemento do array
console.log(pilotos)



// splite pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remove
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array
console.log(algunsPilotos2)