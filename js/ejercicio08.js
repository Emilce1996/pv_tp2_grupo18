const notas = [4, 7, 9, 5, 6, 10, 3, 8, 2, 7];


notas.forEach((nota, i) => {
    console.log(`Nota ${i + 1}: ${nota}`);
});


const aprobadas = notas.filter(nota => nota >= 6);
console.log(`Notas aprobadas: ${aprobadas.join(", ")}`);


const desaprobadas = notas.filter(nota => nota < 6);
console.log(`Notas desaprobadas: ${desaprobadas.join(", ")}`);


const promedio = notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
console.log(`Promedio general: ${promedio}`);


console.log(`Cantidad de aprobadas: ${aprobadas.length}`);
