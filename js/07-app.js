// Funciones que retornan otra función 

const obtenerCliente = () => () => console.log('José Santana');

const fn = obtenerCliente();

fn();