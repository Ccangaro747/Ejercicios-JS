//1-Escribe un programa que sume dos números y muestre el resultado en la consola

function sumarNumeros(num1, num2) {
  let suma = num1 + num2;
  console.log(suma);
}

let num1 = 25;
let num2 = 5;
sumarNumeros(num1, num2);

//2-Crea una función que reciba dos números como parámetros y devuelva su suma.

function sumaNumeros(num1, num2){
  return(num1 + num2)
}
let resultado = sumaNumeros(1, 2);
console.log(resultado) 

//3-Escribe un programa que determine si un número es par o impar. Muestra el resultado en la consola.

let numero = 7
if (numero % 2 != 0){ 
  console.log("el numero " + numero + " es impar")
} else {
  console.log("el numero " + numero + " es par")
} 
console.log()

//4-Crea una función que reciba una cadena de texto como parámetro y devuelva la cantidad de caracteres que contiene.

function cuantosCaracteres(cadena) {
  return cadena.length;
}

let texto = "Hola, como estas? ";
let cantidadCaracteres = cuantosCaracteres(texto);
console.log("El texto: " + texto +".Tiene " + cantidadCaracteres + " caracteres");
  
//5-Escribe un programa que recorra los números del 1 al 20. Para cada número, muestra en la consola "Fizz" si es divisible entre 3, "Buzz" si es divisible entre 5 y "FizzBuzz" si es divisible entre ambos. Si no es divisible por ninguno, muestra el número.

for (let numero = 1; numero <= 20; numero++) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numero % 3 === 0) {
    console.log("Fizz");
  } else if (numero % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numero);
  }
  }  

//6- Escribe un programa que calcule la suma de todos los números del 1 al 100 y muestre el resultado en la consola.

let sumaDeNumeros = 0;
  for (let numero = 1; numero <= 100; numero++) {
  sumaDeNumeros += numero;
}
console.log(sumaDeNumeros);

//7-Escribe un programa que recorra un array de números y muestre cada elemento en la consola

let array = [1, 2, 3, 4];
  for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//8- Crea una función que tome un array de palabras como parámetro y devuelva la cantidad total de caracteres en todas las palabras.

function contarCaracteres(arrayPalabras) {
  let totalCaracteres = 0;
    for (let i = 0; i < arrayPalabras.length; i++) {
    totalCaracteres += arrayPalabras[i].length;
    }
  return totalCaracteres;
  }
const palabras = ["hola", "chau"];
const caracteres = contarCaracteres(palabras);
console.log(caracteres);
  
//9- Escribe un programa que encuentre el elemento más grande en un array de números y lo muestre en la consola. => Esto lo puedo trabajar con el método Math.max (leer al respecto)

const arrayNumeros = [1, 2, 3, 4];
const maximo = Math.max(...arrayNumeros);
console.log("El elemento más grande es:", maximo);

//10-Dado un array de números crea una función que y devuelva un nuevo array con solo los números pares.

let arrayNum = [1, 2, 3, 4, 5, 6];
const numerosParesArray = numerosPares(arrayNum);
console.log(numerosParesArray);

function numerosPares(array) {
  const numerosPares = [];
    for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i]);
    }
    }
  return numerosPares;
}