function calcular() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    sumar(num1, num2);
    restar(num1, num2);
    multiplicar(num1, num2);
    dividir(num1, num2);
}

function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(`La suma es: ${resultado}`);
}


function restar(num1, num2) {
    let resultado = num1 - num2;
    console.log(`La resta es: ${resultado}`);
}

function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    console.log(`La multiplicación es: ${resultado}`);
}


function dividir(num1, num2) {
    let resultado = num1 / num2;
    console.log(`La división es: ${resultado}`);
}
