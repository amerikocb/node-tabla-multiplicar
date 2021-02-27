const { escribirTabla } = require('./helpers/multiplicar.js');
const { argv } = require('./config/yargs');

console.log(argv);

escribirTabla(argv.b)
    .then(na => console.log(na, 'creado'))
    .catch(err => console.log(err));