function falarDepoisDe(seg, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            reject(frase)
        }, seg * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))