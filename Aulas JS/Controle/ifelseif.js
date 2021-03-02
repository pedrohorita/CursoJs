Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}


const ImprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log("Quadro de honra")
    }
    else if(nota.entre(7, 8.99)){
        console.log("Aprovado")
    } else if(nota.entre(4, 6.99)) {
        console.log("Recuperação")
    }else if(nota.entre(0, 3.99)) {
        console.log("Reprovado")
    } else {
        console.log("Nota inválida")
    }
}

ImprimirResultado(10)
ImprimirResultado(8.9)
ImprimirResultado(6.55)
ImprimirResultado(2.3)
ImprimirResultado(-1)
ImprimirResultado(11)