// Crear un array con 1 millón de números impares
const arraySize = 1000000;
const oddNumbers: number[] = [];
let currentOddNumber = 1;

for (let i = 0; i < arraySize; i++) {
    oddNumbers.push(currentOddNumber);
    currentOddNumber += 2;
}

// Función para realizar búsqueda lineal
function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Retorna el índice si se encuentra el objetivo
        }
    }
    return -1; // Retorna -1 si no se encuentra el objetivo
}

// Número a buscar
const targetNumber = 777777; // Asegúrate de que esta variable no esté declarada más de una vez en el archivo

// Realizar la búsqueda lineal
const index = linearSearch(oddNumbers, targetNumber);

if (index !== -1) {
    console.log(`Número ${targetNumber} encontrado en la posición ${index}.`);
} else {
    console.log(`Número ${targetNumber} no encontrado.`);
}
