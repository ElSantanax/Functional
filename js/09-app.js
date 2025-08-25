// Partials Currying
const suma = (a, b, c) => a + b + c;

const parcial = a => b => c => suma(a, b, c);

const resultadoParcial = parcial(2)(4)(3);

console.log(resultadoParcial);