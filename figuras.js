
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

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

