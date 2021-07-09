//ejercicios de prueba

let saludo = prompt("Ingresa un saludo: ");
saludo = saludo.toLowerCase(); //toUpperCase()
if (saludo === "Hola" || saludo === "") {
  alert("Bien, gracias por saludar.");
} else {
  alert("Mal, saluda primero.");
}

// || cualquier opción que de true, entra al bloque de código.
// && Todas las opciones deben ser true, para poder ingresar.
// ingresar un pueblo o una ciudad y debe responder la app con el departamento.