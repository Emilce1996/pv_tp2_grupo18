const radi = 4;
const vol = (radi) => (4 / 3) * Math.PI * Math.pow(radi, 3);

console.log(`El volumen de la esfera es: ${vol(radi).toFixed(2)}`);