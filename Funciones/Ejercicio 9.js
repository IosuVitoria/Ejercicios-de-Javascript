/*Mensaje repetido. 1 ovejita, 2 ovejitas...
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var prueba = 0;

function countSheep (num){
    let murmur = "";
    for(let i = 1 ; i<=num;i++){
      murmur+=i+" sheep..."
      console.log(murmur);
    }
    return murmur
}

let num = 5;

countSheep(num);