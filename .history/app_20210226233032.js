const { escribirTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.log(argv);

escribirTabla(argv.b, argv.h)
    .then(na => console.log(na.rainbow, 'creado'))
    .catch(err => console.log(err));