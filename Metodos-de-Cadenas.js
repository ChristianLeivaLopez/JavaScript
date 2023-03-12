let cadena = "cadena, cadena, cadena, de, prueba";
let array = ["cadena", "cadena2","cadena3"];
let cadena2 = "cadena";
let cadena3 = "prueba";
let numero = 342;
// Concatena ${cadena} con ${cadena2}
resultado = cadena.concat(cadena2);
// Devuelve True o False, dependiendo si ${cadena} empieza por ${cadena2}
resultado2 = cadena.startsWith(cadena2);
// Devuelve True o False, dependiendo si ${cadena} termina por ${cadena2}
resultado3 = cadena.endsWith(cadena3);
// Devuelve True o False, dependiendo si ${cadena2} está en ${cadena}
resultado4 = cadena.includes(cadena2);
// Devuelve la posicion de la primera cooincidencia entre ${cadena} y ${cadena2}
resultado5 = cadena.indexOf(cadena2);
// Devuelve la posicion de la últim cooincidencia entre ${cadena} y ${cadena2}
resultado6 = cadena.lastIndexOf(cadena2);
// Rellena ${cadena} con un valor a indicar para alcanzar una longitud dada 
resultado7 = cadena.padStart(10, "a");
// Rellena ${cadena} con un valor a indicar para alcanzar una longitud dada, pero lo hace al final
resultado8 = cadena.padEnd(10,"b");
// Repite ${cadena} tantas veces como se indique
resultado9 = cadena.repeat(10);
// Divide un string en partes cada vez que encuentra un valor dado
resultado10 = cadena.split(",");
// Devuelve el valor de un rango de posiciones dado
resultado11 = cadena.substring(0,2);
// Transforma un string a minusculas
resultado12 = cadena.toLowerCase();
// Transforma un string a mayusculas
resultado13 = cadena.toUpperCase();
// Transforma una variable a string
resultado14 = numero.toString();
// Elimina los espacios de un string
resultado15 = cadena.trim();
// Elimina los espacios de un string al final
resultado16 = cadena.trimEnd()
// Elimina los espacios de un string al comienzo
resultado17 = cadena.trimStart();
// Modifica un array, extrayendo el último valor y metiendolo en resultado18
resultado18 = array.pop();
// Modifica un array, extrayendo el primer valor y metiendolo en resultado19
resultado19 = array.shift()
// Modifica un array, colocando en la última posicion un valor dado, también devuelve el numero de valores en un array 
resultado20 = array.push("cadena4");
// Modifica un array, colocando en la primera posicion un valor dado, también devuelve el numero de valores en un array 
resultado22 = array.unshift()
// Da la vuelta un array
resultado21 = array.reverse();
// Ordena un array 
resultado22 = array.sort();
// Remplaza valores dentro de un rango del array por otros valores dados
resultado23 = array.splice(1,3,"valor")
// Devuelve una cadena como caracter, pudiendo incluir separadores
resultado24 = array.join("-");
// Devuelve los elementos dentro de un rango dado
resultado25 = array.slice(0,-1)