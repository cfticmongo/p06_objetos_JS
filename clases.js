// Declaración de clases (ECMA6)

class Vehiculo {
    marca;
    modelo;
    color;
    precio;

    constructor(marcaIn, modeloIn, colorIn, precioIn) {
        this.marca = marcaIn;
        this.modelo = modeloIn;
        this.color = colorIn;
        this.precio = precioIn;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getPrecioConImpuestos(tipoImpuesto) {
        return this.precio + this.precio * tipoImpuesto;
    }


}

let vehiculo1 = new Vehiculo('Renault','Megane','Gris',12000);
console.log(vehiculo1);
console.log(vehiculo1.getPrecioConImpuestos(.21));