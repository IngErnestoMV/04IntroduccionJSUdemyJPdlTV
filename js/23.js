const metodopago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario pagará con cheque, revisremos los fondos primero');
        break;
    case 'bitcoins':
        console.log('Pagaste con bitcoins');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Ingresa tu método de pago')
        break;
}