/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
 
   //tomar la posicion 1 del string que me pasan (charAt(0))
   //transformar en Mayuscula con e método toUpperCase()
   //concatenar el string sin la posicion 1 (slice(1))
return nombre.charAt(0).toUpperCase() + nombre.slice(1);
 
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   // var suma = num1 + num2;
   // return cb(suma);
   return cb(num1,num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   
   //Definimos la variable suma
     var suma = 0;
//   Acumula toda la suma de los valores del array
for(var i = 0; i < arrayOfNumbers.length; i++){
   //Hacer la suma
   suma = suma + arrayOfNumbers[i]; //suma += arrayOfNumbers
}
//llamo a la callback
cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   // var arreglo = [];
   // for (var i =0; i < array.length; i++){
   //    arreglo.push(cb(array[i]));
   // }
   // return arreglo;

   // for (var i =0; i < array.length; i++){
   //    cb(array[i]);
   // }

   array.forEach((elemento)=> cb(elemento));
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
  
   //inicializamos array vacio para ir guaradando cada resultado
   var newArray = [];
   //recorremos arreglo
   for (var i =0; i < array.length; i++){
      newArray.push(cb(array[i]));
   }
   return newArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   //inicializamos en una variable que va a ser un arreglo vacio  para ir pussheando todos los elementos que comiencen con la letra "a"
   var letraA=[];

   
   for (var i =0; i < arrayOfStrings.length; i++){
      //condisional para identificar la primera letra del elemento
      if(arrayOfStrings[i][0]==="a"){
         letraA.push(arrayOfStrings[i])
      }
   }
 
   return letraA;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
