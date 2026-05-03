const nombres = ["franco", "Emilce", "Alexander", "Kevin", "Lourdes", "sofia"];

console.log("Nombres del array:");

for (let nombre of nombres) {
    console.log(nombre);
}

let nombreMasLargo = nombres[0];

for (let nombre of nombres) {
    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
}

console.log(`El nombre más largo es: ${nombreMasLargo}`);