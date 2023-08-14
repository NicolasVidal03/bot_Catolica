import './App';

const nombre = document.querySelector("#input-nombre");
const edad = document.querySelector("#input-edad");
const form = document.querySelector("#form-saludo");
const saludo = document.querySelector("#saludo");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let x = "";
    if(edad.value >= 30){
        x = "Sr. ";
    }
    saludo.innerHTML = "<p>Hola " + x + nombre.value + ", como estás?</p>";

});