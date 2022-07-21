const message = document.getElementById('message');

let name = prompt("Introducir nombre");
let age = Number(prompt("Introducir edad"));
let nex_age = age + 1;

message.textContent = "Hola" + " " + name + " tienes " + age + " años y el año que viene tendrás " + nex_age;