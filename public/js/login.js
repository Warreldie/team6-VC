let submitLogin = document.getElementById("submitLogin").addEventListener('click', e => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != "" && password != "") {
        fetch('http://localhost:3000/users/login', {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(result => {
            return result.json();
        }).then(json => {
            console.log(json);
            if (json.status === "success") {
                let token = json.data.token;
                localStorage.setItem('token', token);
                window.location.href = "index.html";
            }
        }).catch(err => {
            console.log(err);
        })

        e.preventDefault();
    }
})