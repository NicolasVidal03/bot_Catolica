import './App';

const nombre = document.querySelector("#input-nombre");
const edad = document.querySelector("#input-edad");
const form = document.querySelector("#form-saludo");
const saludo = document.querySelector("#saludo");
const genero = document.querySelector("#select-genero");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let x = "";

    if(edad.value >= 30){
        x = "Sr. ";
        if(genero.value == "F"){
            x = "Sra. ";
        }
    }
    else{
        x = "joven ";
        if(genero.value == "F"){
            x = "Srta. ";
        }
    }

    saludo.innerHTML = "<p>Hola " + x + nombre.value + ", como está?</p>";
});