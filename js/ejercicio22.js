import { SalidaTexto } from "./funciones22.js";

const ingreso = document.querySelector("#CampoTexto");
const salida = document.querySelector("#resultado");

ingreso.addEventListener("input", () => {
    SalidaTexto(ingreso, salida);
});