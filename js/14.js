//Arreglos o Arrays

const numeros = [10,20,30,40,50];
console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.table(meses);


//Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

//Recoorrer arreglos
// meses.forEach( function(mes) {
//     console.log(mes)
// })

//Agregar un valor al arreglo
// numeros[5] = 60;
numeros.push(60,70,80); //agrega valores al final del arreglo
numeros.unshift(-30,-20,-10); //agrega valores al inicio del arreglo
console.table(numeros);

// Elimina un valor del arreglo.
meses.pop();//Elimina el ultimo valor del arreglo
meses.shift();//Elimina el primer valor del arreglo
meses.splice(2,1);//Elimina (posición del valor, cuantos elementos a partor de ahí)
console.table(meses);

// Rest Operator o Sprend Operator
const nuevoArreglo1 = [...meses, 'Diciembre'];
const nuevoArreglo2 = ['Enero', ...nuevoArreglo1];
console.log(nuevoArreglo2);
