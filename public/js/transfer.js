function searchUser(searchUser) {
  fetch("https://virtualcurrency-app.herokuapp.com/users/search", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: searchUser,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      let userSearch = document.querySelector(".overview__form-field");

      json.users.forEach((user) => {
        console.log(user["user"]);
        let userList = `<div class=".overview__form-list"><ul><li>${user["user"]}</li></ul>`;

        userSearch.insertAdjacentHTML("afterend", userList);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

let submitTransfer = document
  .getElementById("submitTransfer")
  .addEventListener("click", (e) => {
    let recipient = document.getElementById("recipient").value;
    let reason = document.getElementById("reason").value;
    let message = document.getElementById("message").value;
    let amount = document.getElementById("amount").value;

    fetch("https://virtualcurrency-app.herokuapp.com/transfers/create", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        recipient: recipient,
        reason: reason,
        message: message,
        amount: amount,
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
});
