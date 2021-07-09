//variables globales

let letra = document.getElementById("letra");
let numero = document.getElementById("numero");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");

const fnA1 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "" ) {
        numero.innerHTML="1";
    } else if (numero.innerHTML === "1" ){
        alert("El número 1 ya se encuentra asignado.");
    }    
    else {
        if (letra.innerHTML === "") {
            letra.innerHTML = "A";            
        } 
        else if(letra.innerHTML === "A" || letra.innerHTML === "AB" || letra.innerHTML === "ABC" 
            || letra.innerHTML === "ABCD" || letra.innerHTML === "ABCDE" 
            || letra.innerHTML === "ABCDEF" || letra.innerHTML === "ABCDEFG"|| letra.innerHTML === "ABCDEFGH"
            || letra.innerHTML === "ABCDEFGHI" || letra.innerHTML === "ABCDEFGHIJ") {
            ("La letra A ya se encuentra asignada.");
        }           
    }    
};

const fnB2 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "1") {
        numero.innerHTML +="2";
    } else if (numero.innerHTML === "12" ){
        alert("El número 2 ya se encuentra asignado.");
    } else {
        if (letra.innerHTML === "A") {
            letra.innerHTML += "B";
        } else if(letra.innerHTML === "AB" || letra.innerHTML === "ABC" || letra.innerHTML === "ABCD" || letra.innerHTML === "ABCDE" 
                || letra.innerHTML === "ABCDEF" || letra.innerHTML === "ABCDEFG"|| letra.innerHTML === "ABCDEFGH"
                || letra.innerHTML === "ABCDEFGHI" || letra.innerHTML === "ABCDEFGHIJ") {
            alert("La letra B ya se encuentra asignada.");
        }        
    }
};
  

const fnC3 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "12") {
        numero.innerHTML +="3";
    } else if (numero.innerHTML === "123" ){
        alert("El número 3 ya se encuentra asignado.");
    } else {
        if (letra.innerHTML === "" || letra.innerHTML === "A") {
            alert("La letra C se puede ingresar únicamente cuando haya escrito AB.");
        } else if (letra.innerHTML === "AB") {
            letra.innerHTML += "C";
        }
        else if(letra.innerHTML === "ABC" || letra.innerHTML === "ABCD" || letra.innerHTML === "ABCDE" 
                || letra.innerHTML === "ABCDEF" || letra.innerHTML === "ABCDEFG"|| letra.innerHTML === "ABCDEFGH"
                || letra.innerHTML === "ABCDEFGHI" || letra.innerHTML === "ABCDEFGHIJ") {
            alert("La letra C ya se encuentra asignada.");
        }
        
    }
};

const fnD4 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "123") {
        numero.innerHTML +="4";
    } else if (numero.innerHTML === "1234" ){
        alert("El número 4 ya se encuentra asignado.");
    } else {
        if(letra.innerHTML === "ABCD"  || letra.innerHTML === "ABCDE"  || letra.innerHTML === "ABCDEF" 
        || letra.innerHTML === "ABCDEFG" || letra.innerHTML === "ABCDEFGH" || letra.innerHTML === "ABCDEFGHI" 
        || letra.innerHTML === "ABCDEFGHIJ") {
             alert("La letra D ya se encuentra asignada.");
        }          
        else if (letra.innerHTML === "" || letra.innerHTML !== "ABC") {
            alert("La letra D se puede ingresar únicamente cuando haya escrito ABC.");
        } else if (letra.innerHTML === "ABC") {
            letra.innerHTML += "D";
        }
 
        
    }
};

const fnE5 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "1234") {
        numero.innerHTML +="5";
    } else if (numero.innerHTML === "12345" ){
        alert("El número 5 ya se encuentra asignado.");
    } else {
        if( letra.innerHTML === "ABCDE"  || letra.innerHTML === "ABCDEF" 
        || letra.innerHTML === "ABCDEFG" || letra.innerHTML === "ABCDEFGH" 
        || letra.innerHTML === "ABCDEFGHI"  || letra.innerHTML === "ABCDEFGHIJ") {
             alert("La letra E ya se encuentra asignada.");
        }          
        else if (letra.innerHTML === "" || letra.innerHTML !== "ABCD") {
            alert("La letra E se puede ingresar únicamente cuando haya escrito ABCD.");
        } else if (letra.innerHTML === "ABCD") {
            letra.innerHTML += "E";
        }
       
    }
};

