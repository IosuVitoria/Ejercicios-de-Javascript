//Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4.

let num=0;
let num2=0;
let mensaje="";

for(let i =0; i<=1;i++){
    for(let j=0; j<=4;j++){
        mensaje = i+":"+j;
        console.log(mensaje);
    }
}