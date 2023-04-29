// Crea una variable soloA que empiece valiendo 0.
let soloA = 0;

// Crea una variable soloL que empiece valiendo 0.
let soloL = 0;

// Utilizando la propiedad .length de los strings, podemos obtener un número con la longitud total de una cadena de texto.
// Si usamos mensaje.length obtendremos el número 51, que es el número de letras y espacios dentro del mensaje.
var mensaje = 'Una langosta azul es un animal difícil de encontrar';


// Ahora crea un bucle for que empiece en 0 y llegue hasta el final de la longitud de la cadena de texto contenida en la variable mensaje.
// Vamos a combinar bucles y condicionales añadiendo dentro del bucle las condiciones:
// => Si la letra para esa posición es igual a la letra 'a', sumamos +1 a la variable soloA
// => Si la letra para esa posición es igual a la letra 'l', sumamos +1 a la variable soloL

for(let i=0; i<= mensaje.length;i++){
  console.log(mensaje[i]);
    if (mensaje[i]==="a"){
    soloA+=1;
  }
  else if (mensaje[i]==="l"){
    soloL+=1;
  }
}

console.log(soloA);
console.log(soloL);