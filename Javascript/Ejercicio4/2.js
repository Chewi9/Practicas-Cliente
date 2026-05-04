class CuentaBancaria {
    constructor(titular, saldo =0){
        this.titular = titular;
        this.saldo = saldo;
        this.movimientos = [];
    }

    ingresar(cantidad){
        if(cantidad > 0){
            this.saldo += cantidad;
            this.movimientos.push({ tipo: "ingreso", cantidad });
        } else{
            console.log("ERROR");
        }
    }

    retirar(cantidad){
        if(cantidad > 0 && cantidad <= this.saldo){
            this.saldo -= cantidad;
            this.movimientos.push({ tipo: "retiro", cantidad });
        } else{
            console.log("ERROR");
        }
    }

    extracto(){
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo actual: ${this.saldo}`);
        console.log("Movimientos:");
        this.movimientos.forEach(mov => {
            console.log(`- ${mov.tipo}: ${mov.cantidad}`);
        });
    }

}

const c1 = new CuentaBancaria("Hugo", 1000);
c1.ingresar(500);
c1.retirar(200);
c1.extracto();



class Fraccion {
    constructor(numerador, denominador){
        if(denominador === 0){
            throw new Error("El denominador no puede ser cero");
        }
        this.numerador = numerador;
        this.denominador = denominador;
    }

    sumar(otraFrac){
        const nuevoNum = this.numerador * otraFrac.denominador + otraFrac.numerador * this.denominador;
        const nuevoDenom = this.denominador * otraFrac.denominador;
        return new Fraccion(nuevoNum, nuevoDenom);
    }

    multiplicar(otraFrac){
        const nuevoNum = this.numerador * otraFrac.numerador;
        const nuevoDenom = this.denominador * otraFrac.denominador;
        return new Fraccion(nuevoNum, nuevoDenom);
    }

    simplificar(){
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        const divisor = gcd(this.numerador, this.denominador);
        return new Fraccion(this.numerador / divisor, this.denominador / divisor);
    }

    toString(){
        return `${this.numerador}/${this.denominador}`;
    }
}
const f1 = new Fraccion(1, 2);
const f2 = new Fraccion(3, 4);
const suma = f1.sumar(f2).simplificar();
const producto = f1.multiplicar(f2).simplificar();
console.log(`Suma: ${suma.toString()}`);
console.log(`Producto: ${producto.toString()}`);