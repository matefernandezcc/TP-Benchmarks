// Crear un array con 1 millón de números impares
var arraySize = 1000000;
var oddNumbers = [];
var currentOddNumber = 1;
for (var i = 0; i < arraySize; i++) {
    oddNumbers.push(currentOddNumber);
    currentOddNumber += 2;
}
// Función para realizar búsqueda binaria
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Retorna el índice si se encuentra el objetivo
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1; // Retorna -1 si no se encuentra el objetivo
}
// Número a buscar
var targetNumber = 777777;
// Realizar la búsqueda binaria
var index = binarySearch(oddNumbers, targetNumber);
if (index !== -1) {
    console.log("N\u00FAmero ".concat(targetNumber, " encontrado en la posici\u00F3n ").concat(index, "."));
}
else {
    console.log("N\u00FAmero ".concat(targetNumber, " no encontrado."));
}
