// Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos


var num=[];
let check = parseInt(prompt("¿Cuántos números vas a querer meter?"));
let check1=check;

while(check>0){
    let num1 = parseInt(prompt("Introduce el  número: "));
    num.push(num1);
    check--;
}
let suma = 0;
for(let i=0; i<num.length;i++){
    suma+=num[i];
}
let media = suma/check1;
document.write("<h1>Cálculo de la media</h1>");
document.write("<h2>El resultado es:"+media+"<h2>");

num.sort();

mayor=num.pop();
menor=num[0];

document.write("<h1>Números mayor y menor</h1>");
document.write("<h2>El mayor número es: "+mayor+"</h2>");
document.write("<h2>El menor número es: "+menor+"</h2>");

num.push(mayor);
document.write("<h2>El array original de números era: "+num+"<h2>");