import './App';

const nombre = document.querySelector("#input-nombre");
const form = document.querySelector("#form-saludo");
const saludo = document.querySelector("#saludo");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    saludo.innerHTML = "<p>Hola " + nombre.value + ", como estás?</p>";
    
});