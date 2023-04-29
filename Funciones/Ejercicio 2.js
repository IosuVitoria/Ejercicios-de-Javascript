//Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.

function esVocal(a){
    if(a === "a" || a === "e" ||a === "i" ||a === "o" ||a === "u"){
        return true;
    }
    else{
        return false;
    }
}

let letra = "b";
let letra2 = "a";

console.log(esVocal(letra));
console.log(esVocal(letra2));
