var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users?page=2', true);
request.send(null);
request.onreadystatechange = function (state) {
    if(request.readyState === 4) {
        var resp = request.response;
        var respObt = JSON.parse(resp);
        console.log(respObt.page);
    }
}
