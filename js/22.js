// Estructuras de control o Condicionales
// const puntaje = 100;

// if(puntaje === 1000) {
//     console.log('Si, el puntaje es 1000');
// } else {
//     console.log('El puntaje no es igual a 1000');
// }

// const efectivo = 1000;
// const carrito = 800;

// if( efectivo > carrito) {
//     console.log('El usuario puede pagar');
// } else {
//     console.log('Fondos insuficientes')
// }

const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema');
}else if('EDITOR'){
    console.log('Nivel de acceso de Editor');
} else{
    console.log('No tienes acceso');
}