const { escribirTabla } = require('./helpers/multiplicar.js');
const { argv } = require('./config/yargs.js');

console.log(argv.b);

escribirTabla(argv.b)
    .then(na => console.log(na, 'creado'))
    .catch(err => console.log(err));