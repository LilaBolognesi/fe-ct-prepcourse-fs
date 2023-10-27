/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var arregloPadre= [];
   for (var key in objeto){
      arregloPadre.push([key,objeto[key]])
   }
   return arregloPadre;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   function ordenador(objeto) {
      // { a: 5, d: 4, b: 5, c: 6, h: 3, j: 8}
      var ordenado = {};
  
      var claves = Object.keys(objeto).sort(); //[ 'a', 'b', 'c', 'd', 'h', 'j' ]
      claves.forEach(function (clave) {
        ordenado[clave] = objeto[clave]; //ordenado = {a: 5, b: 5, c: 6, ... }
      });
  
      return ordenado; //{ a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    }
  
    var contadorLetras = {};
  
    for (var i = 0; i < string.length; i++) {
    
      var letra = string[i];
      if (contadorLetras.hasOwnProperty(letra)) {
        contadorLetras[letra] += 1;
      } else {
        contadorLetras[letra] = 1;
      }
    }
  
    var objetoOrdenado = ordenador(contadorLetras);
    return objetoOrdenado;
  }


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayuscula = "";// variable que guarda todas las letras mayusculas que encuentra
   var minuscula = "";// variable que guarda todas las letras minusculas que encuentra
   
   for (var i = 0; i < string.length; i++){
   var letra = string[i];
   if(letra.toUpperCase() === letra){
      mayuscula = mayuscula + letra;
      
   }
   else {
     minuscula = minuscula + letra;
   }
}
   return mayuscula + minuscula;

   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   function invertir(palabra) {
      
      return palabra.split('').reverse().join('');
    }
  
    var arregloDePalabras = frase.split(' ');
    var arregloInvertidas = arregloDePalabras.map(function (palabra) {
      return invertir(palabra);
    });
  
    var stringinvertidas = arregloInvertidas.join(' ');
    return stringinvertidas;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   
   //un número no se puede iterar. Convertimos el número en string
   var stringNumero = numero.toString(); // 23938 --> '23938'
   
   //invertimos el string
  var stringInvertido = stringNumero.split('').reverse().join(''); //'83932'

  // comparamos si el string original es igual al string invertido
  if (stringNumero === stringInvertido) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   //cada vez que encontramos una letra que no sean "a", "b" y "c" la concatenamos en el string vacio para devolverlo al final
   var stringNoabc = '';

   for (var i = 0; i < string.length; i++) {
     var letra = string[i];
     if (letra !== 'a' && letra !== 'b' && letra !== 'c') {
      stringNoabc = stringNoabc + letra;
     }
   }
 
   return stringNoabc;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   //iteramos sobre cada una de las palabras que tiene el rreglo de strings
   for (var i = 0; i < arrayOfStrings.length - 1; i++) {
      //doble iteracion
      //i cambia de valor cando j termina de hacer su recorrido
      for (var j = i + 1; j < arrayOfStrings.length; j++) {
         //comparamos si i tiene mas letras que  j
        if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
         //variable auxiliar para que nos guarde la información 
         var aux = arrayOfStrings[i];
         //intercambiamos i por j
          arrayOfStrings[i] = arrayOfStrings[j];
          arrayOfStrings[j] = aux;
        }
      }
    }
  
    return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var comunElemento = [];

   for (var num1 of array1) {
     for (var num2 of array2) {
       if (num1 === num2) {
         comunElemento.push(num1);
       }
     }
   }
 
   return comunElemento;
 }
 
 // for tradicional
 
 /* let array3 = [];
    for (let i = 0; i < array1.length; i++) {
       for (let j = 0; j < array2.length; j++) {
          if (array1[i] === array2[j]) {
             array3.push(array1[i]);
          }
       }
       
    }
    return array3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
