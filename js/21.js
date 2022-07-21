// Arrow Functions
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');

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
meses.forEach( mes =>{
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Some ideal para arreglos de objetos
// Arrow Function "=>"
resultado = carrito.some(producto => producto.nombre === 'Celular');// Devuelve si existe algún producto llamado celular

// Reduce
// Arrow Function "=>"
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);//devuelve la suma total de los precios de los productos del carrito.

// Filter
// Arrow Function "=>"
resultado = carrito.filter(producto => producto.precio > 400); //Filtra los productos que valen más de 400

resultado //Filtra los productos que no son celular
// Arrow Function "=>"
resultado = carrito.filter(producto => producto.nombre !== 'Celular'); //Filtra los productos que no son celular
console.log(resultado);