const colores = ["rojo", "amarillo", "verde", "azul"];
const cajaBotones = document.querySelector("#cajaBotones");
const botonStart = document.querySelector("#botonStart");
const puntajeJuegoActual = document.querySelector("#puntajeJuegoActual");
const puntajeMaximo = document.querySelector("#puntajeMaximo");
const botones = document.querySelectorAll(".botonCaja");

botonStart.onclick = empezarJuego;
//botonStart.addEventListener("click", empezarJuego);
//cajaBotones.onclick = manejarClick;
cajaBotones.addEventListener("click", manejarClick);

let secuenciaMaquina = [];
let secuenciaJugador = [];
let puntaje = 0;
let jugadaUsuarioHabilitada = false;

function empezarJuego() {
    reiniciarJuego();
    generarSecuencia();
}

function reiniciarJuego() {
    secuenciaMaquina = [];
    secuenciaJugador = [];
    puntaje = 0;
    puntajeJuegoActual.textContent = "Puntaje: " + puntaje;
}

function generarSecuencia() {
    reiniciarInputUsuario();
    const nuevoColor = colores[Math.floor(Math.random() * 4)];
    secuenciaMaquina.push(nuevoColor);
    mostrarSecuencia();
}

function mostrarSecuencia() {
    let i = 0;
    const intervalo = setInterval(() => {
        resaltarColor(secuenciaMaquina[i]);
        i++;

        if (i >= secuenciaMaquina.length) {
            habilitarInputUsuario();
            clearInterval(intervalo);
        }
    }, 1000);
}


//la funcion resaltar color no pude hacerla la saque de un video de youtube
function resaltarColor(color) {
    const boton = document.querySelector(`#${color}`);
    boton.style.boxShadow = "0px 0px 30px white";

    setTimeout(() => {
        boton.style.boxShadow = "";
    }, 500);
}

function reiniciarInputUsuario() {
    jugadaUsuarioHabilitada = false;
}

function habilitarInputUsuario() {
    jugadaUsuarioHabilitada = true;
}

function manejarClick(event) {
    if (!jugadaUsuarioHabilitada) {
        return;
    }

    const botonClickeado = event.target;

    if (botonClickeado.classList.contains("botonCaja")) {
        const colorClickeado = botonClickeado.id;
        resaltarColor(colorClickeado);
        secuenciaJugador.push(colorClickeado);

        const jugadaCorrecta = verificarJugada();

        if (jugadaCorrecta) {
            if (secuenciaJugador.length === secuenciaMaquina.length) {
                puntaje++;
                puntajeJuegoActual.textContent = "Puntaje: " + puntaje;
                nivel++;
                setTimeout(generarSecuencia, 1000);
            }
        } else {
            finDelJuego();
        }
    }
}

function verificarJugada() {
    if (secuenciaJugador.length !== secuenciaMaquina.length) {
        return false;
    }

    for (let i = 0; i < secuenciaJugador.length; i++) {
        if (secuenciaJugador[i] !== secuenciaMaquina[i]) {
            return false;
        }
    }

    return true;
}


function finDelJuego() {
    if (puntaje > parseInt(puntajeMaximo.textContent)) {
        puntajeMaximo.textContent = puntaje;
    }

    reiniciarJuego();
    reiniciarInputUsuario();
}

