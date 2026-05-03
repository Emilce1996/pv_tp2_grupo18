export const obtenerSeleccion = (selector) => {
  const seleccionado = document.querySelector(`${selector}:checked`);
  return seleccionado ? seleccionado.value : null;
};

export const mostrarResultado = (selectorDestino, valor) => {
  const destino = document.querySelector(selectorDestino);
  destino.textContent = valor
    ? `Lenguaje seleccionado: ${valor}`
    : "Debe seleccionar una opción";
};

export const mostrarConsola = (valor) => {
  if (valor) {
    console.log(`Lenguaje seleccionado: ${valor}`);
  }
};
