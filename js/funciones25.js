export const colores = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#e0bbff"];

export const obtenerColorAleatorio = () => {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
};

export const cambiarColorFondo = (color) => {
  document.body.style.backgroundColor = color;
};

export const mostrarConsola = (color) => {
  console.log(`El color de fondo cambió a: ${color}`);
};
