const Impares = () => {

    let num = 1;
    let cont = 0;

    console.log("Los primeros 10 números impares son:");

    while (cont < 10) {
        if (num % 2 !== 0) {
            console.log(num);
            cont++;
        }
        num++;
    }
};
Impares();