//En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

//Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.

let num = parseInt(prompt("Introduce el número: "));
document.write("Ahora aparecerán por consola todos los números hasta 0 que al divirlos entre 3 den como resto un dos.");

for(let i=0; i<=num; i++){
    if(i%3===2){
        console.log(i);
    }
}