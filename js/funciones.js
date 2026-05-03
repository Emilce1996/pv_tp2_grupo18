export const mostrarSeleccion = (valor, elemento) => {
    elemento.textContent = `Seleccionaste: ${valor}`;
    console.log(`Lenguaje seleccionado: ${valor}`);
};