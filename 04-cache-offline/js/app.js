

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

    var self = this;
    var nav = navigator;
    if (nav.bluetooth && nav.bluetooth.requestDevice) {
        nav.bluetooth.requestDevice({ filters: [{ services: [self.service] }] })
            .then(device => {
                console.log("requestDevice", device);
                /* ... */
                console.log("device name", device.name);
                return device.gatt.connect();
            })
            .then(server => {
                console.log("server", server);
                // Getting Battery Service...
                return server.getPrimaryService(self.service);
            })
            .then(service => {
                console.log("service", service);
                // Getting Characteristic...
                return service.getCharacteristic(self.characteristic);
            }).then(characteristic => {
            console.log("characteristic", characteristic);
            // Reading Battery Level...
            return characteristic.readValue();
        })
            .then(value => {
                console.log("value", value);
                let decoder = new TextDecoder('utf-8');
                let name = decoder.decode(value)
                this.outputvalue = name;
                this.lastupdate = new Date().toJSON();
                console.log('value is ' + name);
            })
            .catch(error => { console.log("webbluetooth error", error); });
    }

/*if (window.caches) {
    // Si soporta serviceWorker soporta cache, esta validacion es solo de ejemplo

    // Abre un espacio con ese nombre o lo crea
    caches.open('prueba-1');
    caches.open('prueba-2');

    caches.has('prueba-3').then(console.log);

   // caches.delete('prueba-1').then(console.log);

    caches.open('cache-v1.1').then(cache => {
        // cache.add('/pages/offline.html');
        cache.addAll([
           '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]).then(() => {
            // cache.delete('css/style.css');
            cache.put('index.html', new Response('Hola Mundo'));
        });
    /*cache.match('/index.html').then(resp => {
            resp.text().then(console.log);
    });
    });
    caches.keys().then(console.log);
}
*/
