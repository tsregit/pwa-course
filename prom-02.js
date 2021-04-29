function sumarUno(numero)
{
    var promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero > 8) {
                reject('EL numero es muy alto');
            }
            resolve(numero + 1);
        }, 800);
    });
    return promesa;
}

sumarUno(5)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno).then(nuevoNumero2 => {
    console.log(nuevoNumero2);
}).catch(error => {
    console.log(error);
})
