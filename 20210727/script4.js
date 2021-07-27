let ejFor = document.getElementById("ejFor");
let animales = ["Perro","Gato","Serpiente", "Lobo","Escorpión","Conejo"];
animales[6]="Dragon";
animales.push("Ardilla");
animales.unshift("Tigre"); //agrega valor al principio
animales.splice(5,1); //borra valor y posición al principio


for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}

