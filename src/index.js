import './App';

const nombre = document.querySelector("#input-nombre");
const edad = document.querySelector("#input-edad");
const form = document.querySelector("#form-saludo");
const saludo = document.querySelector("#saludo");
const genero = document.querySelector("#select-genero");
var hora = new Date();


form.addEventListener("submit", (event) =>  {
    event.preventDefault();

    if(nombre.value=="" || edad.value ==""){
        alert("Faltan Datos!!");
        return 0;
    }

    let saludar = new String;
    const now = hora.toLocaleTimeString();

    if(now >= "12:00:00" && now < "19:00:00")
    {
        saludar = "Buenas tardes ";
    }
    else{
        if(now >= "6:00:00"){
            saludar = "Buenos días ";
        }
        else{
            saludar = "Buenas noches ";
        }
    }

    if(edad.value >= 30){
        if(genero.value == "F"){
            saludar = saludar + "Sra. ";
        }
        else{
            saludar = saludar + "Sr. ";
        }
    }
    else{
        if(genero.value == "F"){
            saludar = saludar + "Srta. ";
        }
        else{
            saludar = saludar + "joven ";
        }
    }

    saludo.innerHTML = "<p>" + saludar + nombre.value + ", como está?</p>";
});