for(let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
    console.log(i)
}

for(let v of assuntosEcma) {
    console.log(v)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let a of assuntosMap) {
    console.log(a)
}

for(let k of assuntosMap.keys()) {
    console.log(k)
}

for(let v of assuntosMap.values()) {
    console.log(v)
}

for(let k of assuntosMap.keys()) {
    console.log(k)
}

for(let [c, v] of assuntosMap.entries()) {
    console.log(c, v)
}

const s = new Set(['a', 'b', 'c'])
for(let l of s) {
    console.log(l)
}
