/* Tipos, variables y constantes */
/* 1. */
console.log("--- Ejercicio 1 ---");
let dato;
dato = 1;
console.log(dato, typeof dato);

dato = "Hola Mundo";
console.log(dato, typeof dato);

dato = true;
console.log(dato, typeof dato);

dato = null;
console.log(dato, typeof dato); 
/* 
Devuelve object ya que en JavaScript, el tipo de 
dato null se considera un objeto. 
*/

/* 2. */
console.log("--- Ejercicio 2 ---");
let PI = 3.14159;
console.log(PI.toString());
console.log(PI.toFixed(2));
console.log(PI.toExponential());

/* 3. */
console.log("--- Ejercicio 3 ---");
const libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    paginas: 863
}
console.log(libro);
libro.paginas = 900;
libro.editorial = "Editorial XYZ";
console.log(libro);

try{
    libro = {
        titulo: "Otro"
    };
} catch(e){
    console.log("Error al reasignar la constante libro:", e.message);
}
/* No se puede reasignar la constante libro, por lo que se lanza un error. */

/* 4. */
console.log("--- Ejercicio 4 ---");
let a = null;
let b = undefined;
let c = 0;
let d = "";
console.log(a ?? "Valor por defecto");
console.log(b ?? "Valor por defecto");
console.log(c ?? "Valor por defecto");
console.log(d ?? "Valor por defecto");


/* Numeros y operadores */
/* 5. */
console.log("--- Ejercicio 5 ---");
let num1 = 10;
let num2 = 3;

console.log(`Suma: ${num1 + num2}, Resta: ${num1 - num2}, Producto: ${num1 * num2}`);
console.log(`División: ${num1 / num2}, Resto: ${num1 % num2}, Exp: ${num1 ** num2}`);
let n = 5;
let s = "5";
console.log(n == s); /*true*/ 
console.log(n === s);
console.log(n != s);
console.log(n !== s);

/* 6. */
console.log("--- Ejercicio 6 ---");
const clasificarNota = (nota) => {
    if(nota < 5){
        return "Suspenso";
    } else if(nota >=5 && nota < 7){
        return "Aprobado";
    } else if(nota >=7 && nota < 9){
        return "Notable";
    } else if(nota >=9 && nota <=10){
        return "Sobresaliente";
    }
}
console.log(clasificarNota(4));
console.log(clasificarNota(6));
console.log(clasificarNota(8));
console.log(clasificarNota(9.5));

/* 7. */
console.log("--- Ejercicio 7 ---");
const vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
}
console.log("marca" in vehiculo);
console.log("color" in vehiculo);
const lista = [1,2,3,4,5];
console.log(0 in lista);
console.log(5 in lista);


/* Cadenas */
/* 8. */
console.log("--- Ejercicio 8 ---");
const cadena = "Desarrollo de Aplicaciones Web";
console.log(cadena.length);
console.log(cadena[11]);
console.log(cadena.includes("Web"));
console.log(cadena.startsWith("Desa"));
console.log(cadena.endsWith("web"));
console.log(cadena.indexOf("a"));
console.log(cadena.slice(12));

/* 9. */
console.log("--- Ejercicio 9 ---");
const cad2 = "la programación en javascript es divertida";
console.log(cad2.toLowerCase());
let capitalizada = cad2.split(" ").map(palabra => palabra[0].toUpperCase() + palabra.slice(1)).join("");
console.log(capitalizada);
console.log(cad2.replaceAll("a", "@"));

/* 10 */
console.log("--- Ejercicio 10 ---");
const producto = {
    nombre: "Laptop",
    precio: 999.9999,
    cantidad: 5
}
console.log(`Producto: ${producto.nombre}`);
console.log(`Precio: ${(producto.precio * producto.cantidad).toFixed(2)} €`);
console.log(`Estado de stock: ${producto.cantidad < 5 ? "Stock bajo" : "Stock suficiente"}`);

/* 11. */
console.log("--- Ejercicio 11 ---");
const poema = `En un lugar de la Mancha, 
de cuyo nombre no quiero acordarme...`;
const versos = poema.split("\n");
console.log(versos.length);
const poemaLinea = versos.join(" / ");
console.log(poemaLinea);


/* Arrays */
/* 12. */
console.log("--- Ejercicio 12 ---");
let arra = ["Manzana", "Banana", "Cereza", "Dátil", "Elderberry"];
console.log(arra.push("Mango"));
console.log(arra.shift());
console.log(arra.unshift("Fresa"));
console.log(arra.splice(3,1));

/* 13. */
console.log("--- Ejercicio 13 ---");
let numeros = [10, 20, 30, 20, 40, 20, 50];
let valor = 20;
console.log(`¿${valor} está incluido?`, numeros.includes(valor));
console.log(`Primera posición:`, numeros.indexOf(valor));
console.log(`Última posición:`, numeros.lastIndexOf(valor));
console.log(`Veces que aparece:`, numeros.filter(n => n === valor).length);

/* 14. */
console.log("--- Ejercicio 14 ---");
let pares = [2, 4, 6, 8, 10];
let impares = [1, 3, 5, 7, 9];
let combinados = pares.concat(impares);
console.log(combinados);
console.log(combinados.toString());
console.log(combinados.join("-"));
console.log(combinados.length);

