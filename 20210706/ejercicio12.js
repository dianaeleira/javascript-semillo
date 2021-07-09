// condicionales - sw
let nombre =prompt("Ingresa tu nombre");
let color =prompt("Ingresa tu color favorito");

switch (color) {
    case "18":
        alert("Tienes acceso al catalogo de peliculas violentas");
        break;

    default:
        alert("Debes ser mayor de edad para acceder al catalogo");
        break;
}