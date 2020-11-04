let inputUsername = document.getElementById("username")
let inputPassword = document.getElementById("password")
let btnSubmit = document.querySelector("form button")
let listUser = document.getElementById("list-user")

// btnSubmit.addEventListener("click", submit)

btnSubmit.onclick = submit

function submit () {
  let username = inputUsername.value
  let password = inputPassword.value

  let user = `<p>${username}</p>
  <p>${password}</p>`

  listUser.innerHTML += user

  return false
}