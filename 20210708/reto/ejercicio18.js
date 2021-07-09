//variables globales
let puntaje = document.getElementById('puntaje');
let puntos = 10;

let foto1 = document.getElementById('foto1');
let foto2 = document.getElementById('foto2');
let foto3 = document.getElementById('foto3');
let foto4 = document.getElementById('foto4');
let foto5 = document.getElementById('foto5');
let foto6 = document.getElementById('foto6');





const validaNombre = (nombre, nombreReal, object) => {
    object.classList.remove('rotar');
    object.classList.remove('ganar');
    if(nombre === nombreReal){
        alert("¡Felicidades! Ese es el nombre correcto.");
        object.classList.add('ganar');
    }
    else{
        object.classList.add('rotar');
        if(puntos > 0){
            puntos = puntos-1;
            alert("¡Ooops! Ese no es el nombre de tu amigo.");
        }
        else if(puntos === 0){
            alert("Lo siento... perdiste!!");
        }
        puntaje.innerHTML=puntos;
        nombreReal = nombreReal.toUpperCase();
    }
};

foto1.onclick = function ()  {
    let nombre =prompt("¡Adivina el nombre!");
    nombre = nombre.toLowerCase();
    let nombreReal = "camilo sanmiguel";
    validaNombre(nombre, nombreReal, foto1);
}

foto2.onclick = function ()  {
    let nombre =prompt("¡Adivina el nombre!");
    nombre = nombre.toLowerCase();
    let nombreReal = "diana triana";
    validaNombre(nombre, nombreReal,foto2);
}

foto3.onclick = function ()  {
    let nombre =prompt("¡Adivina el nombre!");
    nombre = nombre.toLowerCase();
    let nombreReal = "diego restrepo";
    validaNombre(nombre, nombreReal, foto3);
}

foto4.onclick = function ()  {
    let nombre =prompt("¡Adivina el nombre!");
    nombre = nombre.toLowerCase();
    let nombreReal = "jairo alzate";
    validaNombre(nombre, nombreReal,foto4);
}

foto5.onclick = function ()  {
    let nombre =prompt("¡Adivina el nombre!");
    nombre = nombre.toLowerCase();
    let nombreReal = "juan camilo gomez";
    validaNombre(nombre, nombreReal,foto5);
}

foto6.onclick = function ()  {
    let nombre =prompt("¡Adivina el nombre!");
    nombre = nombre.toLowerCase();
    let nombreReal = "sebastian tibaquira";
    validaNombre(nombre, nombreReal,foto6);
}

