import * as funciones from "./funciones21.js";

const selectPais = document.getElementById("pais");
const selectCapital = document.getElementById("capital");

window.addEventListener("DOMContentLoaded", () => {
  funciones.mostrarResultadoEnPagina(null, null);
});

selectPais.addEventListener("change", () => {
  const resultado = funciones.sincronizarCapital(selectPais, selectCapital);
  if (resultado) {
    funciones.mostrarResultadoPorConsola(resultado.pais, resultado.capital);
    funciones.mostrarResultadoEnPagina(resultado.pais, resultado.capital);
  } else {
    funciones.mostrarResultadoEnPagina(null, null);
  }
});
