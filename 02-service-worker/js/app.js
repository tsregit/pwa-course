// Forma de revisar si podemos utilizar el service worker
/*if ('serviceWorker' in navigator) {
    console.log('Podemos usarlos');
}*/

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}
