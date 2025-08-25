// Closures

const obtenerCliente = () => {

    const nombre = 'José';

    function monstrarNombre() {
        console.log(nombre);
    }
    return monstrarNombre;
}

const cliente = obtenerCliente()

cliente();