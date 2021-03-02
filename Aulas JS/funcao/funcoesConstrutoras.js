function Carro(vm = 200, delta = 5) {
    let velAtual = 0;

    this.acelerar = () => {
        if(velAtual + delta <= vm) {
            velAtual += delta;
        }
        else {
            velAtual = vm;
        }
    }

    this.getVelocidadeAtual = () => velAtual;
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());


const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())