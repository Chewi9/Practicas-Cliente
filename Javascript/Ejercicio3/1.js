console.log("--- Ejercicio 1 ---");
const semaforo = document.getElementById("semaforo");
let idTimeout;
let estado = "rojo";

function ciclo(){
    clearInterval(idTimeout);

    if(estado === "rojo"){
        semaforo.style.backgroundColor = "red";
        console.log("Semáforo en rojo");
        estado = "verde";
        idTimeout = setTimeout(ciclo, 3000);
    } else if (estado === "amarillo"){
        semaforo.style.backgroundColor = "yellow";
        console.log("Semáforo en amarillo");
        estado = "rojo";
        idTimeout = setTimeout(ciclo, 1000);
    } else if (estado === "verde"){
        semaforo.style.backgroundColor = "green";
        console.log("Semáforo en verde");
        estado = "amarillo";
        idTimeout = setTimeout(ciclo, 3000);
    }
}

document.getElementById("btn-detener").addEventListener("click", () => {
    clearTimeout(idTimeout);
    console.log("Semáforo detenido");
});

document.getElementById("btn-iniciar").addEventListener("click", () => {
    console.log("Semáforo iniciado");
    ciclo();
});

ciclo();
