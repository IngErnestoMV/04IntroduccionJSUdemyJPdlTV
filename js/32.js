//Async / Await //sirve para administrar tiempos de entrega de resultados.

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');
        setTimeout( () => {  //Sirve para hacer una pasusa de 5 segundos
            resolve('Los Clientes Fueron Descargados');
        }, 5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');
        setTimeout( () => {  //Sirve para hacer una pasusa de 5 segundos
            resolve('Los pedidos Fueron Descargados');
        }, 3000);
    });
}

async function app() {
    try{
        //Esta forma bloquea el segundo await y no permite que se descarguen ambas solicitudes la mismo tiempo.
        // const clientes = await descargarNuevosClientes(); 
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    }catch (error) {
        console.log(error);
    }
};

app();
