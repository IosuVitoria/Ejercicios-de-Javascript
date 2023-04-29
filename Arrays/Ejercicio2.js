// Crea una variable llamada texto con el valor 'marvel mola!'
let texto = 'marvel mola!'

// Crea una variable llamada 'textoTransform', la cual recorriendo la variable texto vaya añadiendo carácteres a la variable textoTransform hasta conseguir el valor '-m-a-r-v-e-l -m-o-l-a-!'

let textoTransform = '-';
for (let i = 0; i < texto.length; i++){
    if(i===texto.length-1){
        textoTransform += texto[i];
    }
    else{
        textoTransform += texto[i] + '-';
    }
}   


console.log(texto);
console.log(textoTransform);
