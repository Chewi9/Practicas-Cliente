

console.log("--- Ejercicio 2 ---");
const spanContador = document.getElementById("contador");
let idTimeout2;
let tiempo = 10;

function cuentaRegresiva(){
    clearTimeout(idTimeout2);
    spanContador.textContent = tiempo;

    if(tiempo > 0){
        tiempo--;
        idTimeout2 = setTimeout(cuentaRegresiva, 1000);
    } else{
        spanContador.textContent = "¡Tiempo!";
    }
}

document.getElementById("btn-cancelar").addEventListener("click", () => {
    clearTimeout(idTimeout2);
});
document.getElementById("btn-seguir").addEventListener("click", () => {
    cuentaRegresiva();
});
document.getElementById("btn-reiniciar").addEventListener("click", () => {
    tiempo = 10;
    cuentaRegresiva();
});
cuentaRegresiva();