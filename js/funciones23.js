export const obtenerValor = (selector) => {
  const elemento = document.querySelector(selector);
  return elemento.value;
};

export const mostrarTexto = (selectorDestino, texto) => {
  const destino = document.querySelector(selectorDestino);
  destino.textContent = texto;
};

export const cambiarColorSiExcede = (selectorDestino, texto) => {
  const destino = document.querySelector(selectorDestino);
  if (texto.length > 20) {
    destino.style.backgroundColor = "#c6caf7";
  } else {
    destino.style.backgroundColor = "rgba(155, 89, 182, 0.1)";
  }
};
