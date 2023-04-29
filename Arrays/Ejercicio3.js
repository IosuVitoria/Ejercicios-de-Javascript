
const num = 9;
let repe;
let piramide = "";

for(let i=1; i<=num ;i++ ){
  for(repe=1; repe<=i;repe++){
    piramide+=i;
  }
  piramide+="\n";
}

console.log(piramide);