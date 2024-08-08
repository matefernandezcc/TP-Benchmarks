# TP Benchmarks
Comparación entre COBOL y Typescript

# Makefile
make all: Compila los ejecutables de busqueda Binaria y Lineal tanto en Typescript como en Cobol

make binaria: Solo compila los ejecutables de la busqueda Binaria

make lineal: Solo compila los ejecutables de la busqueda Lineal

make clean: Elimina todos los ejecutables

# Tiempos de ejecución
Para medir el tiempo de ejecución se uso la función time de Ubuntu

* The 'time' command in Linux is used to determine the duration of execution of a particular command. It is used by prefixing your command with ‘time’, ie: time [command].

## Busqueda Binaria (Array ordenado)
- Usando un array de 100 mil elementos para todas las pruebas.
- Valor buscado: 777777

===== COBOL =====

777777 ENCONTRADO EN LA POSICIÓN 0388889

real  
0m0.108s  

user  
0m0.082s  

sys  
0m0.010s  

===== Typescript =====

Número 777777 encontrado en la posición 388888.

real  
0m0.046s  

user  
0m0.034s  

sys  
0m0.018s  

## Busqueda Lineal (Array Desordenado)

===== COBOL =====

real  
0m0.150s  

user  
0m0.136s  

sys  
0m0.010s  

===== Typescript =====

real  
0m0.069s  

user  
0m0.035s  

sys  
0m0.026s  

# Conclusión
La discrepancia en los tiempos de ejecución puede ser debido a las diferencias en los entornos de ejecución y las optimizaciones realizadas por los compiladores o motores de ejecución. 

COBOL es muy eficiente en muchos contextos tambien puede ser que esta teniendo un overhead relacionado con el entorno de ejecución, en cambio los entornos modernos de JavaScript pueden ofrecer una eficiencia mayor para operaciones en memoria por las optimizaciones en sus motores de ejecución.
