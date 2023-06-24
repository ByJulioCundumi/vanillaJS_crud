console.log("update");
//
const urlParams = document.location.search;
const params = new URLSearchParams(urlParams);
const id = params.get("id");
//
async function getUser() {
  try {
    const res = await fetch("http://localhost:3000/api/users/" + id);
    const data = await res.json();
    //
    const firstname = (document.querySelector("#firstname").value =
      data.firstname);
    const lastname = (document.querySelector("#lastname").value =
      data.lastname);
    const email = (document.querySelector("#email").value = data.email);
    const pass = (document.querySelector("#pass").value = data.pass);
  } catch (error) {
    console.log(error);
  }
}
getUser();
//
const $form = document
  .querySelector(".update__form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;
    //
    const data = {
      firstname,
      lastname,
      email,
      pass,
    };
    updateUser(data)
  });

async function updateUser(data) {
  try {
    const res = await fetch("http://localhost:3000/api/users/" + id, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    window.location.href = "../views/data.html";
  } catch (error) {
    console.log(error)
  }
}
