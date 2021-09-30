// Objetos en JS

// 1ª Forma de declarar objetos en JS mediante un literal

let jugador1 = {
    nombre: 'Sergio', // Las propiedades en JS son públicas
    apellidos: 'Ramos',
    dorsal: '04',
    equipos: ['Sevilla','Real Madrid','Qatar Saint Germain'],
    goles: 0,

    marcarGol() {
        this.goles++;
    }
}

// Acceso a los miembros (propiedades y métodos) se hace con la notación del punto

console.log(jugador1.nombre);
jugador1.apellidos = 'Ramos Fernández';
console.log(jugador1.apellidos);
jugador1.numeroPartidos = 20; // Se pueden añadir propiedades ¿?
console.log(jugador1.numeroPartidos);

// 2ª Forma de declarar objetos en JS como instancias de Object (menos frecuente)

let jugador2 = new Object();

jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = '10';
jugador2.goles = 0;
jugador2.marcarGol = function () {
    this.goles++;
}

jugador2.marcarGol();

console.log(jugador2);

// 3ª Forma de declarar objetos en JS con una función constructora

function Jugador(nombre, apellidos, dorsal, goles) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dorsal = dorsal;
    this.goles = goles;

    this.marcarGol = function () {
        this.goles++;
    }
}

// Podemos instanciar objetos con en esa función como si fuera una clase

let jugador3 = new Jugador('Julio','Iglesias','01',0)

console.log(jugador3.nombre);

// 4ª Forma de declarar objetos en JS con factory functions

function Empleado (nombre, apellidos, dni) {
    return {
        nombre, // Equivale a nombre: nombre desde ECMA6 podemos simplificar cuando propiedad y variable se llaman igual
        apellidos,
        dni
    }
}

let empleado1 = Empleado('Juan','Pérez','07888654Z');
console.log(empleado1.dni);

