const edades = [18, 22, 25, 30, 35, 40, 45, 50];

const mostrarEdades = (arr) => {
  console.log(`Edades: ${arr.join(", ")}`);
};

const calcularPromedio = (arr) => {
  const suma = arr.reduce((acum, edad) => acum + edad, 0);
  return suma / arr.length;
};

mostrarEdades(edades);
console.log(`El promedio de las edades es: ${calcularPromedio(edades).toFixed(2)}`);
