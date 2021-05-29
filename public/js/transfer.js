function searchUser(searchUser) {
    console.log(searchUser);
    fetch('http://localhost:3000/users/search', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "username": searchUser
        })
    })
        .then(result => {
            return result.json();
        }).then(json => {
            console.log(json);
        }).catch(err => {
            console.log(err);
        })
}

let submitTransfer = document.getElementById("submitTransfer").addEventListener('click', e => {
    let recipient = document.getElementById("recipient").value;
    let reason = document.getElementById("reason").value;
    let message = document.getElementById("message").value;
    let amount = document.getElementById("amount").value;

    fetch('http://localhost:3000/transfers/create', {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "recipient": recipient,
            "reason": reason,
            "message": message,
            "amount": amount
        })
    }).then(result => {
        return result.json();
    }).then(json => {
        console.log(json);
    }).catch(err => {
        console.log(err);
    })

    e.preventDefault();
})