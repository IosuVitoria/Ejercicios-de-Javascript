//Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4.

//const control = 4;
//let sum=0;
//for(let i=0; i<control;i++){
    //console.log(i);
    //let num = parseInt(prompt("Introduce un número: "));
    //sum+=num;
//}
//let media = sum/4;
//alert("La media de los 4 números introducidos será: "+media)

//PRUEBA DE BUCLE WHILE SIN VER PREVIAMENTE TEORÍA

const control = 4;
let sum=0;
let conW=1;

while(conW<=control){
    let num = parseInt(prompt("Introduce un número: "));
    sum+=num;
    conW++;
}
let media = sum/4;
alert("La media de los 4 números introducidos será: "+media)