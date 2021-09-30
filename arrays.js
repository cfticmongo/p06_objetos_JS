// Sintaxis y acceso a arrays

let frutas = ['peras','manzanas','plátanos','naranjas']; // Indexado a cero

// Acceso
// <array>[<posición ó expresion>]

let frutaSeleccionada = frutas[2]; 
console.log(frutaSeleccionada);

let a = 2

frutaSeleccionada = frutas[a + 1]; // Permite expresiones que devuelvan la posición
console.log(frutaSeleccionada);