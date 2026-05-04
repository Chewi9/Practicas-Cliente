console.log("Ejercicio 6");
function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0){
            reject("Error: Division por cero");
        } else{
            setTimeout(() => {
                resolve(a/b);
            }, 500);
        }
    })
}
dividir(10, 2)
    .then(resultado => {
        console.log("Resultado: " + resultado);
    })
    .catch(error => {
        console.error(error);
    });
dividir(10, 0)
    .then(resultado => {
        console.log("Resultado: " + resultado);
    })
    .catch(error => {
        console.error(error);
    });
dividir(-10, -2)
    .then(resultado => {
        console.log("Resultado: " + resultado);
    })
    .catch(error => {
        console.error(error);
    });

console.log("Ejercicio 7");

const ej7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3,4,5]);
    }, 500);
});
ej7.then(numeros => {
    return numeros.filter(num => num % 2 === 0);
}).then(pares => {
    return pares.map(num => num * 10);
}).then(res => {
    console.log("Los numeros son " + res);
}).catch(error => {
    console.error("Error: " + error);
})

console.log("Ejercicio 8");
console.log("Cargando...")
const ej8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve("Datos cargados") : reject("Error al cargar datos");
    }, 1000);
});
ej8.then(mensaje => {
    console.log(mensaje);
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log("Carga finalizada");
})