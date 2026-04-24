const horas = 2;
const minutos = 30;

const convertirASegundos = (h, m) => (h * 3600) + (m * 60);

console.log(`${horas} horas y ${minutos} minutos`);

console.log(`Valor en segundos ${convertirASegundos(horas, minutos)}`);
