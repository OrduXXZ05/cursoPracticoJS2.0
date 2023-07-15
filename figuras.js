//Codigo del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("EL perimetro del cuadrado mide " + perimetroCuadrado + "cm");

const areaCuadrado = Math.pow(ladoCuadrado, 2);
//Math.pow devuelve el resultado de una potencia Match.pow(Base, Exponente)
console.log("El area del cuadrado mide " + areaCuadrado + "cm^2")

console.groupEnd();
//Codigo del triangulo

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados de mi triangulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, y su base mide " 
    + baseTriangulo + "cm" 
)

console.log(
    "La altura del triangulo mide: " + alturaTriangulo + "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;


console.log(
    "El perimetro del triangulo mide: " + perimetroTriangulo + "cm"
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(
    "El area del triangulo mide: " + areaTriangulo + "cm^2"
)

console.groupEnd();

//Codigo Circulo

console.group("Circulo");

const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm")

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide: " + diametroCirculo + "cm")

const PI = Math.PI;
console.log("PI mide: " + PI);

const circunferenciaCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo mide: " + circunferenciaCirculo + "cm")

const areaCirculo = (Math.pow(radioCirculo, 2)) * PI;
console.log("El area del circulo mide: " + areaCirculo + "cm^2")

console.groupEnd();