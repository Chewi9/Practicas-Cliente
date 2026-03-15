const boton = document.getElementById("crear");

boton.addEventListener("click", () => {
    const tabla = document.createElement("table");
    tabla.style.border = "2px solid black";

    for (let i= 0; i<2; i++){
        const fila = document.createElement("tr");

        for(let j = 0; j<2; j++){
            const celda = document.createElement("td");

            const texto = document.createTextNode(`Fila ${i+1} Columna ${j+1}`);
            
            celda.appendChild(texto);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);

});