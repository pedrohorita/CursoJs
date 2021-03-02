const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const todosBolsistas =  (resultado, bolsista) => resultado && bolsista
const resultado1 = alunos.map(a => a.bolsista).reduce(todosBolsistas)
console.log(`Todos os alunos são bolsistas? R: ${resultado1}`)


const algumBolsista =  (resultado, bolsista) => resultado || bolsista
const resultado2 = alunos.map(a => a.bolsista).reduce(algumBolsista)

console.log(`Algum aluno é bolsista? R: ${resultado2}`)