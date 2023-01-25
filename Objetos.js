var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
 
 // ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

//Dot-Notation y Bracket-Notation
// Dot-Notation o notación por puntos para acceder o asignar un valor, 
//también podemos usar Bracket-Notation, o notación por corchetes. Lo único que cambia es la forma en la que lo escribimos.

//Muchas veces nos puede suceder que necesitemos utilizar una variable externa 
//para guardarla como propiedad en un objeto. Es importante que en esos casos 
//recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

//hasOwnProperty() 
//nos permitirá especificar un nombre, y verificar si este existe 
//como una propiedad dentro de un objeto. En cada caso devolverá true o false.

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

//El método Object.keys() devuelve todas las propiedades de un objeto guardadas 
//en orden dentro de un arreglo.

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

//For-In 
//nos permite iterar sobre un objeto utilizando dos variables pivot. Una 
//representa el objeto que recorremos, y la otra la propiedad en la que se 
//está realizando la iteración. Utilizando ambos valores podremos acceder al 
//valor de cada propiedad del objeto.

for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }

//this. 
//Este nos permite manipular el contexto en el que las funciones y la información 
//está siendo ejecutada. De esta forma podremos tener un alcance más preciso 
//dentro de nuestro código.

var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };

// .Property se utiliza para desglozar lo que esta dentro de la 
// propiedad (lo que contiene)

property = 'nombre'
gato[property] --- gatito 
gato.nombre // es lo mismo pero con el metodo DOT NOTATION
gato[property] = 'Napo' // es como cambia la propiedad de 'gatito' a 'Napo'
objeto[metodo](); // para llamar una funcion [] buscan dentro de todo, una funcion
objeto.metodo()   // en cambio aca busca solo la funcion llamada metodo
