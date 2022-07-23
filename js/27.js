// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, disponibilidad, oferta){
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto('Monitor Curvo de 49"', 800, 10, 5);
const producto3 = new Producto('Laptop', 300, 4, 10);
const producto4 = new Producto('Mouse ', 500, 33, 0);
const producto5 = new Producto('Audifonos', 200, 26, 0);

console.log(producto2);
console.log(producto3);