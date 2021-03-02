Array.prototype.forEach2 = function(f) {
    for(let key = 0;key< this.length; key++) {
        f(this[key], key, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2((nome, indice) => console.log(`${indice + 1}) ${nome}`))
