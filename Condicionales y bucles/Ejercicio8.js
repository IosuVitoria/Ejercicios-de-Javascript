//Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

//Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.

let ast = parseInt(prompt("Introduce el número de líneas que tendrá el arbol de asteriscos: "));

for(let i = 0; i<=ast;i++){
    let linea ="";
    for(let j = 0; j<=i;j++){
        linea+="*";
    }
    console.log(linea);
}
