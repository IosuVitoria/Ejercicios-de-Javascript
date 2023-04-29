//Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').

let numero = prompt("Introduce un número");
let listaNumeros = "";

for (let i = 2; i < numero; i += 2) {
  listaNumeros += i + "\n";
}

alert("Lista de números pares:\n" + listaNumeros);