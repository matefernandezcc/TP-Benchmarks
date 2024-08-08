# TP Benchmarks
 Comparación entre COBOL y Typescript

 # Makefile
 make all: Compila los ejecutables de busqueda Binaria y Lineal tanto en Typescript como en Cobol

 make binaria: Solo compila los ejecutables de la busqueda Binaria

 make lineal: Solo compila los ejecutables de la busqueda Lineal

 make clean: Elimina todos los ejecutables

 # Tiempos de ejecución
 Usando arrays de 100 mil elementos

 Para medir el tiempo de ejecución se uso la función time de Ubuntu

 * The 'time' command in Linux is used to determine the duration of execution of a particular command. It is used by prefixing your command with ‘time’, ie: time [command].

 ## Busqueda Binaria (Array ordenado)
 Valor buscado: 777

 ===== COBOL =====
 real    0m8.849s
 user    0m0.000s
 sys     0m0.007s

 ===== Typescript =====
 real    0m0.057s
 user    0m0.032s
 sys     0m0.016s

 ## Busqueda Lineal (Array Desordenado)
 Valor buscado: 777

 ===== COBOL =====
 real    0m1.700s
 user    0m0.219s
 sys     0m0.000s

 ===== Typescript =====
 real    0m0.060s
 user    0m0.036s
 sys     0m0.018s


