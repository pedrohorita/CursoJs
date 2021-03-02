const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

 axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    //const toObject = e => JSON.parse(e)
    const chinesa = funcionario => funcionario.pais === 'China'
    const mulher = funcionario => funcionario.genero === 'F'
    //const salario = funcionario => {funcionario.nome, funcionario.salario}
    const menor = (resultado, atual) => atual.salario < resultado.salario ? atual : resultado 

    const funcionario = funcionarios
        .filter(chinesa)
        .filter(mulher)
        .reduce(menor)
     console.log(funcionario)
 })

 