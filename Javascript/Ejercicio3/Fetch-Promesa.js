console.log("Ejercicio 9");
fetch(" https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    .then(response => {
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject("Error");
        }
    })
    .then(data => {
        data.forEach(p => console.log(`${p.name} - $${p.price}`));
    })
    .catch(error => {
        console.error(error);
    })


console.log("Ejercicio 10");
fetch("https://mdn.github.io/pagina-no-encontrada")
    .then(response => {
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject("Error: " + response.status);
        }
    })
    .catch(error => {
        console.error(error);
    });
fetch("https://esto-no-existe-xyzxyz.com")
    .then(response => {
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject("Error: " + response.status);
        }
    })
    .catch(error => {
        console.error(error);
    });
/*
    Error HTTP, el servidor responde, la fetch se resuelve con exito
    Error de red, el servidor no responde, la fetch se rechaza y salta al catch
*/

console.log("Ejercicio 11");
fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    .then(response => {
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject("Error");
        }
    })
    .then(data => {
        const primerProducto = data[0];
        const nombre = primerProducto.name;

        const urlFalsa = `https://api.ejemplo.com/stock/${nombre}`;
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    producto: nombre,
                    unidades: Math.floor(Math.random() * 100)
                });
            }, 500);
        })
    })
    .then(stock => {
        console.log(`El producto ${stock.producto} tiene ${stock.unidades} unidades en stock.`);
    })
    .catch(error => {
        console.error(error);
    });

console.log("Ejercicio 12");
const fetch1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
const fetch2 = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
const fetch3 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found.json");

function manejar(response) {
    if(response.ok){
        return response.json();
    } else{
        return Promise.reject("Error: " + response.status);
    }
}
Promise.all([manejar(fetch1), manejar(fetch2), manejar(fetch3)])
    .then(respuestas => {
        respuestas.forEach(res => console.log(res.status));
    })
    .catch(error => {
        console.error("Error en una de las fetch: " + error);
    });

console.log("Ejercicio 13");    
const server1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Error en el servidor 1"));
    }, 800);
});
const server2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Respuesta del servidor 2");
    }, 300);
});
const server3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Respuesta del servidor 3");
    }, 1500);
});

Promise.any([server1, server2, server3])
    .then(res => {
        console.log("Primera respuesta exitosa: " + res);
    })
    .catch(error => {
        console.error("Todos los servidores fallaron: " + error);
    });


console.log("Ejercicio 14");


async function obtenerProducts() {
    try{
        const responde = await fetch(" https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        if(!responde.ok){
            throw new Error("Error: " + responde.status);
        }

        const prod = await responde.json();
        prod.forEach(p => console.log(`${p.name} - $${p.price}`));
    } catch(error){
        console.error(error);
    } finally {
        console.log("Proceso finalizado");
    }
}
obtenerProducts();


console.log("Ejercicio 15");
async function obtenerSuperheroes() {
    const response = await fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    if(!response.ok){
        throw new Error("Error: " + response.status);
    } 
    const data = await response.json();
    return data.members;
}
obtenerSuperheroes()
    .then(heroes => {
        heroes.forEach(h => console.log(`${h.name} - ${h.superpower}`));
    })
    .catch(error => {
        console.error(error);
    });