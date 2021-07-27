let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth()+1;
let day = fecha.getDate();
let hora = fecha.getHours()+':'+fecha.getMinutes();
console.log(fecha)
console.log(anio+'-'+mes+'-'+day+' '+hora);

let formatoFecha =  `El días es ${day} del mes ${mes} del año ${anio} y la hora actual es ${hora}`
console.log(formatoFecha)
