// operaciones - suma de dos números

const sumar = () => {
    let num1 =parseFloat(prompt("Ingrese número 1: "));
    let num2 = parseFloat(prompt("Ingrese número 2: "));
    let resultado = num1 + num2;
    alert(resultado);
    console.log(resultado);
  };
  
const restar = () => {
    let num1 =parseFloat(prompt("Ingrese número 1: "));
    let num2 = parseFloat(prompt("Ingrese número 2: "));
    let resultado = num1 - num2;
    alert(resultado);
    console.log(resultado);
};
  
const multiplicar = () => {
    let num1 =parseFloat(prompt("Ingrese número 1: "));
    let num2 = parseFloat(prompt("Ingrese número 2: "));
    let resultado = num1 * num2;
    alert(resultado);
    console.log(resultado);
};    

const dividir = () => {
    let num1 =parseFloat(prompt("Ingrese número 1: "));
    let num2 = parseFloat(prompt("Ingrese número 2: "));
    if (num2 === 0) {
        alert("No es posible dividir por 0.");
    } else {
        let resultado = num1/num2;
        alert(resultado);
        console.log(resultado);       
    }
};    