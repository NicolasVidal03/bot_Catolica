import './App';

const nombre = document.querySelector("#input-nombre");
const edad = document.querySelector("#input-edad");
const form = document.querySelector("#form-saludo");
const saludo = document.querySelector("#saludo");
const genero = document.querySelector("#select-genero");
const btns = document.querySelectorAll("#lang");
var hora = new Date();
const idioma = {
    eng : {
        alert_data : "Not enough data!",
        select_gender : "Select your gender: ",
        morning : "Good morning ",
        afternoon : "Good afternoon ",
        evening : "Good evening ",
        howareyou : ". How are you?",
        enter_name : "Enter your name",
        enter_age : "Enter your age",
        btn_val : "Next",
        first : "Hello",
        woman : "Ms. ",
        man : "Mr. ",
        young_woman : "Miss ",
        young_man : ""
    },
    es : {
        alert_data : "Faltan Datos!",
        select_gender : "Seleccione su genero: ",
        morning : "Buenos días ",
        afternoon : "Buenas tardes ",
        evening : "Buenas noches ",
        howareyou : ", como está?",
        enter_name : "Ingresa tu nombre",
        enter_age : "Ingresa tu edad",
        btn_val : "Siguiente",
        first : "Hola",
        woman : "Sra. ",
        man : "Sr. ",
        young_woman : "Srta. ",
        young_man : "joven "
    }
}
var language = idioma.es;


btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        cambiarIdioma(e.target.value);
    });
});

function cambiarIdioma(lang){
    if(lang == 'es'){
        language = idioma.es;
    }
    else{
        language = idioma.eng;
    }
    document.querySelector("#span-genero").innerHTML = language.select_gender;
    document.querySelector("#boton-siguiente").value = language.btn_val;
    nombre.placeholder = language.enter_name;
    edad.placeholder = language.enter_age
    saludo.innerHTML = language.first;
}


form.addEventListener("submit", (event) =>  {
    event.preventDefault();

    let saludar = new String;
    const now = hora.toLocaleTimeString();

    if(nombre.value=="" || edad.value ==""){
        alert(language.alert_data);
        return 0;
    }
    if(now >= "12:00:00" && now < "19:00:00")
    {
        saludar = language.afternoon;
    }
    else{
        if(now >= "6:00:00"){
            saludar = language.morning;
        }
        else{
            saludar = language.evening;
        }
    }

    if(edad.value >= 30){
        if(genero.value == "F"){
            saludar = saludar + language.woman;
        }
        else{
            saludar = saludar + language.man;
        }
    }
    else{
        if(genero.value == "F"){
            saludar = saludar + language.young_woman;
        }
        else{
            saludar = saludar + language.young_man;
        }
    }

    saludo.innerHTML = "<p>" + saludar + nombre.value + language.howareyou + "</p>";
});