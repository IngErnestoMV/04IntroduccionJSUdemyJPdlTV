// Arreglo Unidimencional
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.table(meses);

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

//forEach
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes para arreglos unidimesionales
let resultado = meses.includes('Marzo');
console.log(resultado);// devuelve si existe marzo en el arreglo

// Some ideal para arreglos de objetos
// resultado = carrito.some(function(producto){
//     return producto.nombre === 'Celular'
// }); // Devuelve si existe algún producto llamado celular
// Arrow Function "=>"
resultado = carrito.some(producto => {return producto.nombre === 'Celular'});// Devuelve si existe algún producto llamado celular

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0); //devuelve la suma total de los precios de los productos del carrito.
// Arrow Function "=>"
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);//devuelve la suma total de los precios de los productos del carrito.


// Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400
}); //Filtra los productos que valen más de 400
// Arrow Function "=>"
resultado = carrito.filter(producto =>{return producto.precio > 400}); //Filtra los productos que valen más de 400

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
}); //Filtra los productos que no son celular
// Arrow Function "=>"
resultado = carrito.filter(producto =>{return producto.nombre !== 'Celular'}); //Filtra los productos que no son celular
console.log(resultado);


