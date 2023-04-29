//EJERCICIO 7
//Una casa de video juegos otorga un descuento dependiendo del importe de la compra realizada según los siguientes valores:

// - Si el importe es menor a ARS 1000, no hay descuento.

// - Si el importe es ARS 1000 o más pero menor a ARS 5000, aplica un descuento del 10%.

// - Si el importe es ARS 5000 o más, aplica un descuento del 18%.

// Hacer un programa para ingresar un importe de venta y luego muestre por pantalla el importe final con el descuento que corresponda.

let ars = parseInt(prompt("Introduce el precio del artículo: "))

if (ars<1000){
    document.write("No hay descuentos, pagarás: ",ars," euros.")
}
else if (ars>=1000 && ars<5000){
    ars= ars*0.90
    document.write("Tienes un 10% de descuento, pagarás: ",ars," euros.")
}
else if (ars>=5000){
    ars= ars*0.78
    document.write("Tienes un 18% de descuento, pagarás: ",ars," euros.")
}