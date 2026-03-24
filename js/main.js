async function cargarProductos(){

const res = await fetch("data/productos.json")
const productos = await res.json()

const lista = document.getElementById("lista-productos")

productos.forEach(p=>{

const card = document.createElement("div")

card.classList.add("producto")

card.innerHTML=`

<img src="${p.imagen}">

<h3>${p.nombre}</h3>

<p>$${p.precio}</p>

<button>Comprar</button>

`

lista.appendChild(card)

})

}

cargarProductos()