const result_area = document.getElementById('area');
let flag = true;
while (flag) {
    let option = prompt("¿Que figura se quiere calcular el área (triángulo, rectángulo y círculo)").toLowerCase();
    let base;
    let height;
    let area;
    switch (option) {
        case "triángulo":
            flag = false;
            base = Number(prompt("Introducir base"));
            height = Number(prompt("Introducir altura"));
            area = (base * height) / 2;
            result_area.textContent = "El área total del triángulo es: " + area.toFixed(3);
            break;
        case "rectángulo":
            flag = false;
            base = Number(prompt("Introducir base"));
            height = Number(prompt("Introducir altura"));
            area = (base * height);
            result_area.textContent = "El área total del rectángulo es: " + area.toFixed(3);
            break;
        case "círculo":
            flag = false;
            let radius = Number(prompt("Introducir radio del círculo"));
            area = Math.PI * Math.pow(radius, 2);
            result_area.textContent = "El área total del círculo es: " + area.toFixed(3);
            break;
        default:
            alert("Invalid option");
    }
}