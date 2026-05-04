let controladorClima

const traductor = {
    "Clouds": "Nublado",
    "Rain": "Lluvia",
    "Clear": "Despejado",
    "Snow": "Nieve",
    "Drizzle": "Llovizna",
    "Thunderstorm": "Tormenta"
};

document.getElementById("btn-buscar").addEventListener("click", async () => {
    const ciudad = document.getElementById("input-ciudad").value;
    const divRes = document.getElementById("resultado-clima");

    if(!ciudad){
        divRes.innerHTML = "<p>Por favor ingresa una ciudad</p>";
        return;
    }

    if(controladorClima) controladorClima.abort();
    controladorClima = new AbortController();

    const params = new URLSearchParams({
        q: ciudad, 
        appid: "b16fdd61ee08f2ac195943cf7513292f", 
        units: "metric",
        lang: "es"
    });

    const url = `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`;

    try{
        divRes.innerHTML = "<p>Cargando clima...</p>";

        const response = await fetch(url, {
            signal: controladorClima.signal
        });

        if(!response.ok){
            if(response.status === 404){
                throw new Error("Ciudad no encontrada");
            }
            if(response.status === 401){
                throw new Error("API key inválida");
            }
            throw new Error("Error HTTP: " + response.status);
        }

        const datos = await response.json();
        const climaIngles = datos.weather[0].main;
        const climaEspañol = traductor[climaIngles] || climaIngles;
        
        divRes.innerHTML = `
        <h3>Tiempo en ${datos.name}</h3>
        <p>Estado: ${climaEspañol} (${datos.weather[0].description})</p>
        <p>Temperatura: ${datos.main.temp} °C</p>
        <p>Humedad: ${datos.main.humidity}%</p>
        `;
        
    } catch(error){
        if(error.name === "AbortError"){
            divRes.innerHTML = "<p>Búsqueda cancelada</p>";
        } else {
            divRes.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }

});

document.getElementById("btn-cancelar").addEventListener("click", () => {
    if (controladorClima) controladorClima.abort();
});