const baseUrl = "http://localhost:3000";

let getUser = () => {
    fetch(baseUrl + "/users/user", {
        'headers': {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(result => {
        return result.json();
    }).then(json => {
        let username = document.getElementById('username');
        username.innerHTML = json.user["username"];

        let tokens = document.getElementById('tokens');
        tokens.innerHTML = json.user["tokens"];
    }).catch(err => {
        console.log(err);
        window.location.href = "login.html";
    });
}

let getSaldo = () => {
    fetch(baseUrl + "/transfers/saldo", {
        'headers': {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(result => {
        return result.json();
    }).then(json => {
    }).catch(err => {
        console.log(err);
    });
}

getUser();
getSaldo();