function obtenerUsuario(id, callback) {
    setTimeout(() => {
        callback({ id: id, nombre: "Ana"});
    }, 600);
}
function obtenerPedidos(usuario, callback) {
    setTimeout(() => {
        callback([10, 20, 30]);
    }, 700);
}
function calcularTotal(pedidos, callback) {
    setTimeout(() => {
        const total = pedidos.reduce((suma, pedido) => suma + pedido, 0);
        callback(total);
    }, 800);
}
function mostrarResumen(total, callback) {
    setTimeout(() => {
        console.log("Total a pagar: " + total);
        callback();
    }, 900);
}

// Hell
obtenerUsuario(42, (usuario) => {
    obtenerPedidos(usuario, (pedidos) => {
        calcularTotal(pedidos, (total) => {
            mostrarResumen(total, () => {
                console.log("Proceso completado");
            });
        });
    });
});