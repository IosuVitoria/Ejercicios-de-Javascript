//Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.

let cha = prompt("Introduce la letra que deseas repetir");
let num = parseInt(prompt("Introduce el número de veces que quieres repetir la letra"));
let mensaje = "";

for(let i=0; i<=num;i++ ){
    mensaje = mensaje+cha;
}


alert(mensaje);
