export const mapa = {
  Argentina: "Buenos Aires",
  Brasil: "Brasília",
  Chile: "Santiago de Chile",
  Bolivia: "La Paz",
  Perú: "Lima",
  Paraguay: "Asunción",
};

export const sincronizarCapital = (selectPais, selectCapital) => {
  const pais = selectPais.value;
  const capital = mapa[pais];
  if (capital) {
    selectCapital.value = capital;
    return { pais, capital };
  }
  return null;
};

export const mostrarResultadoPorConsola = (pais, capital) => {
  console.log(`País seleccionado: ${pais}, Capital: ${capital}`);
};

export const mostrarResultadoEnPagina = (pais, capital) => {
  const recuadro = document.getElementById("resultado");
  if (pais && capital) {
    recuadro.innerHTML = `País seleccionado: ${pais}<br>Capital: ${capital}`;
  } else {
    recuadro.textContent = "¡Debe seleccionar un país!";
  }
};
