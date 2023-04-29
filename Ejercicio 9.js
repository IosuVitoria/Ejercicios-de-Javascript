//EJERCICIO 9
//Hacer un programa para ingresar cinco números distintos y luego mostrar por pantalla el mayor y el menor de ellos.

let num = parseInt(prompt("Ingresa el primer número de la comparación: "));
let num2 = parseInt(prompt("Ingresa el segundo número de la comparación: "));
let num3 = parseInt(prompt("Ingresa el tercer numero de la comparación: "));
let num4 = parseInt(prompt("Ingresa el cuarto número de la comparación: "));
let num5 = parseInt(prompt("Ingresa el quinto número de la comparación: "));

document.write("Los siguientes números se van a comparar: ",num," ",num2," ",num3," ",num4," y ",num5,"\n")
document.write("MAYOR NÚMERO \n")

if (num>num2 && num>num3 && num>num4 && num>num5){
    document.write("El primer número es el mayor.\n")
}
else if (num2>num && num2>num3 && num2>num4 && num2>num5){
    document.write("El segundo número es el mayor.\n")
}
else if (num3>num && num3>num2 && num3>num4 && num3>num5){
    document.write("El tercer número es el mayor.\n")
}
else if (num4>num2 && num4>num3 && num4>num && num4>num5){
    document.write("El cuarto número es el mayor.\n")
}
else if (num5>num2 && num5>num3 && num5>num4 && num5>num){
    document.write("El quinto número es el mayor.\n")
}

document.write("MENOR NÚMERO \n")

if (num<num2 && num<num3 && num<num4 && num<num5){
    document.write("El primer número es el menor.\n")
}
else if (num2<num && num2<num3 && num2<num4 && num2<num5){
    document.write("El segundo número es el menor.\n")
}
else if (num3<num && num3<num2 && num3<num4 && num3<num5){
    document.write("El tercer número es el menor.\n")
}
else if (num4<num2 && num4<num3 && num4<num && num4<num5){
    document.write("El cuarto número es el menor.\n")
}
else if (num5<num2 && num5<num3 && num5<num4 && num5<num){
    document.write("El quinto número es el menor.\n")
}



