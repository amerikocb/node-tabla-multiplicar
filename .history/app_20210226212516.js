const { escribirTabla } = require('./helpers/multiplicar.js');

escribirTabla(10)
    .then(na => console.log(na, 'creado')
        .catch(err => console.log(err)));