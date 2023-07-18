
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

//Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}