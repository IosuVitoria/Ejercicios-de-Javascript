// Estamos en un juicio y esperamos la sentencia del Juez para ello tendremos que declarar una variable culpable con el valor 'si', 'no' u 'otro'- y otra variable sentencia asignando un string vacío
let culpable = "si";
let sentencia;
// Si culpable es = 'si' -> sentencia será 'a la carcel'
// Si culpable es = 'no' -> sentencia será 'vas a casa'
// En caso de no ser 'si' o 'no' -> sentencia será 'realizar trabajos para la comunidad'

if (culpable === "si"){
  sentencia = "a la carcel"
  console.log("El condenado tiene la siguiente sentencia: "+sentencia);
}
if (culpable === "no"){
  sentencia = "vas a casa"
  console.log("El condenado tiene la siguiente sentencia: "+sentencia);
}
if (culpable === "otro"){
  sentencia = "realizar trabajos para la comunidad"
  console.log("El condenado tiene la siguiente sentencia: "+sentencia);
}

