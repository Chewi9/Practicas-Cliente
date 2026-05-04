class Figura {
    constructor(color){
        this.color = color;
    }
    describir(){
        console.log(`Soy una ${this.constructor.name} de color ${this.color}`);
    };

    area(){
        throw new Error("área no implementada");
    }
}

class Circulo extends Figura {
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }
    describir(){
        console.log(`Soy un ${this.constructor.name} de color ${this.color} y radio ${this.radio}`);
    }
    area(){
        return Math.PI * this.radio * this.radio;
    }
}

class Rectangulo extends Figura {
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    describir(){
        console.log(`Soy un ${this.constructor.name} de color ${this.color}, base ${this.base} y altura ${this.altura}`);
    }
    area(){
        return this.base * this.altura;
    }
}

class Triangulo extends Figura {
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    describir(){
        console.log(`Soy un ${this.constructor.name} de color ${this.color}, base ${this.base} y altura ${this.altura}`);
    }
    area(){
        return (this.base * this.altura) / 2;
    }
}

const miFigura = [
    new Circulo("rojo", 5),
    new Rectangulo("azul", 4, 6),
    new Triangulo("verde", 3, 4)
];

let totalArea = 0;
miFigura.forEach(figura => {
    figura.describir();

    const area = figura.area();
    console.log(`Área: ${area.toFixed(2)}`);

    totalArea += area;
})
console.log(`Área total: ${totalArea.toFixed(2)}`);



class Empleado {
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    presentación(){
        console.log(`Hola, soy ${this.nombre} y gano ${this.salario} al mes.`);
    }
}

class Gestor extends Empleado {
    constructor(nombre, salario, departamento){
        super(nombre, salario);
        this.departamento = departamento;
    }

    
}