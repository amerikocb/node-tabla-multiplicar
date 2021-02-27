const fs = require('fs');
let result = '';
for (let i = 0; i <= 12; i++) {
    result += `5 x ${i} = ${5*i}\n`;
}

fs.writeFile('tabla-5.txt', result, (err) => {
    if (err) throw err;
    console.log("Archivo creado exitosamente");
});