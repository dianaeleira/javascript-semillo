let deptosColombia = document.getElementById("deptosColombia");
let ciudad = document.getElementById("ciudad");
let img00 = document.getElementById("img00");
let linkImage= document.getElementById("linkImage");

const printScreen = (object) =>{
  ciudad.innerHTML = "";
  if(object.value !== "--"){
    ciudad.innerHTML = object.value;
    img00.src = "./assets/img/"+object.value+".jpg";
    linkImage.href="https://www.google.com/search?q="+object.value;
  }
  else{
    ciudad.innerHTML = "Ciudad";
    img00.src = "./assets/img/colombia.jpg";
    linkImage.href="https://www.google.com/search?q=colombia";
  }
}


deptosColombia.onchange = function (){
  printScreen(deptosColombia);
}

/*

const urlImage = () =>{
  https://colombia.travel/es
}*/