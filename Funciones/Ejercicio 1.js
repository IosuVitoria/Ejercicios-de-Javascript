//Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales». Sería deseable que el programa pidiese los tres números.

let n1= parseInt(prompt("Introduce el primer número: "))
let n2= parseInt(prompt("Introduce el segundo número: "))
let n3= parseInt(prompt("Introduce el tercer número: "))

function numeroMayor(n1,n2,n3){
    if(n1>n2 && n1>n3){
        document.write("El número mayor es: "+n1);
    }
    else if(n2>n1 && n2>n3){
        document.write("El número mayor es: "+n2);
    }
    else if(n3>n2 && n3>n1){
        document.write("El número mayor es: "+n3);
    }
    else if(n1===n2 && n1===n3){
        document.write("Todos los números son iguales.")
    }
}

numeroMayor(n1,n2,n3);