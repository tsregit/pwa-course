self.addEventListener('fetch', event => {
    /*if(event.request.url.includes('style.css')) {
        let resp = new Response(`
        body {
            background-color: red !important;
            color: pink;
        }`, {
            headers: {
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(resp);
    }*/

    /*if(event.request.url.includes('main.jpg')) {
    let resp = fetch('./img/main-patas-arriba.jpg');
    event.respondWith(resp);
    }
     */

    const resp = fetch(event.request)
        .then(resp => resp.ok ? resp :fetch('img/main.jpg'))
    event.respondWith(resp);
});
