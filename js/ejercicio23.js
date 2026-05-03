import * as funciones from "./funciones23.js";

const inputTexto = document.getElementById("entrada");
const recuadro = "#resultado";

inputTexto.addEventListener("input", () => {
  const texto = funciones.obtenerValor("#entrada");
  funciones.mostrarTexto(recuadro, texto);
  funciones.cambiarColorSiExcede(recuadro, texto);
});
