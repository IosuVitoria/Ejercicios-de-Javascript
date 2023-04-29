//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario.

let num = parseInt(prompt("Introduce el número de escalones de la pirámide: "));
let message="";

for(let i = num; i>=0; i--){
    for(let j = i; j>0; j--){
        message = message + num + " ";
    }
    message = message + "\n";
    num--
    
}

alert(message);