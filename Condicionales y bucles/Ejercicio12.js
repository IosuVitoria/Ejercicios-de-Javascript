//Realiza un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

let message= " Programa que dice qué números son múltiplos de 4 y de 9; del 1 al 500. "
alert(message);
const num=500;
let cont=0;

for(let i=1; i<=500; i++){
    console.log(i);
    cont++;
    if (i%4===0){
        document.write(i + "  es múltiplo de 4.");
    }
    else if (i%9===0){
        document.write(i + " es múltiplo de 9.");
    } 
    else if (cont%5===0){
        document.write(i+ " ");
        document.write("<br></br>");  
        document.write("----------------");
    }
    else{
        document.write(i);
    }
    document.write("<br></br>");  
}
