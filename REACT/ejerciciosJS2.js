

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return Math.max(x,y);
}
console.log(obtenerMayor(10,10));
//Funcion flecha
let obtenerMayor = (x,y) => Math.max(x,y);
console.log(obtenerMayor(2,2));




function mayoriaDeEdad(edad){
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
 return edad >= 18 ? "Allowed" : "Not allowed";
}
console.log(mayoriaDeEdad());
  



function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  switch (status) {
  case 1: 
      console.log("Online");
      break;
  case 2:
      console.log("Away");
      break;
  default: 
      console.log("Offline")
  }
}
console.log(conection(1));




function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
      case "aleman": 
          console.log("Guten Tag!");
          break;
      case "mandarin":
          console.log("Ni Hao!");
          break;
      case "ingles":
          console.log("Hello!");
          break;
      default: 
          console.log("Hola!")
      }
    }
    console.log(saludo("mandarin"));




function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
  
    switch (color) {
        case "blue": 
            console.log("This is blue");
            break;
        case "red":
            console.log("This is red");
            break;
        case "green":
            console.log("This is green");
            break;
        case "orange":
            console.log("This is orange");
            break;
        default: 
            console.log("Color not found")
        }
      }
      console.log(colors("orange"));




function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    return (numero === 10 || numero === 5)? true : false;
  }
  console.log(esDiezOCinco(10));




function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    return (numero < 50 && numero > 20)? true : false;
  }
  console.log(estaEnRango(30));




function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
   return (Math.floor(numero))? true : false;
}
console.log(esEntero(2));




function fizzBuzz(numero){
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
if(((numero % 5) === 0) && ((numero % 3) === 0)){
  return "fizzbuzz";
}
else if((numero % 3) === 0){
  return "fizz";
}
else if((numero % 5) === 0){
  return "buzz";
} 
else{
  return numero;
}
}
console.log(fizzBuzz());
// Ternario
function fizzBuzz(numero){
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
return ((numero % 5) === 0) && ((numero % 3) === 0)? "fizzbuzz" : ((numero % 3) === 0)? "fizz" : ((numero % 5) === 0)? "buzz" : numero;
}
console.log(fizzBuzz());




function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
if((num1 === 0) || (num2 === 0) || (num3 === 0)){
  return "Error";
}
else if(((num1 > num2) && (num1 > num3)) && (num1 > 0)){
  return "Número 1 es mayor y positivo";
}
else if((num1 < 0) || (num2 < 0) || (num3 < 0)){
  return "Hay negativos";
}
else if((num3 > num1) && (num3 > num2)){
  num3++;
  return num3;
} 
else{
  return false;
}
}
console.log(operadoresLogicos(6,5,1));
// Ternario
((num1 === 0) || (num2 === 0) || (num3 === 0))? "Error" : (((num1 > num2) && (num1 > num3)) && (num1 > 0))? "Número 1 es mayor y positivo" :((num1 < 0) || (num2 < 0) || (num3 < 0))? "Hay negativos" : ((num3 > num1) && (num3 > num2))? `${num3 + 1}` : false;



function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

if(!numero || numero <= 1){
  return false;
}
for (let i = 2; i < numero; i++){
      if(numero % i === 0 ){
        return false;
  }
}
return true;
}

console.log(esPrimo());

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
return (valor === true)? "Soy verdadero" : "Soy falso";
}
console.log(esVerdadero());



function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var multiplicacion = [];

  for (let i = 0; i <= 10 ;i++){
    multiplicacion.push(6*i);
}
return multiplicacion;
}
console.log(tablaDelSeis());




function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
if(!numero || numero < -999 || numero > -100 && numero < 100 || numero > 999){
  return "No tiene 3 digitos mogolico.";
}
else{
  return "Tiene 3 digitos campeon.";
}
}
console.log(tieneTresDigitos());



function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
var contador = 0;

  do{
    contador++;
    numero = numero + 5;
    }while(contador < 8)

    return numero;

  }
  console.log(doWhile(3));

