//AND 
// En una declaración &&, si la primera expresión es false, la segunda expresión 
// no se evaluará porque AMBAS expresiones deben ser true. 

function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 

// OR
// Si la primera expresión es verdadero, la segunda no se evaluará porque solo 
// debe haber una declaración verdadera para cumplir con los requisitos del operador. 

function operadorOr(str) {
   if (str === 'Henry' || str.length < 2) console.log(true);
   else console.log(false);
}
operadorOr('Henry');
operadorOr('Javascript');
operadorOr('H');

// NOT
// utilizamos paréntesis para evaluar PRIMERO lo que estaba dentro de ellos, y 
// luego aplicamos la negación. Podemos ajustar cualquier expresión entre 
// paréntesis y se evaluará antes que toda la expresión en conjunto.

function negacion(permiso) {
   if (permiso) console.log('Tiene permiso');
}
negacion(true);
negacion(false);