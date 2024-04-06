// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

let i;
for (i=3; i < 22; i++) {
    if(i%3 == 0){
        console.log(i);
    };  
};

console.log("HOLA");

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
let numero = 10
while (numero > 1) {
    numero = numero - 1
    console.log(numero)
};

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.

let numerete;

for (numerete = 1; numerete <= 50; numerete++) {
    if (numerete%3 == 0 && numerete%5 == 0){
        console.log('FizzBuzz')
    }else if (numerete%3 == 0) { 
        console.log('Fizz');
    } else if (numerete%5 == 0){
        console.log('Buzz');
    } else {console.log(numerete)}  
};

// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

let UnArray = [1,2,3,4,5,6,7,8,9,10];
let sumatoria = 0;

function promedioArray(b) {
    for (a=0; a < b.length; a++) {
        sumatoria = sumatoria + b[a]
    };
    promedio = sumatoria / b.length;
    console.log(` el promedio del array es ${promedio}`);
};



function promedioArray2(c){
    let sumatoria = c.reduce((d, e) => d + e, 0);
    promedio = sumatoria / c.length 
    console.log(promedio);
};

promedioArray(UnArray);
promedioArray2(UnArray);



