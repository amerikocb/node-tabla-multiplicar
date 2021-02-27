const { escribirTabla } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs').default;

console.log(argv);

escribirTabla(argv.b)
    .then(na => console.log(na, 'creado'))
    .catch(err => console.log(err));