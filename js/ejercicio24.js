import * as funciones from "./funciones24.js";

const radios = document.querySelectorAll("input[name='lenguaje']");
const recuadro = "#resultado";

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const valor = funciones.obtenerSeleccion("input[name='lenguaje']");
    funciones.mostrarResultado(recuadro, valor);
    funciones.mostrarConsola(valor);
  });
});
