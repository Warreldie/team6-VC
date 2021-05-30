const baseUrl = "http://localhost:3000";

let newSaldo;

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
        newSaldo = json.data;
        let tokens = document.getElementById('tokens');
        tokens.innerHTML = json.data;
        updateSaldo(newSaldo);
    }).catch(err => {
        console.log(err);
    });
}

function updateSaldo(newSaldo){
    let saldo = newSaldo;

    fetch(baseUrl + "/transfers/updateSaldo", {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            "newSaldo": saldo
        })
    }).then(result => {
        return result.json();
    }).then(json => {
        console.log(json)
    }).catch(err => {
        console.log(err);
    });
}

getUser();
getSaldo();