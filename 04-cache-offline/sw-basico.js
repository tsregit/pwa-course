self.addEventListener('fetch', event => {
    /*const offlineResponse = new Response(`
        Bienvenido a mi pagina web
        Disculpa pero necesitas internet
    `);*/
    /*const offlineResponse = new Response(`
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Mi PWA</title>
                </head>
                <body>
                    <h1>Offline Mode</h1>
                </body>
            </html>
    `,
        {
            headers: {
                'Content-Type': 'text/html'
            }
        });*/
    const offlineResponse = fetch('pages/offline.html');
    const resp = fetch(event.request).catch(error => {
        return offlineResponse;
    });
   event.respondWith(resp);
});
