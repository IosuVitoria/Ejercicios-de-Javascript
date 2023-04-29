//Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

let c = prompt("Introduce un caracter a multiplicar: ");
let num = parseInt(prompt("Introduce el número de veces que quieres multiplicarlo: "))

function generar_caracteres(n,caracter){
    let mensaje = "";
    for(let i=0; i< n;i++){
        mensaje+=caracter;
    }  
    return mensaje;
}

let mensaje2 = generar_caracteres(num,c);

console.log(mensaje2);


