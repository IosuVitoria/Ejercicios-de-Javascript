/*Manejo de arrays, invertir signos de todo un array*/

function invert(arg) {
    let arrayInv =[];
    if(arg===[]){
      return [];
    }
    else{
      for(let i=0; i<arg.length;i++){
        arrayInv.push(arg[i]*-1);
      }
    }
    return arrayInv;
  }
let arr = [1,2,3,4,5];

invert(arr);