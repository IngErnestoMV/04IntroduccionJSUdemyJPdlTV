//Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

//Forma anterior para seleccionar un propiedad del objeto y crear una variable.
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Nueva forma: Destructuring de Objetos
// const {precio} = producto;
// const {nombreProducto} = producto;
const {precio, nombreProducto} = producto;


console.log(precio);
console.log(nombreProducto);


