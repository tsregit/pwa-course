fetch('no-encontrado.html')
    .then(resp => resp.text())
    .then(html => {
        let body = document.querySelector("body");
        body.innerHTML = html;
    })
    .then(console.log)
    .catch(console.log);
