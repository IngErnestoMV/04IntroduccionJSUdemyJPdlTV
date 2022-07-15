"use strict"; //Corre JS en forma escrita
//Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}


// No permite, agregar o eliminar propiedades, ni modificarlas
// Object.freeze(producto);

// No permite, agregar o eliminar propiedades, pero si modificarlas
Object.seal(producto);

// producto.imagen = 'imagen.jpg';

console.log(Object.isSealed(producto))

console.log(producto);