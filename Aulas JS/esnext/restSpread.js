const funcionario = { nome: 'Maria', salario: 12345.67}

const clone = {ativo: true, ...funcionario}
console.log(clone)


const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)



