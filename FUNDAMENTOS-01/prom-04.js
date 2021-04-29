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

// Retorna la primera que responde. Si una promesa da error cancela las otras promesas
Promise.race([sumarLento(5), sumarRapido(3)]).then(respuesta => {
    console.log('respuesta', respuesta);
})
