//Async / Await //sirve para administrar tiempos de entrega de resultados.

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');
        setTimeout( () => {  //Sirve para hacer una pasusa de 5 segundos
            resolve('Los Clientes Fueron Descargados');
        }, 5000);
    });
}

async function app() {
    try{
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    }catch (error) {
        console.log(error);
    }
};

app();
