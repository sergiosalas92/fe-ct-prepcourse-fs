//Función: sumaTres
// PRIMERO
function sumaTres (x) {
    console.log(x + 3);
}

sumaTres(5);

function sonIguales(x, y) {
  if (x === y) {
     return true;
  }else { 
     return false;
  }
}

// DOS
var sumaTres = (x) => {
    return x + 3;
  }

  // TERCERO 
var sumaTres = function (x) {
    return x + 3;
}

// CUARTO
var sumaTres = (x) => {
    return x + 3;
}

  //Función: cuidadoConElConsoleLog
  function cuidadoConElConsoleLog(nombre) {
      console.log(nombre);
      return nombre;
    }
  //Precedencia de valores
  var a = 1;
  var b = 2;
  var c = a = b;
  console.log (c); 