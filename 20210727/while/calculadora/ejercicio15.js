// operaciones - suma de dos números
let btnCalculadora = document.getElementById("btnCalculadora");
let ejFor = document.getElementById("ejFor");
let op;
let divResultado = document.getElementById("divResultado");

btnCalculadora.onclick = function () {
    operaciones();
};

const operaciones = () =>{
    while(op != 1 && op != 2 && op != 3 && op != 4 && op != 5){
        op = prompt("Ingrese: \n 1. Suma. \n 2. Resta \n 3. Multiplicación \n 4. División \n 5. Salir"); 
    }
    if(op == 1){
        sumar();
    }
    else if(op == 2){
        restar();
    }
    else if (op == 3){
        multiplicar();
    }
    else if(op == 4){
        dividir();
    }
    else if(op == 5){
        finalizar();
    }    
}

const sumar = () => {
    let num1 =parseFloat(prompt("Ingrese número 1: "));
    let num2 = parseFloat(prompt("Ingrese número 2: "));
    let resultado = num1 + num2;
    divResultado.innerHTML = "Resultado: "+resultado;
    op = "";
  };
  
const restar = () => {
    let num1 =parseFloat(prompt("Ingrese número 1: "));
    let num2 = parseFloat(prompt("Ingrese número 2: "));
    let resultado = num1 - num2;
    divResultado.innerHTML = "Resultado: "+resultado;
    op = "";

};
  
const multiplicar = () => {
    let num1 =parseFloat(prompt("Ingrese número 1: "));
    let num2 = parseFloat(prompt("Ingrese número 2: "));
    let resultado = num1 * num2;
    divResultado.innerHTML = "Resultado: "+resultado;
    op = "";
};    

const dividir = () => {
    let num1 =parseFloat(prompt("Ingrese número 1: "));
    let num2 = parseFloat(prompt("Ingrese número 2: "));
    if (num2 === 0) {
        alert("No es posible dividir por 0.");
    } else {
        let resultado = num1/num2;
        divResultado.innerHTML = "Resultado: "+resultado;
    }
    op = "";
};    

const finalizar = () => {
    divResultado.innerHTML = "Resultado: Vuelve pronto!";
    op = "";
};   