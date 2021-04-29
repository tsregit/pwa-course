fetch('https://reqres.in/api/users?page=2')
    .then(resp => {
        resp.clone().json().then(
            usuario => console.log(usuario)
        )
        resp.json().then(usuario => console.log(usuario));
    }).catch(error => {
        console.log(error);
});
