let datos = document.getElementById("datos");
let nombre = document.getElementById("nombre");

if(localStorage.getItem('nombre')){
  nombre.innerHTML = "Nombre: "+localStorage.getItem('nombre');
}else{
  nombre.innerHTML = "Nombre: 'Sin datos'";
}

const  ingresarDatos=()=>{
  let nombreUser = prompt("Ingrese su nombre: ");
  if (nombreUser == null){
    nombre.innerHTML = "Nombre: "+localStorage.getItem('nombre');
  }
  else{
    nombre.innerHTML = "Nombre: "+nombreUser;
    localStorage.setItem('nombre', nombreUser);
  }
}
datos.onclick = function(){
  ingresarDatos();
}