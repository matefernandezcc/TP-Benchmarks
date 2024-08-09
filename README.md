# Trabajo práctico N°2 Benchmark
Comparación de rendimiento con algoritmos de ordenamiento entre COBOL y Typescript

# Makefile
make all: Compila los ejecutables y los guardan en las carpetas de Typescript como en Cobol respectivamente

make clean: Elimina todos los ejecutables

# Tiempos de ejecución
Para medir el tiempo de ejecución se uso la función time de Ubuntu

* The 'time' command in Linux is used to determine the duration of execution of a particular command. It is used by prefixing your command with ‘time’, ie: time [command].

## Bubble Sort con 150 elementos

===== COBOL =====
- real    0m0.012s
- user    0m0.006s
- sys     0m0.000s

===== Typescript =====

- real    0m0.055s
- user    0m0.033s
- sys     0m0.013s


## Bubble Sort con 10 mil elementos

===== COBOL =====

- real    0m28.079s
- user    0m28.073s
- sys     0m0.000s

===== Typescript =====

- real    0m0.216s
- user    0m0.203s
- sys     0m0.011s
