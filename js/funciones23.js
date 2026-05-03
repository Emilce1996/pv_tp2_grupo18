// Función y evento en el mismo archivo
const actualizarTexto = (input, output) => {
  const texto = input.value.trim();
  output.textContent = texto;

  if (texto.length === 0) {
    output.style.backgroundColor = "transparent";
  } else if (texto.length <= 20) {
    output.style.backgroundColor = "#e8f5e9"; 
  } else {
    output.style.backgroundColor = "#ffebee"; 
  }
};

const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");

entrada.addEventListener("input", () => {
  actualizarTexto(entrada, salida);
});

