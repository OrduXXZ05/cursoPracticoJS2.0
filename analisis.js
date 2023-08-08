//Calculadora mediana general

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

const medianaGeneral = medianaSalarios(salariosColSorted);

//Calculadora mediana top 10%

const spliceStart = parseInt((salariosColSorted.length * 90) / 100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Salarios = medianaSalarios(salariosColTop10);

//Helpers

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

//Calculadora de Mediana

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