const botonAnadir = document.querySelector("#btn-añadir-fila");
const cuerpo = document.querySelector("#cuerpo-tabla");
const contador = document.querySelector("#contador");

function actualizarContador(){
    const filas = cuerpo.querySelectorAll("tr").length;
    contador.textContent = `Total de filas: ${filas}`;
}

botonAnadir.addEventListener("click", () => {

    const nombre = document.querySelector("#campo-nombre").value;
    const apellido = document.querySelector("#campo-apellido").value;
    const edad = document.querySelector("#campo-edad").value;

    if(!nombre || !apellido || !edad){
        return;
    }

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>
            <button class="btn-editar">Editar</button>
            <button class="btn-eliminar">Eliminar</button>
        </td>
    `;

    tr.querySelector(".btn-eliminar").addEventListener("click", (e) => {
        const filaABorrar = e.target.parentNode.parentNode;
        cuerpo.removeChild(filaABorrar);
        actualizarContador();
    });

    tr.querySelector(".btn-editar").addEventListener("click", function(e) {

        const fila = e.target.parentNode.parentNode;
        const celdas = fila.querySelectorAll("td");

        if (this.textContent === "Editar") {

            for (let i = 0; i < 3; i++) {
                const valorActual = celdas[i].textContent;
                celdas[i].innerHTML = `<input type="text" value="${valorActual}">`;
            }

            this.textContent = "Guardar";

        } else {

            for (let i = 0; i < 3; i++) {
                const input = celdas[i].querySelector("input");
                celdas[i].textContent = input.value;
            }

            this.textContent = "Editar";
        }
    });

    cuerpo.appendChild(tr);
    actualizarContador();

    document.querySelector("#campo-nombre").value = "";
    document.querySelector("#campo-apellido").value = "";
    document.querySelector("#campo-edad").value = "";
});