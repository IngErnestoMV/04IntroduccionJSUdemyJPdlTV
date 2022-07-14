//Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);

//acceder a una propiedad del objeto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

//Otra forma menos usada para accder a una propiedad del objeto.
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);