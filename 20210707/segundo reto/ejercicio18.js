//variables globales
/*
Teclado virtual 
Que funcione solo :
letras 
numeros
espacio
enter para salto de línea
*/

let shiftCase = "0";

let pantalla = document.getElementById("pantalla");
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn0 = document.getElementById('btn0');
let btnQ = document.getElementById('btnQ');
let btnW = document.getElementById('btnW');
let btnE = document.getElementById('btnE');
let btnR = document.getElementById('btnR');
let btnT = document.getElementById('btnT');
let btnY = document.getElementById('btnY');
let btnU = document.getElementById('btnU');
let btnI = document.getElementById('btnI');
let btnO = document.getElementById('btnO');
let btnP = document.getElementById('btnP');
let btnA = document.getElementById('btnA');
let btnS = document.getElementById('btnS');
let btnD = document.getElementById('btnD');
let btnG = document.getElementById('btnG');
let btnH = document.getElementById('btnH');
let btnF = document.getElementById('btnF');
let btnJ = document.getElementById('btnJ');
let btnK = document.getElementById('btnK');
let btnL = document.getElementById('btnL');
let btnn = document.getElementById('btnn');
let btnShift = document.getElementById('btnShift');
let btnZ = document.getElementById('btnZ');
let btnX = document.getElementById('btnX');
let btnC = document.getElementById('btnC');
let btnV = document.getElementById('btnV');
let btnB = document.getElementById('btnB');
let btnN = document.getElementById('btnN');
let btnM = document.getElementById('btnM');
let btnEnter = document.getElementById('btnEnter');
let btnSpace = document.getElementById('btnSpace');




const printText = (object) => {
    console.log(shiftCase);
    let value = object.value;
    if(shiftCase === "0"){
        value = value.toLowerCase();
    }
    else if(shiftCase === "1"){
        value = value.toUpperCase();
    }
    pantalla.innerHTML+=value;
};

btn1.onclick = function ()  {
    printText(btn1);
}

btn2.onclick = function ()  {
    printText(btn2);
}

btn3.onclick = function ()  {
    printText(btn3);
}

btn4.onclick = function ()  {
    printText(btn4);
}

btn5.onclick = function ()  {
    printText(btn5);
}

btn6.onclick = function ()  {
    printText(btn6);
}

btn7.onclick = function ()  {
    printText(btn7);
}

btn8.onclick = function ()  {
    printText(btn8);
}

btn9.onclick = function ()  {
    printText(btn9);
}

btn0.onclick = function ()  {
    printText(btn0);
}

btnQ.onclick = function ()  {
    printText(btnQ);
}

btnW.onclick = function ()  {
    printText(btnW);
}

btnE.onclick = function ()  {
    printText(btnE);
}

btnR.onclick = function ()  {
    printText(btnR);
}

btnT.onclick = function ()  {
    printText(btnT);
}

btnY.onclick = function ()  {
    printText(btnY);
}

btnU.onclick = function ()  {
    printText(btnU);
}

btnI.onclick = function ()  {
    printText(btnI);
}

btnO.onclick = function ()  {
    printText(btnO);
}

btnP.onclick = function ()  {
    printText(btnP);
}

btnA.onclick = function ()  {
    printText(btnA);
}

btnS.onclick = function ()  {
    printText(btnS);
}

btnD.onclick = function ()  {
    printText(btnD);
}

btnG.onclick = function ()  {
    printText(btnG);
}

btnH.onclick = function ()  {
    printText(btnH);
}

btnF.onclick = function ()  {
    printText(btnF);
}

btnJ.onclick = function ()  {
    printText(btnJ);
}

btnK.onclick = function ()  {
    printText(btnK);
}

btnL.onclick = function ()  {
    printText(btnL);
}

btnn.onclick = function ()  {
    printText(btnn);
}

btnZ.onclick = function ()  {
    printText(btnZ);
}

btnX.onclick = function ()  {
    printText(btnX);
}

btnC.onclick = function ()  {
    printText(btnC);
}

btnV.onclick = function ()  {
    printText(btnV);
}

btnB.onclick = function ()  {
    printText(btnB);
}

btnN.onclick = function ()  {
    printText(btnN);
}

btnM.onclick = function ()  {
    printText(btnM);
}

btnSpace.onclick = function ()  {
    printText(btnSpace);
}

btnEnter.onclick = function ()  {
    printText(btnEnter);
}

btnEnter.onclick = function ()  {
    printText(btnEnter);
}

btnShift.onclick = function ()  {
    if(shiftCase === "0"){
        shiftCase = "1";
    }
    else if(shiftCase === "1"){
        shiftCase = "0";
    }
    
}