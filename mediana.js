const lista1 = [
    200,
    100,
    500,
    300,
    400,
    6000000,
]

const mitadLista1 = parseInt(lista1.length / 2);

let mediana;

const lista1Ordenada = ordenarLista(lista1);

function ordenarLista(lista) {

    function compararNumeros(a,b) {
        return a - b
    }

    const orden = lista.sort(compararNumeros);
    return orden;

}

function calcularMediaAritmnetica(lista) {    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}



function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if(esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1]; 
    const elemento2 = lista1[mitadLista1];
    
    const promedioElemento1y2 = calcularMediaAritmnetica([elemento1,elemento2]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}