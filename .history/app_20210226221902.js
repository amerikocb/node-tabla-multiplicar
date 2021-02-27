const { escribirTabla } = require('./helpers/multiplicar.js');
const argv = require('yargs').argv;


console.log(argv.numero);

// escribirTabla(100)
//     .then(na => console.log(na, 'creado'))
//     .catch(err => console.log(err));