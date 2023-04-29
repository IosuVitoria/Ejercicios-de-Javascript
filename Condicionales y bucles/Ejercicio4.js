//Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

//Recuerda que el salto de linea es el carácter "\n"

let num = parseInt(prompt("Introduce el número del que deseas la tabla de multiplicar: "));
let cont = 0;
let mensaje = "";

for (let i =0; cont <=10; i++){
    let result = i * num;
    mensaje = mensaje + num + " x " + i + " = "+ result + "\n";
    cont++
}

alert(mensaje);