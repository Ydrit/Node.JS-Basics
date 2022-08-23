// let i = 0;
// let intervalo = setInterval(function () {
//     if (i === 3) {
//         clearInterval(intervalo);
//     }
//     i++;
//     console.log('Hola');
// }, 1000);

// ---

// setImmediate(function() {
//     console.log('Hola');
// })

// ---

//console.log(process); //Puede incluir global, dirname, __filename etc.

global.miVariable = 'elValor';

console.log(global.miVariable);