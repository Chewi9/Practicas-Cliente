async function enviarJSON() {
    const payload = {nombre: "Hugo", rol: "estudiante"};
    console.log("Payload a enviar:", payload);

    const res = await fetch("https://api.ejemplo.com/datos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    console.log("Respuesta del servidor:", res,status);   
}
enviarJSON();

async function buscarParams() {
    const payload = new URLSearchParams({nombre: "Hugo", rol: "estudiante"});
    console.log("Payload a enviar:", payload.toString());

    const res = await fetch("https://api.ejemplo.com/datos?", {
        method: "POST",
        body: payload
    });
    console.log("Respuesta del servidor:", res,status);   
}
buscarParams();
/* 
¿Cuándo usar cuál? 
- Usa JSON para comunicarte con APIs REST modernas (es el estándar de la industria hoy).
- Usa URLSearchParams si el servidor es antiguo o espera explícitamente los datos simulando un envío de formulario HTML tradicional (`<form>`).
*/

// 7
const params = new URLSearchParams({nombreusuario: "admin", limite: "10"});
const url = `https://api.ejemplo.com/usuarios?${params.toString()}`;

console.log("URL con parámetros:", url);
fetch(url).then(res => {
    console.log(res.status);
})