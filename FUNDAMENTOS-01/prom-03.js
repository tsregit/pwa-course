function sumarLento(numero) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(numero + 1);
        }, 800);
    });
}

const sumarRapido = numero => new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve(numero + 1);
    }, 300);
});

Promise.all([sumarLento(5), sumarRapido(3)]).then(resp => {
    console.log('Valor 1', resp[0]);
    console.log('Valor 2', resp[1]);
})
