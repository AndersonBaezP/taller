/*2. Ingresar dos números por teclado, realizar un menú de opciones para: Sumar -- Restar -- Multiplicar y Dividir.*/
function operaciones() {
    let numero1, numero2;
    numero1 = Number(prompt("Ingrese el primer número: "));
    numero2 = Number(prompt("Ingrese el segundo número: "));
  
    let opcion = prompt("¿Qué operación desea realizar?\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir");
  
    switch (opcion) {
      case "1":
        let resultado = numero1 + numero2;
        alert("El resultado es " + resultado);
        break;
      case "2":
        resultado = numero1 - numero2;
        alert("El resultado es " + resultado);
        break;
      case "3":
        resultado = numero1 * numero2;
        alert("El resultado es " + resultado);
        break;
      case "4":
        resultado = numero1 / numero2;
        alert("El resultado es " + resultado);
        break;
      default:
        alert("Opción no válida");
        break;
    }
  }
  
  operaciones();