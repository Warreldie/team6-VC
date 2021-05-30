fetch("http://localhost:3000/transfers")
.then((response) => {
    return response.json();
})
.then((data) => {
    let transferlist = data.data;
    transferlist.forEach(element => {
        let myElm = document.createElement("div");
        myElm.classList.add("overview__heading__transfer");
            let myPDate = document.createElement("p");
            myPDate.classList.add("overview__heading__transfer-date");
            myPDate.innerHTML = "30/05/2021";
            myElm.appendChild(myPDate);

            let myPRecepient = document.createElement("p");
            myPRecepient.classList.add("overview__heading__transfer-date");
            myPRecepient.innerHTML = element["recipient"];
            myElm.appendChild(myPRecepient);

            let myPAmount = document.createElement("p");
            myPAmount.classList.add("overview__heading__transfer-date");
            myPAmount.innerHTML = element["amount"];
            myElm.appendChild(myPAmount);
        document.querySelector(".overview__heading").appendChild(myElm);
    });
});