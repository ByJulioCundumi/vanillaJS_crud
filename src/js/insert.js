console.log("Insert");
//
const $form = document.querySelector(".form");
$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#pass").value;

  const data = {
    firstname,
    lastname,
    email,
    pass
  }
  post(data)
});

async function post(data){
    try {
        const res = await fetch("http://localhost:3000/api/users", {
            method: "post",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        const server = await res.json();
        console.log(server)
    } catch (error) {
        console.log(error)
    }
}