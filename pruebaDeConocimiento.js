// VARIABLES_________________________________________________

let nombre = "Felipe";
let apellido = "Orduz";
let nombreUsuario = "orduzfelipe05";
let edad = 18;
let correoElectronico = "orduzfelipe05@gmail.com";
let mayoriaEdad = true;
let dineroAhorrado = 500000;
let deudas = null;

//Calculo variables

let nombreCompleto = nombre + " " + apellido;
let dineroReal = dineroAhorrado - deudas;

// FUNCIONES_________________________________________________

function funcionNombre(name, lastName, nickName) {
    const completeName = name + " " + lastName;

    console.log("Hola mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".")
}

//CONDICIONALES______________________________________________

const tipoSuscripcion = "Basic";

if (tipoSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
} else {
    console.log("Tu tipo de suscripción no es valida :(")
}

//2do Punto y Bonus

const tipoSuscripcion2 = "Basic";

let listaSuscripciones = [
    "Free",
    "Basic",
    "Expert",
    "ExpertPlus"
]

const Respuestas=[
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
];

let index = listaSuscripciones.indexOf(tipoSuscripcion2);

if(index == 0 || index == 1 || index == 2 || index == 3) {
    console.log(Respuestas[index])
}

//CICLOS_____________________________________________________

//1er Punto
let i = 0;

while(i < 5) {
    console.log("El valor de i es " + i);
    i++;
}

//2do Punto

let x = 10;

while(x >= 2) {
    console.log("El valor de x es " + x);
    x--;
}

//3er punto

let respuesta = prompt("Cuanto es 2 + 2?")

if (respuesta == 4) {
    alert("Correcto!!")
} else {
    alert("Respuesta incorrecta")
}

//ARRAYS_____________________________________________________

let platformJuegos = [
    "Steam",
    "Epic Games",
    "Xbox",
    "EA Play",
    "GOG"
];

function primerElemento(array) {
    console.log(array[0]);
}

let marcas = [
    "Apple",
    "Xiaomi",
    "Samsung",
    "Hp",
    "Oppo",
    "Honor"
]

function listaMarcas(array) {
    for(i = 0; i < array.length; i++) {
      let elemento = array[i];
      console.log(elemento);
    }
}

let persona = {
    nombre: "Felipe",
    apellido: "Orduz",
    edad: 18
}

function valoresObjeto(objeto) {
        Object.values(objeto).forEach(elemento => {
            console.log(elemento)
        });
}