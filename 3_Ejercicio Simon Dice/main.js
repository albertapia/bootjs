const $botonStar = document.querySelector('#botonStart');
const $botonRojo = document.querySelector('#rojo');
const $botonAmarillo = document.querySelector('#amarillo');
const $botonVerde = document.querySelector('#verde');
const $botonAzul = document.querySelector('#azul');
const cantidadDeBotonesDeColor = document.querySelectorAll('botonCaja');

let secuenciaJuego = []; /*  En este array tengo que pushear el patron cuando se vaya avanzando en el juego*/
let secuenciaJugador = []; /*  En este array tengo que pushear el patron cuando el jugador vaya avanzando en el juego para comparar con el otro array*/
//let puntajeTotal = 0;
//let puntajeMaximo = 0; probando donde iniciar estas dos variables en 0
let juegoIniciado = false;

$botonStar.onclick = start;
$botonRojo.onclick = botonRojo;
$botonAmarillo.onclick = botonAmarillo;
$botonVerde.onclick = botonVerde;
$botonAzul.onclick = botonAzul;

function start() {
    juegoIniciado = true;
    if (juegoIniciado) {
        juegoIniciado = true;
        iniciarJuego();
      }
    }

/*function botonRandom (){

    let randomBoton = Math.floor(Math.random() * cantidadDeBotonesDeColor.length);
    return  [randomBoton];
}*/ // Prueba Fallo dejo el codigo comentado como nota de momento.

function botonRojo() {}
function botonAmarillo() {}
function botonVerde() {}
function botonAzul() {}

function iniciarJuego () {
    let puntajeTotal = 0;
    // let puntajeMaximo = 0; /* Se comento por que el puntaje maximo no se tiene que inicializar en 0 nuevamente cada vez que se inicia el juego creo*/
    let secuenciaJuego = []; 
    let secuenciaJugador = [];

    secuenciaDelJuego();
}

function secuenciaDelJuego () {
    let botonRandom = Math.floor(Math.random()*4);
    secuenciaJuego.push(botonRandom);

    mostrarSecuencia();

    puntajeTotal++;
    puntajeMaximo++;
}

function mostrarSecuencia(){}

function iluminarBoton(){
    //Aca se usan muchjos if ver si se pueden usar case pero seguramente if mas ifelse revisar eso
}

function validarSecuencia (){
    //aca se compara las dos secuencias bah los dos array si son iguales se continua llamando a siguienteSecuencia o al nombre que le haya puesto
}

function gameOver() {
    //aca se pone el tru del juego inicoado a false para que termine se muestra en el documento algo que diga se perdio
}

/* Ver donde poner el classlist.add y remove hide para iluminar el boton e investigar si se puede hacer con un relee*/
