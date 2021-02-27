const fs = require('fs');
let result = '';

const escribirTabla = async(numero = 5) => {
    for (let i = 0; i <= 12; i++) {
        result += `${numero} x ${i} = ${numero*i}\n`;
    }

    fs.writeFileSync(`tabla-${numero}.txt`, result);

    console.log(`Tabla del ${numero} creada`);
};

module.exports = {
    escribirTabla
};