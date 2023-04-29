// Crea un programa que pida un número por pantalla y que sume todos los números restantes de él hasta 0.

let total = 0;
let ini = parseInt(prompt("Introduce el número del que quieras la suma hasta 0: "));
for(let i=0;ini>=0; i++){
    ini--;
    total+=i;
}
alert(total);