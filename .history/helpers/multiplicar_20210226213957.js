const fs = require('fs');
const { resolve } = require('path');
let result = '';

const escribirTabla = (numero) => {
    // try {
    for (let i = 0; i <= 12; i++) {
        result += `${numero} x ${i} = ${numero*i}\n`;
    }

    fs.writeFileSync(`tabla-${numero}.txt`, result);

    //     return `Tabla del ${numero}`;
    // } catch (error) {
    //     if (error) {
    //         return error;
    //     }
    // }
    return new Promise((resolve, reject) => {
        resolve(`Tabla del ${numero}`);
        reject(new Error('algo salió mal'));
    });
};

module.exports = {
    escribirTabla
};