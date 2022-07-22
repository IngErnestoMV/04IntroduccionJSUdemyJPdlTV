// Funcioanan unicamente en arreglos.
const carrito = [
    {nombre: 'Monitor de 20"', precio: 500},
    {nombre: 'Tlevisión 50"', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado"', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Lap Top"', precio: 800}
];

// forEach: esta función sirve para mostrar en consola o directamente sobre HTML

carrito.forEach(producto => console.log(producto.nombre));

// map: esta función sirve para crear un nuevo arreglo.
const arreglo2 = carrito.map(producto => producto.nombre);