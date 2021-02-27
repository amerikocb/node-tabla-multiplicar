const fs = require('fs');
let result = '';

const escribirTabla = async(numero = 5) => {
    try {
        for (let i = 0; i <= 12; i++) {
            result += `${numero} x ${i} = ${numero*i}\n`;
        }

        fs.writeFileSync(`tabla-${numero}.txt`, result);

        return `Tabla del ${numero}`;
    } catch (error) {
        return error;
    }
};

module.exports = {
    escribirTabla
};