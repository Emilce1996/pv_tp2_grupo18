import { MostrarDatos } from "./funciones20.js";

const boton = document.getElementById("btnEnviar");

boton.addEventListener("click", () => {

    const Nombre = document.querySelector("#nombre").value;
    const Apellido = document.querySelector("#apellido").value;
    const LU = document.querySelector("#lu").value;

    MostrarDatos(Nombre, Apellido, LU);
});