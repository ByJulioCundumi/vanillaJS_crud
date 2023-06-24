console.log("Aplicacion iniciada");
const $tbody = document.querySelector("#tbody");
const frag = document.createDocumentFragment();
//
async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();
    data.forEach((e) => {
      const tr = document.createElement("tr");
      tr.classList.add("data__tr");
      tr.innerHTML = `
        <td class="data__td">${e.id}</td>
        <td class="data__td">${e.firstname}</td>
        <td class="data__td">${e.lastname}</td>
        <td class="data__td">${e.email}</td>
        <td class="data__td">${e.pass}</td>
        <td class="data__td">
          <a class="data__edit-btn" href="update.html?id=${e.id}">Editar</a>
          <a class="data__delete-btn delete-btn" href="#" id="${e.id}">Eliminar</a>
        </td>
        `;
      frag.append(tr);
    });
    $tbody.append(frag);
    //
    deleteUser()
  } catch (error) {
    console.log(error);
  }
}
getData();
//
function deleteUser(){
  window.addEventListener("click", async (e) => {
    if (e.target.tagName === "A") {
      const id = e.target.getAttribute("id");
      //
      const res = await fetch("http://localhost:3000/api/users/" + id, {method: "delete"})
      window.location.href = "../views/data.html";
      alert("Se elimino un usuario exitosamente :)")
    }
  });
}