// Crear un array con 1 millón de números impares
var arraySize = 1000000;
var oddNumbers = [];
var currentOddNumber = 1;
for (var i = 0; i < arraySize; i++) {
    oddNumbers.push(currentOddNumber);
    currentOddNumber += 2;
}
// Función para realizar búsqueda lineal
function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Retorna el índice si se encuentra el objetivo
        }
    }
    return -1; // Retorna -1 si no se encuentra el objetivo
}
// Número a buscar
var targetNumber = 777777; // Asegúrate de que esta variable no esté declarada más de una vez en el archivo
// Realizar la búsqueda lineal
var index = linearSearch(oddNumbers, targetNumber);
if (index !== -1) {
    console.log("N\u00FAmero ".concat(targetNumber, " encontrado en la posici\u00F3n ").concat(index, "."));
}
else {
    console.log("N\u00FAmero ".concat(targetNumber, " no encontrado."));
}
