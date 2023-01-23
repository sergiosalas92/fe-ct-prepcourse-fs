//                     FOR (repetir un bloque de codigo muchas veces)
//1ro Es la variable para contar la cantidad de repeticiones que va haciendo
//2do Condicion de frenado, cuando queres que deje de ejecutarse
//3ro Paso, como queres que vaya incrementando el valor
// EJEMPLO DEL 1 AL 100
for (var i = 1; i <= 100; i++) {
    console.log(i)
}

// Imprime1aN(n)
function imprime1aN(n) {
for (var i = 1; i <= n; i++) {
    console.log(i)
    }
}
// Ejecutar Imprime1aN(numero deseado) EJ: Imprime1aN(10)

// CON IF 
// Numeros pares
function imprime1aN(n) {
for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
    console.log(i)
        }   
    if (i > 200) {
        for (var j = 0; j < 10; j++) {
            console.log(j)
        }
        return;
        }
    }
}

// MATRIZ
//0 0 1 2 3 
//1 5 6 7 8
//2 9 1 2 3
// EJEMPLO
function matriz (n, m) {
    for (var i = 0; i <= n; j++) {
        console.log(i + ',' + j)
    }
}

// WHILE (mas primitivo)
while (condicion) {
    //bloque de codigo
}

var i = 0;
while (i < 100) {
    console.log(i);
    i++;
}

//repitiendo el ejercicio anterior de matriz pero con while
function matriz (n, m) {
    var j = 0;
    var i = 0;
    while (i < n) {
        while (j < m) {
            console.log(i, j);
            j = j + 1;
        }
        j = 0;
        i = i + 1;
    }
}

// DIFERENCIAS FOR y WHILE
//Con el for no sabes la antidad que hace para llegar al resultado