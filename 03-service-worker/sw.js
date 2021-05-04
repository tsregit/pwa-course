
// Ciclo de vida del SW

self.addEventListener('install', event => {
    // Este SW se dispara ante cualquier cambio por mas pequeño que sea dentro del SW
    // Todo el codigo JS se ejecuta pero el SW queda en espera no se actualiza cuando ya hay una version previa
    // Descargamos assets
    // Manejamos cache
    // esas cosas y otras mas se pueden hacer aca
    // Para que un serviceWorker se actualice se debe cerrar todas las pestañas que controla el SW y abrir la app en una nueva pestaña
    console.log('Instalando las cosas de SW');
    // Para actualizar altiro es SW, sin la necesidad que el cliente cierre todas las tabs.....no es muy recomendable ya que se puede perder la informacion que actual del usuario
    self.skipWaiting();

    const instalacion = new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones Terminadas....');
            resolve();
        }, 1000)
    }));
    // Espera que se terminen las instalaciones
    event.waitUntil(instalacion);
});

self.addEventListener('activate', event => {
    // Borrar cache viejo
    console.log('Activo y listo para modificar la APP 2');
});

self.addEventListener('fetch', event => {
    // Manejo de Peticiones HTTP
    // Aplicar estrategias del cache
    // console.log('SW: ' +  event.request.url);

    /*if (event.request.url.includes('https://reqres.in/')) {
        const resp = new Response(`{ok: false, message: 'JAJAJJA'}`);
        event.respondWith(resp);
    }*/
});

self.addEventListener('sync', event => {
    // Cuando recuperamos la conexion a internet
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);
});

self.addEventListener('push', event => {
    //Manejar PUSH notificaciones
    console.log('SW: Notificacion recibida');
});

