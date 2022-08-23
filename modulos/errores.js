//el try + catch nos permite identificar donde esta el error en nuestro codigo

const { createBrotliCompress } = require("zlib");

function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function() {
        try{
            return 3 + z;
        } catch (err) {
            console.error('Error en mi funcion asincrona');
            cb(err);
        }
    })
}

try{
    //otraFuncion();
    seRompeAsincrona(function(err) {
        console.log(err.message);
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('esto de aqui esta al final');