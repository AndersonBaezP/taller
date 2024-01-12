/*Ingresar dos números por teclado,
 mostrar en consola la suma y multiplicación de los números. */
 
 
 let numero1 = parseFloat(prompt("Ingrese el primer número:"));
 let numero2 = parseFloat(prompt("Ingrese el segundo número:"));


let calcularSumaMultiplicacion=(numero1,numero2)=>{
 let suma= numero1+numero2;
 let multiplicación = numero1*numero2;
 let resultado=[suma,multiplicación]

 return resultado;
}
console.log (calcularSumaMultiplicacion(numero1,numero2))