const { escribirTabla } = require('./helpers/multiplicar.js');
console.clear();

const [, , numero] = process.argv;

console.log(numero);

// escribirTabla(100)
//     .then(na => console.log(na, 'creado'))
//     .catch(err => console.log(err));