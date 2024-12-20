/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const input = document.querySelector("#phone");
let iti = window.intlTelInput(input, {
    nationalMode:false,
    initialCountry: 'ar',
    autoPlaceholder: 'off',
    loadUtilsOnInit: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.1/build/js/utils.js",
});

document.querySelector('#paciente-nuevo').onclick = function(event) {
    document.querySelector('#NombreDelPaciente').className = "";
   
    
    event.preventDefault();
};

document.querySelector('#nombreOK').onclick = function(event) {
    document.querySelector('#DatosPersonales').className = "";

    event.preventDefault();
};

const info = document.querySelector(".alert-info");


document.querySelector('#login').onsubmit = (event) => {
    event.preventDefault();
    const phoneNumber = iti.getNumber();
    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;

    console.log(phoneNumber);
};


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
