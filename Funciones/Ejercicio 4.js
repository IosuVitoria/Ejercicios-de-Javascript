//Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo.


function sumaArreglo(array){
    let suma =0;
    for(let i = 0; i < array.length; i++){
        suma+=array[i];
    }
    return suma;
    
}

let array = [1,2,3,4];

console.log(sumaArreglo(array));