/* 15. */
console.log("--- Ejercicio 15 ---");
let dias = ["lunes", "martes", "miércoles", "jueves", "viernes"];
for(let i = 0; i<dias.length; i++){
    console.log(dias[i], i);
}
for(let dia of dias){
    console.log(dia.toUpperCase());
}
dias.forEach(dia => {
    console.log(dia, dia.length)
})

/* 16. */
console.log("--- Ejercicio 16 ---");
let numeross = [3, 7, 2, 9, 4, 11, 6, 8, 1, 5];
let cuadrados = numeross.map(n => n**n);
console.log(cuadrados);
let mayores = numeross.filter(n => n>5);
console.log(mayores);
let cuadradosMayores = numeross.filter(n => n>5).map(n => n**n);
console.log(cuadradosMayores);


/* Funciones */
/* 17. */
console.log("--- Ejercicio 17 ---");
function imc(peso, altura, unidad = "métrico"){
    if(unidad == "imperial"){
        peso = peso * 0.453592;
        altura = altura * 0.0254;
    }
    const res = peso / (altura ** 2);
    return res;
}
console.log(imc(70, 1.75));
console.log(imc(154, 69, "imperial"));

/* 18. */
console.log("--- Ejercicio 18 ---");
function media1(numeros){
    let suma = numeros.reduce((a,b) => a+b, 0);
    return suma / numeros.length;
}
const media2 = function(numeros){
    let suma = numeros.reduce((a,b) => a+b, 0);
    return suma / numeros.length;
}
const media3 = (numeros) => {
    let suma = numeros.reduce((a,b) => a+b, 0);
    return suma / numeros.length;
}
console.log(media1([1,2,3,4,5]));
console.log(media2([1,2,3,4,5]));
console.log(media3([1,2,3,4,5]));

/* 19. */
console.log("--- Ejercicio 19 ---");
const nombres = ["Ana", "Carlos", "Beatriz", "David", "Elena"];

const long = nombres.map(n => n.length);
const largos = nombres.filter(n => n.length > 5);
const saludo = nombres.map(n => `Hola, ${n}!`);
console.log(long);
console.log(largos);
console.log(saludo);

/* 20. */
console.log("--- Ejercicio 20 ---");
{
    let a = 10;
    b = 20;
}
console.log(b);
function ejemplo(){
    let c = 30;
}
console.log(c);


/* Objetos */
/* 21. */
console.log("--- Ejercicio 21 ---");
const biblioteca = {
    libro1: {
        titulo: "1984",
        autor: "George Orwell",
        año: 1949,
        disponible: true
    },
    libro2: {
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        disponible: false
    },
    libro3: {
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        año: 1925,
        disponible: true
    }
};

console.log(biblioteca.libro2.titulo)
let propiedad = "libro3";
console.log(biblioteca[propiedad].autor);

/* 22. */
console.log("--- Ejercicio 22 ---");
const calculadora = {};

calculadora.marca = "Casio";
calculadora.modelo = "FX-991EX";

calculadora.sumar = function(a, b){
    return a + b;
}
calculadora.restar = function(a, b){
    return a - b;
}
calculadora.multiplicar = function(a, b){
    return a * b;
}
calculadora.dividir = function(a, b){
    if(b === 0){
        return "Error: División por cero";
    }
    return a / b;
}
console.log(calculadora.sumar(5, 3));
console.log(calculadora.restar(5, 3));
console.log(calculadora.multiplicar(5, 3));
console.log(calculadora.dividir(5, 0));

/* 23. */
console.log("--- Ejercicio 23 ---");
function Estudiante(nombre, apellido, curso){
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;

    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    };

    this.presentacion = function(){
        console.log(`Hola, soy ${this.nombreCompleto()} y estoy en el curso de ${this.curso}.`);
    }
}

const e1 = new Estudiante("Ana", "García", "Matemáticas");
const e2 = new Estudiante("Carlos", "López", "Historia");
const e3 = new Estudiante("Beatriz", "Martínez", "Ciencias");
console.log(e1.nombreCompleto());
e1.presentacion();
console.log(e2.nombreCompleto());
e2.presentacion();
console.log(e3.nombreCompleto());
e3.presentacion();

console.log(typeof e1);
console.log(e1 instanceof Estudiante);


/* Eventos */
/* 24. */
console.log("--- Ejercicio 24 ---");
let contador = 0;
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    const hora = new Date().toLocaleTimeString();
    alert(`Hora actual: ${hora}`);
});

boton.addEventListener("click", (evento) => {
    console.log("X: ", evento.clickX, "Y: ", evento.clickY);
});

boton.addEventListener("click", () => {
    contador++;
    alert(`Has hecho click ${contador} veces`);
})

/* 25. */
console.log("--- Ejercicio 25 ---");
const form = document.getElementById("formulario");

form.addEventListener("submit", (evento) => {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    if(nombre == "" || correo == ""){
        evento.preventDefault();
        alert("Error")
        return;
    }
    if(!correo.includes("@")){
        evento.preventDefault();
        alert("Error");
        return;
    }
    alert(`Datos enviados:\n Nombre: ${nombre} \n Correo: ${correo}`);
});