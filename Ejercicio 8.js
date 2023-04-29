//EJERCICIO 8
//Hacer un programa para ingresar cuatro números distintos y luego mostrar por pantalla el mayor de ellos.

let num = parseInt(prompt("Introduce el primer número: "));
let num2 = parseInt(prompt("Introduce el segundo número: "));
let num3 = parseInt(prompt("Introduce el tercer número: "));
let num4 = parseInt(prompt("Introduce el cuarto número: "));

if (num<num2 && num<num3 && num<num4){
    document.write("El primer número es el menor de todos.")
}
else if (num2<num && num2<num3 && num2<num4){
    document.write("El segundo número es el menor de todos.")
}
else if (num3<num2 && num3<num && num3<num4){
    document.write("El tercero número es el menor de todos.")
}
else if (num4<num2 && num4<num3 && num4<num){
    document.write("El cuarto número es el menor de todos.")
}
document.write("Los 4 números que se han ingresado para la comparación eran: ",num," ",num2," ",num3," ",num4)