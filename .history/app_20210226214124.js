const { escribirTabla } = require('./helpers/multiplicar.js');
console.clear();

escribirTabla(100)
    .then(na => console.log(na, 'creado'))
    .catch(err => console.log(err));