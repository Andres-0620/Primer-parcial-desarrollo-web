const form = document.getElementById("loginForm")

form.addEventListener("submit", function(e){

e.preventDefault()

let usuario = document.getElementById("user").value
let clave = document.getElementById("pass").value

if(usuario === "admin" && clave === "1234"){

window.location.href = "./index.html"

}else{

document.getElementById("mensaje").innerText = "Usuario o contraseña incorrectos"

}

})