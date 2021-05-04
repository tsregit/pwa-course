

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then( registroInstaladoSw => {
           /* setTimeout(() => {
                registroInstaladoSw.sync.register('posteo-gatitos');
                console.log('Se enviaron fotos de gatos');
            }, 3000)*/
            Notification.requestPermission().then(result => {
                console.log(result);
                registroInstaladoSw.showNotification('Hola Mundo');
            });
        });
}

navigator.bluetooth.getAvailability().then(available => {
    if (available)
        console.log("This device supports Bluetooth!");
    else
        console.log("Doh! Bluetooth is not supported");
});

if (window.SyncManager) {

}

/*fetch('https://reqres.in/api/users')
    .then(resp => resp.text())
    .then(console.log);

 */
