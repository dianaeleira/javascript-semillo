let op = document.getElementById("op");
let btn_inv = document.getElementById("btn_inv");
let btn_cuadrado = document.getElementById("btn_cuadrado");
let btn_raiz = document.getElementById("btn_raiz");
let btn_clear = document.getElementById("btn_clear");
let btn_7 = document.getElementById("btn_7");
let btn_8 = document.getElementById("btn_8");
let btn_9 = document.getElementById("btn_9");
let btn_div = document.getElementById("btn_div");
let btn_4 = document.getElementById("btn_4");
let btn_5 = document.getElementById("btn_5");
let btn_6 = document.getElementById("btn_6");
let btn_mul = document.getElementById("btn_mul");
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2"); 
let btn_3 = document.getElementById("btn_3");
let btn_sum = document.getElementById("btn_sum");
let btn_pun = document.getElementById("btn_pun");
let btn_0 = document.getElementById("btn_0");
let btn_ig = document.getElementById("btn_ig"); 
let btn_rest = document.getElementById("btn_rest");
let tResult = document.getElementById("tResult");
let operacion = document.getElementById("operacion");

const printScreen = (object) =>{
  object.innerHTML = object.innerHTML.trim();
  if(operacion.innerHTML !== ""){
    tResult.value = "";
  }
  tResult.value +=object.innerHTML;
}

const printResult = (object) =>{
  object.innerHTML = object.innerHTML.trim();
  operacion.innerHTML +=tResult.value+object.innerHTML;
}

btn_7.onclick = function (){
  printScreen(btn_7);
}
btn_8.onclick = function (){
  printScreen(btn_8);
}
btn_9.onclick = function (){
  printScreen(btn_9);
}
btn_4.onclick = function (){
  printScreen(btn_4);
}
btn_5.onclick = function (){
  printScreen(btn_5);
}
btn_6.onclick = function (){
  printScreen(btn_6);
}
btn_1.onclick = function (){
  printScreen(btn_1);
}
btn_2.onclick = function (){
  printScreen(btn_2);
}
btn_3.onclick = function (){
  printScreen(btn_3);
}
btn_0.onclick = function (){
  printScreen(btn_0);
}
btn_sum.onclick = function (){
  printResult(btn_sum);
}





/*

const operacion = () => {
  let op = prompt(
    "Escribe: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División "
  );

  if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("Favor ingresar una opción válida");
  } else {
    let num1 = parseFloat(prompt("Ingrese primer número: "));
    let num2 = parseFloat(prompt("Ingrese primer segundo: "));
    let resultado = 0;
    if (op === "1") {
      resultado = num1 + num2;
    }
    if (op === "2") {
      resultado = num1 - num2;
    }
    if (op === "3") {
      resultado = num1 * num2;
    }
    if (op === "4") {
      if (num2 === 0) {
        return alert("No se puede dividir por 0.");
      } else {
        resultado = num1 / num2;
      }
    }
    alert("El resultado es: " + resultado);
  }
};

op.onclick = function (){
    operacion();
}*/