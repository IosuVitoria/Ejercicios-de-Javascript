//EJERCICIO 10
//Hacer un programa que solicite el ingreso de dos números y luego calcular:
//a. La resta si el primero es mayor que el segundo.
//b. La suma si son iguales.
//c. El producto si el primero es menor.
//Se deberá emitir un cartel por pantalla con el resultado correspondiente.

let num = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

if (num>num2){
    let resta = num - num2;
    document.write("El resultado de la resta es: ",resta)
}
else if (num === num2){
    let suma = num + num2;
    document.write("El resultado de la suma es: ",suma)
}
else if (num<num2){
    let mult = num * num2;
    document.write("El resultado de la multiplicación es: ",mult)
}