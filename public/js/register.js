let submitRegister = document.getElementById("submitRegister").addEventListener('click', e => {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;

    if (username != "" && (password != "" && password == repeatPassword) && email.endsWith("@student.thomasmore.be")) {
        fetch('https://virtualcurrency-app.herokuapp.com/users/register', {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        }).then(result => {
            return result.json();
        }).then(json => {
            if(json.status === "success"){
                let token = json.data.token;
                localStorage.setItem('token', token);
                window.location.href = "index.html";
            }
        }).catch(err => {
            console.log(err);
        })

        e.preventDefault();
    } else {
        if(!email.endsWith("@student.thomasmore.be")) {
            let emailError = document.querySelector('.label--email');
            emailError.innerHTML = "Please enter a Thomas More student email";
            emailError.style.color = "red";
        }
        if (password != repeatPassword){
            let passwordRepeatError = document.querySelector('.label--password');
            passwordRepeatError.innerHTML = "Passwords do not match";
            passwordRepeatError.style.color = "red";
        }
        if(username == "" || email == "" || password == ""){
            let error = document.querySelector('.error--register');
            error.style.visibility = "visible";
        }
    }
})