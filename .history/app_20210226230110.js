const { escribirTabla } = require('./helpers/multiplicar.js');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

console.log(argv.b);

// escribirTabla(100)
//     .then(na => console.log(na, 'creado'))
//     .catch(err => console.log(err));