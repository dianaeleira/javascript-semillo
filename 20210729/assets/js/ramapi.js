//URL Api  las constantes las vamos a crear en mayúscula
const API = "https://rickandmortyapi.com/api/character";
//callback

const getData = (API) => {
  return fetch(API)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json.results),
        paginacion(json.info),
        console.log(json.results, json.info);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const llenarDatos = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col mt-5"';
    html += '<div class="card" style="width: 18rem;">';
    html += `<img src="${pj.image}" class="card-img-top" alt="${pj.image}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text">Status: ${pj.status}</p>`;
    html += `<p class="card-text">Species: ${pj.species}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

const paginacion = (data) => {
  let prevDisabled = "";
  let nextDisabled = "";
 
  let html = `<li class="page-item ${data.prev == null ? prevDisabled = "disabled":prevDisabled = ""}"><a class="page-link" onclick="getData('${data.prev}')" style="cursor: pointer;">Previus</a></li><li class="page-item ${data.next == null ? nextDisabled = "disabled":nextDisabled = ""}"><a class="page-link" onclick="getData('${data.next}')" style="cursor: pointer;">Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

getData(API);
