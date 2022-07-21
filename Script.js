const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = Number(prompt('Introduzca el primer número'));
let b = Number(prompt('Introduzca el segundo número'));
let c = Number(prompt('Introduzca el tercer número'));

numbers.textContent = 'Los numeros introducidos son: ' + a + ' ' + b + ' ' + c;

//Validar el mayor
if (a >= b && a >= c) {
    if (b > c) {
        result.textContent = "El orden es: " + a + " " + b + " " + c;
    } else {
        result.textContent = "El orden es: " + a + " " + c + " " + b;
    }
} else if (b >= a && b >= c) {
    debugger
    if (a > c) {
        result.textContent = "El orden es: " + b + " " + a + " " + c;
    } else {
        result.textContent = "El orden es: " + b + " " + c + " " + a;
    }
} else if (c >= a && c >= b) {
    debugger
    if (a > b) {
        result.textContent = "El orden es: " + c + " " + a + " " + b;
    } else {
        result.textContent = "El orden es: " + c + " " + b + " " + a;
    }

}