// Lista de compras
var listaDeComras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

// Push y Pop
// POP = elimina el ultimo elemento de la matriz, disminuyendo la longitud en 1 
// .pop devuelve el elemento "reventado" (popped).
// Push = agrega un elemento al final de la matruz, incrementado su longitud en  1 
// .push devuelve la nueva longitud
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// UNSHIFT y SHIFT
// .unshift(item) colocara el nuevo elemento en la primera posicion de la matriz
// .shift() eliminara el primer elemento de la matriz
colores.shift();
colores.pop();

console.log(colores);

// LENGTH
// .length cuenta los caracteres, la matriz, devolvera el numero de elementos en una matriz.

// INCLUDES
// .includes determina si un arreglo incluye o contiene un elemento especifico. Devuelve true o false en cada caso.
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY 
// .every determina si todos los elementos en un arreglo saisfacen una misma condicion.
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT
// .split convierte un string en un arreglo, donde cada elemeneto contendra una sub-string
// dependiendo del parametro divisor que indiquemos.
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
// .join convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
// .forEach nos permite recorrer un arreglo, realizando alguna accion en para cada elemento.
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
// .map tambien nos permite recorrer un arreglo y realizar una accion por cada elemento. 
// La diferencia es que este metodo devuelve un nuevo arreglo los elementos modificados.
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);