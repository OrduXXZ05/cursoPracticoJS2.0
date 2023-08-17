
function perimetroCuadrado(lado) {
    return Number(lado) * 4;
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;


function circunferenciaCirculo(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio) {
    return (Math.pow(radio, 2) * PI);
}

function validarIsosceles(lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base && lado2 != base) {
        alert("Si es un triangulo isosceles")
        return true
    } else {
        alert("Recuerda que un triangulo isosceles tiene 2 lados iguales y la base es diferente ")
        return false
    }
}

//Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const respuesta = document.getElementById("respuestaCuadrado");

    return respuesta.innerText = "El perimetro del cuadrado es " + perimetro;
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const respuesta = document.getElementById("respuestaCuadrado");

    return respuesta.innerText = "El area del cuadrado es " + area;
}

function alturaIsosceles(lado1, lado2, base) {
    if(validarIsosceles(lado1, lado2, base) == true) {
        const altura = Math.sqrt((Math.pow(lado1, 2)) - (Math.pow(base, 2) / 4)).toFixed(2);
        alert("La altura de tu triangulo isosceles es " + altura);
        return altura;
    } else {
        alert("Esto no es un triangulo isosceles");
    }
}