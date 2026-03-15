const luces = document.querySelectorAll(".circulo");
const botones = document.querySelectorAll("button");

function cambiarLuz(indice){
    luces.forEach(luz => {
        luz.classList.remove("rojo", "amarillo", "verde");
    });

    if(indice == 0) luces[0].classList.add("rojo");
    if(indice == 1) luces[1].classList.add("amarillo");
    if(indice == 2) luces[2].classList.add("verde");
}

botones[0].addEventListener("click", () => cambiarLuz(0));
botones[1].addEventListener("click", () => cambiarLuz(1));
botones[2].addEventListener("click", () => cambiarLuz(2));