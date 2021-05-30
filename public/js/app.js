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
    }).catch(err => {
        console.log(err);
    });
}

getUser();