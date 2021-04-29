// POST
// 'https://reqres.in/api/users'
let usuario = {
    "name": "morpheus",
    "job": "leader"
};

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(resp => resp.json())
    .then(respObj => console.log(respObj))
    .catch(err => console.log(err));
