const objLiteral = {nombre: "Test"};
const objFecha = new Date();
const miBase = {tipo: "Base"};
const objCreado = Object.create(miBase);

function recorrerCadena(objeto, nombre){
    let actual = objeto;
    let contador = 0;
    do{
        console.log(`Eslabón ${contador}:`, actual);
        actual = Object.getPrototypeOf(actual);
        contador++;
    } while(actual !== null);
    console.log(`Eslabón ${contador}:`, null);
}
recorrerCadena(objLiteral, "objLiteral");
recorrerCadena(objFecha, "objFecha");
recorrerCadena(objCreado, "objCreado");


console.log("Ejercicio 2")
const vehiculo = {
    tipo: "vehículo",
    describir() {
        console.log(`Soy un ${this.tipo} de marca ${this.marca}`);
    }
};

const coche1 = Object.create(vehiculo);
coche1.marca = "Toyota";

const coche2 = Object.create(vehiculo);
coche2.marca = "Honda";

const coche3 = Object.create(vehiculo);
coche3.marca = "Ford";

console.log("¿ 'marca' es propiedad de coche1?", Object.hasOwn(coche1, "marca"));
console.log("¿ 'tipo' es propiedad de coche1?", Object.hasOwn(coche1, "tipo"));

for (let prop in coche1){
    console.log(prop);
}

console.log(Object.keys(coche1)); // Solo propiedades propias


console.log("Ejercicio 3");
const base = {
    saludar() {
        console.log("Hola genérico");
    },
    despedirse() {
        console.log("Adiós genérico");
    }
}
const obj1 = Object.create(base);
const obj2 = Object.create(base);
obj2.saludar = function() {
    console.log("Hola cambiado");
}
const obj3 = Object.create(base);
obj3.saludar = function() {
    console.log("Hola cambiado");
}
obj3.despedirse = function() {
    console.log("Adiós cambiado");
}

obj1.saludar();
obj1.despedirse();
obj2.saludar();
obj2.despedirse();
obj3.saludar();
obj3.despedirse();

Object.getPrototypeOf(obj3).saludar();



console.log("Ejercicio 4");
const protoFigura = {
    describir() {
        console.log(`Soy una figura de relleno ${this.relleno} con color ${this.color}`);
    }
};

const fig1 = Object.create(protoFigura);
fig1.relleno = "sólido";
fig1.color = "rojo";

function FiguraConst(relleno, color) {
    this.relleno = relleno;
    this.color = color;
}
const fig2 = new FiguraConst("transparente", "azul");