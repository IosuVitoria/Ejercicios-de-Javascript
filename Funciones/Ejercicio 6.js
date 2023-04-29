/*En el siguiente ejercicio vamos a practicar con el bucle do while para que el código se ejecute una y otra vez hasta que el usuario decida parar

Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente*/

document.write("<h1>CALIFICANDO NOTAS DE ALUMNOS<h1>");

let continuar = "Sí";
document.write("<h2>Listado de notas de alumnos</h2>");

while(continuar==="Sí"||continuar==="sí"||continuar==="Si"||continuar==="si"){
    let nota = parseFloat(prompt("Introduce la nota del alumno: "));
    function cualificar(nota){
        if(nota<=3){
            document.write("Muy deficiente.Un "+nota+" es una pésima nota.");
        }
        else if(nota>=3.01 && nota<=4.99){
            document.write("Insuficiente. Tienes que estudiar un poco más.");
        }
        else if(nota>=5.00 && nota<=5.99){
            document.write("Suficiente. Has aprobado, ojo que por poco...");
        }
        else if(nota>=6.00 && nota<=6.99){
            document.write("Bien. Has estudiado pero te recomiendo que sigas trabajando en ello.");
        }
        else if(nota>=7.00 && nota<=8.99){
            document.write("Notable. Muy buen trabajo, dominas buena parte de lo enseñado.");
        }
        else if(nota>=9.00 && nota<=10.00){
            document.write("Sobresaliente. Dominas a la perfección. No cedas en tu esfuerzo!");
        }
    }
    cualificar(nota);
    continuar = prompt("Deseas continuar evaluando? ");
}