const colores = ["rojo", "amarillo", "verde", "azul"];
const cajaBotones = document.querySelector("#cajaBotones");
const botonStart = document.querySelector(".botonStart");
const puntajeJuegoActual = document.querySelector("#puntajeJuegoActual");
const puntajeMaximo = document.querySelector("#puntajeMaximo");
const cajaScore = document.querySelector("#cajaScore");
const cajaScoreMaximo = document.querySelector("#cajaScoreMaximo");
const cajaUserCPU = document.querySelector("#cpu");
const cajaUserHumano = document.querySelector("#human");

let secuenciaMaquina = [];
let secuenciaJugador = [];
let puntaje = 0;
let jugadaUsuarioHabilitada = false;

botonStart.addEventListener("click", empezarJuego);
cajaBotones.addEventListener("click", manejarClick);

function empezarJuego() {
    secuenciaMaquina = [];
    secuenciaJugador = [];
    nivel = 1;
    puntaje = 0;
    puntajeJuegoActual.textContent = "Puntaje: " + puntaje;
    cajaScore.classList.add("hide");
    generarSecuencia();
}