// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const MINOMBRE = "emilio";
const NOMBREMAMA = "rita";
let NombreUsuario = "";

function restar(argu1, argu2) {
  return argu1 - argu2;
}

function saludo() {
  NombreUsuario = prompt("Ingrese su nombre:");
  if (NombreUsuario == "no") {
    alert("Hola creador");
  } else if (NombreUsuario != null) {
    NombreUsuario = NombreUsuario.trim();
    NombreUsuario = NombreUsuario.toLowerCase();
    if (NombreUsuario === MINOMBRE) {
      alert(`que loco, yo tambien me llamo ${NombreUsuario}`);
      console.log(`Hola ${NombreUsuario}`);
    } else if (NombreUsuario === NOMBREMAMA) {
      alert(`hola ${NombreUsuario}, te llamas igual que mi mama`);
      console.log(`Hola ${NombreUsuario}`);
    } else if (NombreUsuario == "" || NombreUsuario == {}) {
      console.log("No se entendio tu nombre, por favor volvelo a ingresar");
      saludo(NombreUsuario);
    } else {
      console.log(`hola ${NombreUsuario}`);
    }
  } else {
    console.log("No se entendio tu nombre, por favor volvelo a ingresar");
    saludo(NombreUsuario);
  }
}

const MIEDAD = 33;
let EdadUsuario = Number();

function edad() {
  if (NombreUsuario == "no") {
  } else {
    EdadUsuario = prompt("ingresa tu edad");
    if (EdadUsuario != null) {
      EdadUsuario = EdadUsuario.trim();
      EdadUsuario = Number(EdadUsuario);
      if (EdadUsuario != {} && EdadUsuario != "") {
        if (EdadUsuario == MIEDAD) {
          alert(`que loco, yo tambien tengo ${EdadUsuario}`);
          console.log(`tenes ${EdadUsuario} años.`);
        } else if (EdadUsuario < MIEDAD) {
          alert("Sos mas chico que yo.");
          console.log(`tenes ${EdadUsuario} años.`);
        } else if (EdadUsuario > MIEDAD) {
          alert("Sos mas grande que yo.");
          console.log(`tenes ${EdadUsuario} años.`);
        } else {
          console.log("No se entiende tu edad. Ingresa el valor en numeros.");
          edad(EdadUsuario);
        }
      } else {
        console.log("No se entiende tu edad. Ingresa el valor en numeros.");
        edad(EdadUsuario);
      }
    } else {
      console.log("No se entiende tu edad. Ingresa el valor en numeros.");
      edad(EdadUsuario);
    }
  }
}

const MAYORIAEDAD = 18;
let docUsuario = "";

function documento() {
  if (NombreUsuario == "no") {
  } else {
    docUsuario = prompt("tenes documento? responde si o no.").toLowerCase();
    if (docUsuario != null) {
      docUsuario = docUsuario.trim();
      if (docUsuario != {} && docUsuario != "") {
        if (docUsuario == "si" && EdadUsuario >= 18) {
          alert("Podes entrar al bar.");
          console.log(
            "Tenes documento y sos mayor de edad, bienvenido al bar.",
          );
        } else if (docUsuario == "no") {
          alert("Sin documento no podes entrar al bar.");
          console.log("La proxima trae documento, perejil.");
        } else {
          alert("Sos menor de edad, no podes pasar.");
          console.log(
            "nos vemos en " + restar(MAYORIAEDAD, EdadUsuario) + " años.",
          );
        }
      } else {
        console.log("disculpa, no se entiende tu respuesta.");
        documento(docUsuario);
      }
    } else {
      console.log("disculpa, no se entiende tu respuesta.");
      documento(docUsuario);
    }
  }
}

saludo();
edad();
documento();