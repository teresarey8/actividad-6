alert("A continuación se solicitaran dos números")
let num1 = parseFloat(prompt("Introduzca aquí el primer número:"));
let num2 = parseFloat(prompt("Introduzca aquí el segundo número"));

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}


alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
alert("El resultado de la multiplicación es: " + multiplicación);
alert("El resultado de la división es: " + división);