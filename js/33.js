function obtenerEmpleados(){
    const archivo = 'empleados.json';
/* Promises */
    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then(datos => {
    //         //console.log(datos.empleados);
    //         const { empleados } = datos;
    //         //console.log(empleados);
    //     });

/* async / await */
    const resultado = await fetch(archivo)
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();