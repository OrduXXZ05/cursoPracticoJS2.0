const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
)

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB
    }
)

function esPar(numero) {
    return (numero % 2 === 0)
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


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitadA = lista[mitad - 1];
        const personaMitadB = lista[mitad];

        const mediana = calcularMediaAritmnetica([personaMitadA, personaMitadB]);
        return mediana
    } else {
        const personitaMitad = lista[mitad];

        return personitaMitad;
    }
}