const fnF6 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "12345") {
        numero.innerHTML +="6";
    } else if (numero.innerHTML === "123456" ){
        alert("El número 6 ya se encuentra asignado.");
    } else {
        if( letra.innerHTML === "ABCDEF" 
        || letra.innerHTML === "ABCDEFG" || letra.innerHTML === "ABCDEFGH" 
        || letra.innerHTML === "ABCDEFGHI"  || letra.innerHTML === "ABCDEFGHIJ") {
             alert("La letra F ya se encuentra asignada.");
        }          
        else if (letra.innerHTML === "" || letra.innerHTML !== "ABCDE") {
            alert("La letra F se puede ingresar únicamente cuando haya escrito ABCDE.");
        } else if (letra.innerHTML === "ABCDE") {
            letra.innerHTML += "F";
        }
    }
};

const fnG7 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "123456") {
        numero.innerHTML +="7";
    } else if (numero.innerHTML === "1234567" ){
        alert("El número 7 ya se encuentra asignado.");
    } else {
        if( letra.innerHTML === "ABCDEFG" || letra.innerHTML === "ABCDEFGH" 
            || letra.innerHTML === "ABCDEFGHI"  || letra.innerHTML === "ABCDEFGHIJ") {
            alert("La letra G ya se encuentra asignada.");
        }          
        else if (letra.innerHTML === "" || letra.innerHTML !== "ABCDEF") {
            alert("La letra G se puede ingresar únicamente cuando haya escrito ABCDEF.");
        } else if (letra.innerHTML === "ABCDEF") {
            letra.innerHTML += "G";
        }
    }
};

const fnK8 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "1234567") {
        numero.innerHTML +="8";
    } else if (numero.innerHTML === "12345678" ){
        alert("El número 8 ya se encuentra asignado.");
    } else {
        if( letra.innerHTML === "ABCDEFGH" || letra.innerHTML === "ABCDEFGHI"  
            || letra.innerHTML === "ABCDEFGHIJ") {
            alert("La letra H ya se encuentra asignada.");
        }          
        else if (letra.innerHTML === "" || letra.innerHTML !== "ABCDEFG") {
            alert("La letra H se puede ingresar únicamente cuando haya escrito ABCDEFG.");
        } else if (letra.innerHTML === "ABCDEFG") {
            letra.innerHTML += "H";
        }
    }
};

const fnI9 = () => {
    if (letra.innerHTML === "ABCDEFGHIJ" && numero.innerHTML === "12345678") {
        numero.innerHTML +="9";
    } else if (numero.innerHTML === "123456789" ){
        alert("El número 9 ya se encuentra asignado.");
    } else {
        if(  letra.innerHTML === "ABCDEFGHI" || letra.innerHTML === "ABCDEFGHIJ") {
            alert("La letra I ya se encuentra asignada.");
        }          
        else if (letra.innerHTML === "" || letra.innerHTML !== "ABCDEFGH") {
            alert("La letra I se puede ingresar únicamente cuando haya escrito ABCDEFGH.");
        } else if (letra.innerHTML === "ABCDEFGH") {
            letra.innerHTML += "I";
        }
    }
};

const fnJ0 = () => {

    if (letra.innerHTML === "ABCDEFGHI" && numero.innerHTML === "123456789") {
        numero.innerHTML +="0";
    } else if (numero.innerHTML === "1234567890" ){
        alert("El número 0 ya se encuentra asignado.");
    } else {
        if (letra.innerHTML === "ABCDEFGHIJ") {
            alert("La letra J ya se encuentra asignada.");
        }          
        else if ( letra.innerHTML !== "ABCDEFGHI") {
            alert("La letra J se puede ingresar únicamente cuando haya escrito ABCDEFGHI.");
        } else if (letra.innerHTML === "ABCDEFGHI") {
            letra.innerHTML += "J";
        }
    }
};

btnA1.onclick = function ()  {
    //ok
    fnA1();
}

btnB2.onclick = function ()  {
    //ok
    fnB2();
}

btnC3.onclick = function ()  {
    //ok
    fnC3();
}
btnD4.onclick = function ()  {
    //ok
    fnD4();
}
btnE5.onclick = function ()  {
    //OK
    fnE5();
}
btnF6.onclick = function ()  {
    //OK
    fnF6();
}
btnG7.onclick = function ()  {
    //ok
    fnG7();
}
btnH8.onclick = function ()  {
    //OK
    fnK8();
}
btnI9.onclick = function ()  {
    //OK
    fnI9();
}
btnJ0.onclick = function ()  {
    fnJ0();
}
