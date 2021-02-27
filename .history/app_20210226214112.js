const { escribirTabla } = require('./helpers/multiplicar.js');
console.clear();

escribirTabla(15)
    .then(na => console.log(na, 'creado'))
    .catch(err => console.log(err));