fetch("https://virtualcurrency-app.herokuapp.com/transfers")
.then((response) => {
    return response.json();
})
.then((data) => {
    let transferlist = data.data;
    transferlist.forEach(element => {
        let myElm = document.createElement("div");
        myElm.classList.add("form__content");
            let myPDate = document.createElement("p");
            myPDate.classList.add("form__content-sub");
            myPDate.innerHTML = "30/05/2021";
            myElm.appendChild(myPDate);

            let myPRecepient = document.createElement("p");
            myPRecepient.classList.add("form__content-sub");
            myPRecepient.innerHTML = element["recipient"];
            myElm.appendChild(myPRecepient);

            let myPReason = document.createElement("p");
            myPReason.classList.add("form__content-sub");
            myPReason.innerHTML = element["reason"];
            myElm.appendChild(myPReason);

            let myPMessage = document.createElement("p");
            myPMessage.classList.add("form__content-sub");
            myPMessage.innerHTML = element["message"];
            myElm.appendChild(myPMessage);

            let myPAmount = document.createElement("p");
            myPAmount.classList.add("form__content-sub");
            myPAmount.innerHTML = element["amount"];
            myElm.appendChild(myPAmount);
        document.querySelector("#form").appendChild(myElm);
    });
});