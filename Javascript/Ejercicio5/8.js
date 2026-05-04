// 8
const peticion1 = new Request("https://api.ejemplo.com/datos", {method: "GET"});
const peticion2 = peticion1.clone();

fetch(peticion1).then(res => {
    console.log("Respuesta de peticion1:", res.status);
})
fetch(peticion2).then(res => {
    console.log("Respuesta de peticion2:", res.status);
})

// 9
const headerA = {"Authorization": "Bearer 12345", "Accept": "application/json"};

const headerB = new Headers();
headerB.append("Authorization", "Bearer 12345");
headerB.append("Accept", "application/json");


// 10
let controlador;

document.getElementById("btn-iniciar").addEventListener("click", async () => {
    controlador = new AbortController();

    try{
        const res = await fetch("https://httpstat.us/200?sleep=3000", {
            signal: controlador.signal
        });
        console.log("Respuesta recibida:", res.status);
    } catch(e){
        if(e.name === "AbortError"){
            console.log("Petición cancelada por usuario");
        } else{
            console.error("Error en la petición:", e);
        }
    }
});

document.getElementById("btn-cancel").addEventListener("click", () => {
    if(controlador) controlador.abort();
})

// 11
function validarJSON(response){
    const contentType = response.headers.get("content-type");

    if(!contentType || !contentType.includes("application/json")){
        throw new TypeError("Respuesta no es JSON");
    }
}