const fs = require('fs');
const { resolve } = require('path');
let result = '';

const escribirTabla = async(numero) => {
    try {
        for (let i = 0; i <= 12; i++) {
            result += `${numero} x ${i} = ${numero*i}\n`;
        }

        fs.writeFileSync(`tabla-${numero}.txt`, result);

        return `Tabla del ${numero}`;
    } catch (error) {
        if (error) {
            return error;
        }
    }
};

module.exports = {
    escribirTabla
};