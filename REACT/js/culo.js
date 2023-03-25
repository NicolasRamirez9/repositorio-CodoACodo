function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
var contador = 0;
var acumulador = 0;

  do{
    contador++;
    numero = numero + 5;
    }while(contador < 8)

    return numero;

  }
  console.log(doWhile(3));
