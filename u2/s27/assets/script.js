console.log("hola mundo");
let nombre = prompt("clari:");
if (nombre.length <= 5) {
    console.log("tu nombre es corto");
}

let num1 = 7; 
let num2 = 7; 
console.log(`Primer numero -> ${num1}`);
console.log(`Segundo numero -> ${num2}`);
if (num1 > num2) {
    console.log("El primer numero es el mayor.");
} else if (num2 > num1) {
    console.log("El segundo numero es el mayor.");
} else {
    console.log("Ambos numeros son iguales");
}

let edad = parseInt(prompt("¿Cuál es tu edad?"));
let estaEnUSA = true;
if (edad >= 18) {
    if (estaEnUSA) { 
        if (edad >= 21) { 
            console.log("Es mayor de edad.");
        } else {
            console.log("Es menor de edad.");
        }
    } else { 
        console.log("Es mayor de edad.");
    }
} else {
    console.log("Es menor de edad.");
}

