let url = "https://jsonplaceholder.typicode.com/users";
function cargarTexto(url){
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("Error al cargar el archivo");
        }
        return response.text();
    })
    .then(texto => {
        document.getElementById("resultado").textContent = texto;
    })
    .catch(error => {
        console.error("Error:", error);
    })
}
cargarTexto(url);

async function cargarTextoAsync(url){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error HTTP: " + response.status);
        }
        const texto = await response.text();
        document.getElementById("resultado").textContent = texto;
    } catch(error){
        console.error("Error:", error);
    }
}
cargarTextoAsync(url);

async function cargarProductos() {
    try{
        const res = await fetch("productos.json");
        const productos = await res.json();

        const ul = document.getElementById("lista-productos");
        productos.forEach(p => {
            ul.innerHTML += '<li>ID: ' + p.id + ' - Nombre: ' + p.nombre + ' - Precio: ' + p.precio + ' - Stock: ' + p.stock + ' - Categoría: ' + p.categoria + '</li>';
        });
    } catch(e){
        console.error("Error al cargar productos:", e);
    }
    
}
cargarProductos();

let urlImagen = "https://picsum.photos/200";
async function cargarImagen(urlImagen) {
    try{
        const res = await fetch(urlImagen);
        if(!res.ok){
            throw new Error("Error HTTP: " + res.status);
        }

        const blob = await res.blob();
        const img = document.getElementById("imagen");
        img.src = URL.createObjectURL(blob);
    } catch(e){
        console.error("Error al cargar imagen:", e);
    }
    
}
cargarImagen(urlImagen);