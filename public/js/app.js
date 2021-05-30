const baseUrl = "https://virtualcurrency-app.herokuapp.com/";

let newSaldo;

let getUser = () => {
    fetch(baseUrl + "/users/user", {
        headers: {
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
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(result => {
        return result.json();
    }).then(json => {
        newSaldo = json.data;
        console.log(json);
        let tokens = document.getElementById('tokens');
        tokens.innerHTML = json.data;
        updateSaldo(newSaldo);
    }).catch(err => {
        console.log(err);
    });
}

getUser();
getSaldo();