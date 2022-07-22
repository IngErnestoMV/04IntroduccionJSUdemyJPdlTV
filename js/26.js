// this
const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total} `)
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total} `)
    }
}

console.log(reservacion.nombre);
console.log(reservacion2.nombre);