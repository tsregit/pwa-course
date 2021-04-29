// 'https://reqres.in/api/users?page=2'
fetch('https://reqres.in/api/users?page=2').then(resp => resp.json()).then(respObj => {
    console.log(respObj.page);
})
