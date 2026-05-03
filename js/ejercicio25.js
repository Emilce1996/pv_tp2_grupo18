import * as funciones from "./funciones25.js";

const boton = document.getElementById("cambiarColor");

boton.addEventListener("click", () => {
  const color = funciones.obtenerColorAleatorio();
  funciones.cambiarColorFondo(color);
  funciones.mostrarConsola(color);
});
