/*3. Programa que lee tres notas de un alumno, calcula el promedio e indica si está suspendido o aprobado. (<=6 "Suspendido" -- >=7 "Aprobado").*/
function notas() {
    
    let nota1, nota2, nota3;
  
    
    nota1 = prompt("Ingrese la nota 1: ");
    nota2 = prompt("Ingrese la nota 2: ");
    nota3 = prompt("Ingrese la nota 3: ");
  
    
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
  
    
    let promedio = (nota1 + nota2 + nota3) / 3;
  
    
    if (promedio <= 6) {
      alert("Suspendido");
    } else {
      alert("Aprobado");
    }
  }
  
  notas();