const fs = require('fs');
let result = '';

const escribirTabla = (numero = 5) => {
    for (let i = 0; i <= 12; i++) {
        result += `${numero} x ${i} = ${numero*i}\n`;
    }

    fs.writeFileSync(`tabla-${numero}.txt`, salida);
};

module.exports = {
    escribirTabla
};