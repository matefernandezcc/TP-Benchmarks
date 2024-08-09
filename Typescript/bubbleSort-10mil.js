// Tamaño del array
var ARRAY_SIZE = 10000;
// Limite de elementos a mostrar
var DISPLAY_LIMIT = 5;
// Inicializar array
var array = [];
for (var i = 1; i <= ARRAY_SIZE; i++) {
    array.push(i);
}
// Función para desordenar el array (Shuffle)
function shuffleArray(arr) {
    var _a;
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1]; // Intercambiar elementos
    }
}
// Función Bubble Sort
function bubbleSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1]; // Intercambiar elementos
            }
        }
    }
}
// Función para mostrar el array
function displayArray(arr, limit) {
    for (var i = 0; i < limit; i++) {
        console.log("Elemento ".concat(i + 1, ": ").concat(arr[i]));
    }
}
// Desordenar el array
shuffleArray(array);
// Mostrar los primeros 5 elementos desordenados
console.log("Array Desordenado (Primeros 5 Elementos):");
displayArray(array, DISPLAY_LIMIT);
// Ordenar el array usando Bubble Sort
bubbleSort(array);
// Mostrar los primeros 5 elementos ordenados
console.log("Array Ordenado (Primeros 5 Elementos):");
displayArray(array, DISPLAY_LIMIT);
