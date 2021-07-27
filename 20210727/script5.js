let ejFor = document.getElementById("ejFor");
let animales = ["Perro","Gato","Serpiente", "Lobo","Escorpión","Conejo"];

for(let animal in animales){
  console.log(animal+" "+animales[animal]);
}

animales.forEach(animal => {
  console.log(animal);
});