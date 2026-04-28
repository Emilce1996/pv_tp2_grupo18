import * as funciones from "./funciones19.js";

const boton = document.getElementById("miBoton");
const parrafo = document.getElementById("miParrafo");
const texto =
  "Si el texto ha cambiado después de hacer clic, este ejercicio ejecuto los modulos de JavaScript correctamente!";

boton.addEventListener("click", () => {
  funciones.cambiarTexto(parrafo, texto);
  funciones.mostrarResultadoPorConsola("Se cambió el párrafo a: " + texto);
});
