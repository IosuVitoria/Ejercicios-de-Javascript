//Realiza una primera calculadora que pida los números por pantalla.

let a = parseInt(prompt("Introduce el primer número: "));
document.write("<h2>El primer número introducido por el usuario ha sido: "+a+"<h2>");
let b = parseInt(prompt("Introduce el segundo número: "));
document.write("<h2>El segundo número introducido por el usuario ha sido: "+b+"<h2>");

let operacion = prompt("Introduce +, -, * o / en función de si se desea suma, resta, multiplicación o división: ");

if(operacion === "+"){
        function suma(a,b){
        return a+b;
    }
    document.write("<h3>El resultado de la operación es: "+suma(a,b)+"<h3>");
}   

else if (operacion === "-"){
        function resta(a,b){
        return a-b;
    }
    document.write("<h3>El resultado de la operación es: "+resta(a,b)+"<h3>");
}

else if (operacion === "*"){
        function multiplicación(a,b){
        return a*b;
    }
    document.write("<h3>El resultado de la operación es: "+multiplicación(a,b)+"<h3>");
    
}

else if (operacion === "/"){
        function división(a,b){
        return a/b;
    }
    document.write("<h3>El resultado de la operación es: "+división(a,b)+"<h3>");
}
