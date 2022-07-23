// Classes
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

// Herencia
class Libro extends Producto{ //extends para heredar de otro objeto
    constructor(nombre, precio, isbn){
        super(nombre, precio); // super para indicar que caracteristicas se heredan
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
}

const libro = new Libro('JavaSacript La revolución', 120, '910313981389139');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());
