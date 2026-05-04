console.log("--- Ejercicio 3 ---");
function mostrarMensajeConRetraso(mensaje, destinatario, retrasoMs) {
    setTimeout(() => {
        console.log("Mensaje para " + destinatario + ": " + mensaje);
        
    }, retrasoMs, mensaje, destinatario);
}

mostrarMensajeConRetraso("Hola", "Alice", 2000);
mostrarMensajeConRetraso("Urgente", "Bob", 500);
mostrarMensajeConRetraso("Normal", "Charlie", 1000);