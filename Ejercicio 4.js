//EJERCICIO 4
//Hacer un programa para ingresar dos números y que luego emita por pantalla el mayor de ellos o un cartel aclaratorio “Son iguales” en el caso de que así sea.

let num = parseInt(prompt("Introduce el primer número: "));
let num2 = parseInt(prompt("Introduce el segundo número: "));

if (num>num2){
    console.log(typeof(num))
    console.log(typeof(num2))
    alert("El primer número es mayor que el segundo.")
    
}
else if (num2>num){
    console.log(typeof(num))
    console.log(typeof(num2))
    alert("El segundo número es mayor que el primero.")
   
}
else{
    alert("Los dos numeros son iguales.")
}