# Trabajo práctico N°2 Benchmark
Comparación de rendimiento con algoritmos de ordenamiento entre COBOL y Typescript

# Makefile
make all: Compila los ejecutables y los guardan en las carpetas de Typescript como en Cobol respectivamente

make clean: Elimina todos los ejecutables

# Tiempos de ejecución
Para medir el tiempo de ejecución se uso la función time de Ubuntu

* The 'time' command in Linux is used to determine the duration of execution of a particular command. It is used by prefixing your command with ‘time’, ie: time [command].

# Tiempos de Ejecución

| **Operación**                     | **Lenguaje**   | **Real**        | **User**        | **Sys**         |
|-----------------------------------|----------------|-----------------|-----------------|-----------------|
| **Sort**                          | COBOL          | `0m0.025s`       | `0m0.000s`       | `0m0.005s`       |
|                                   | TypeScript     | `0m0.049s`       | `0m0.031s`       | `0m0.010s`       |
| **Bubble Sort con 150 elementos** | COBOL          | `0m0.012s`       | `0m0.006s`       | `0m0.000s`       |
|                                   | TypeScript     | `0m0.055s`       | `0m0.033s`       | `0m0.013s`       |
| **Bubble Sort con 10 mil elementos** | COBOL       | `0m28.079s`      | `0m28.073s`      | `0m0.000s`       |
|                                   | TypeScript     | `0m0.216s`       | `0m0.203s`       | `0m0.011s`       |


