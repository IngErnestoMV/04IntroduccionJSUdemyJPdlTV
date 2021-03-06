function sumar(numero1, numero2){ // numero1 y 2 son parámetros
    console.log(numero1 + numero2);
}
sumar(10, 10); // Estos son argumentos o valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1, 2);

const sumar2 = function(n1, n2){
    console.log(n1 + n2);
}
sumar2(5, 10);

// Parámetros por default permiten que se realice la función incluso sin argumentos.
function sumar(numero1 = 0, numero2 = 0){
    console.log(numero1 + numero2);
}
sumar();
sumar(3, 3);
sumar(3, 6);
sumar(1);