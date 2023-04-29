/*Realiza un programa que pueda suistituir caracteres en un string

*/

let mens="Hola";
let long = mens.length;
for(let i=0; i<=long; i++){
    if(mens[i]==="l"){
        console.log(mens[i])
        mens[i]="L";
    }
}
console.log(mens)
