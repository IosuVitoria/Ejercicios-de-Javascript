// Ejercicio 6
//Hacer un programa para ingresar un número y mostrar por pantalla un cartel aclaratorio si el mismo es PAR o IMPAR.

let num = parseInt(prompt("Introduce número a analizar: "));

if (num%2===0){
    document.write(num," es PAR.")
}

else{
    document.write(num," es IMPAR.")
}