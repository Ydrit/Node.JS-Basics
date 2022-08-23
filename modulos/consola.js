//console.warn('Algo'); //log, info, error, warn

//---

// var tabla = [
//     {
//         a: 1,
//         b: 'Z'
//     },
//     {
//         a: 2,
//         b: 'Otra'
//     }
// ]

// console.table(tabla); //log de ta los datos mientras que table te dibuja una tabla

//---

// console.group('Conversacion');
// console.log('Hola');
// console.group('bla');
// console.log('Blablabla');
// console.log('Blablabla');
// console.log('Blablabla');
// console.groupEnd('bla');
// console.log('Adios');
// console.groupEnd('Conversacion');

// console.log('otra cosas de otra funcion');

//--

function function1() {
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    console.log('Esto tambien');
        function2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('funcion 1');
}

function function2() {
    console.group('funcion 2');
    console.log('ahora estamos en la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('empezamos');
function1();

//--

// console.count('veces');
// console.count('veces');
// console.count('veces');
// console.countReset('veces');
// console.count('veces');