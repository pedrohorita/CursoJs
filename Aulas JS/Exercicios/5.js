const formate = a => `R$${a.toFixed(2).replace(".", ",")}`;

console.log(formate(0.30000000000000004));

