/*4. Realizar un programa para una concesionaria de autos: Si el auto a la venta es un ford fiesta, el descuento es de un 5%. Si el coche a la venta es un ford focus, el descuento es del 10%. El usuario introduce el artículo (o su código) y el programa muestra el descuento correspondiente por pantalla.*/

function descuento() {
    let articulo, precio;
  
    articulo = prompt("Ingrese el artículo: ");

    if (articulo.toLowerCase() === "ford fiesta") {

      descuento = precio * 0.05;
    } else if (articulo.toLowerCase() === "ford focus") {

      descuento = precio * 0.1;
    } else {

      descuento = 0;
    }
  
    alert("El descuento es de " + descuento + " $");
  }
  
  descuento();