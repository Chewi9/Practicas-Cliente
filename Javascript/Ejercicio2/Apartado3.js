
const lista = document.getElementById("lista");
const boton = document.getElementById("boton");
let contador = 4;

boton.addEventListener("click", () => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = `Elemento ${contador}`;

    lista.appendChild(nuevoElemento);
    contador++;

    if(lista.children.length > 10) {
        lista.removeChild(lista.firstElementChild);
    }

});
