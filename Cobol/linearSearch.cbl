       IDENTIFICATION DIVISION.
       PROGRAM-ID. BusquedaLinealImpares.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
           01 ARREGLO.
               05 ELEMENTO PIC 9(7) OCCURS 1000000 TIMES INDEXED BY IDX.
           01 CLAVE PIC 9(7) VALUE 777777.
           01 ENCONTRADO PIC X VALUE 'N'.
           01 IMPAR PIC 9(7) VALUE 1.
           01 I PIC 9(7) VALUE 1.
           01 ENCONTRADO-EN-INDICE PIC 9(7) VALUE 1.

       PROCEDURE DIVISION.
           DISPLAY "Buscando el valor: " CLAVE
           
           PERFORM VARYING IDX FROM 1 BY 1 UNTIL IDX > 1000000
               MOVE IMPAR TO ELEMENTO(IDX)
               ADD 2 TO IMPAR
           END-PERFORM

           PERFORM UNTIL I > 1000000 OR ENCONTRADO = 'Y'
               IF ELEMENTO(I) = CLAVE THEN
                   MOVE 'Y' TO ENCONTRADO
                   MOVE I TO ENCONTRADO-EN-INDICE
               END-IF
               ADD 1 TO I
           END-PERFORM

           IF ENCONTRADO = 'Y'
               DISPLAY "CLAVE ENCONTRADA EN LA POSICIÓN " ENCONTRADO-EN-INDICE
           ELSE
               DISPLAY "CLAVE NO ENCONTRADA".

           STOP RUN.
