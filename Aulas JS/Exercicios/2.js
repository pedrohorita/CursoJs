const getTipoTriangulo = (a, b, c) => {
    if(a+b > c && a+c > b && b+c > a) {
        switch (true) {
            case (a == b && b == c): 
                return "Equilátero";
            case (a == b || a == c || b == c):
                return "Isósceles";            
            default:
                return "Escaleno";
        }
    }
    else {
        return "Não é um triangulo!!";
    }
}

console.log(getTipoTriangulo(1, 1, 1));
console.log(getTipoTriangulo(2, 2, 1));
console.log(getTipoTriangulo(4, 2, 3));
console.log(getTipoTriangulo(1, 1, 2));