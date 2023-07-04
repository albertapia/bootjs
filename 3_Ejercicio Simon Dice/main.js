const $botonStar = document.querySelector('#botonStart');
const $botonRojo = document.querySelector('#rojo');
const $botonAmarillo = document.querySelector('#amarillo');
const $botonVerde = document.querySelector('#verde');
const $botonAzul = document.querySelector('#azul');
//const cantidadDeBotonesDeColor = document.querySelectorAll('botonCaja');

let secuenciaDelJuego = []; /*  En este array tengo que pushear el patron cuando se vaya avanzando en el juego*/
let secuenciaDelJugador = []; /*  En este array tengo que pushear el patron cuando el jugador vaya avanzando en el juego para comparar con el otro array*/
//let puntajeTotal = 0; probando donde iniciar estas dos variables en 0
let puntajeMaximo = 0; 
let juegoIniciado = false;

const colores = ["rojo", "amarillo", "verde", "azul"];

$botonStar.onclick = iniciandoElJuego;
$botonRojo.onclick = botonRojo;
$botonAmarillo.onclick = botonAmarillo;
$botonVerde.onclick = botonVerde;
$botonAzul.onclick = botonAzul;

function iniciandoElJuego() {
    if (juegoIniciado = false) {
        juegoIniciado = true;
        iniciarJuego();
      }
    }
/*function botonRandom (){
 let randomBoton = Math.floor(Math.random() * cantidadDeBotonesDeColor.length);
 return  [randomBoton];
}*/ // Prueba Fallo dejo el codigo comentado como nota de momento.

function botonRojo() {
    if (juegoIniciado=true) {
        secuenciaJugador.push(0);
        verificarSecuencia();
      }
}

function botonAmarillo() {
    if (juegoIniciado=true) {
        secuenciaJugador.push(1);
        verificarSecuencia();
      }
}

function botonVerde() {
    if (juegoIniciado=true) {
        secuenciaJugador.push(2);
        verificarSecuencia();
      }
}

function botonAzul() {
    if (juegoIniciado=true) {
        secuenciaJugador.push(3);
        verificarSecuencia();
      }
}

function iniciarJuego () {
    let puntajeTotal = 0;
    // let puntajeMaximo = 0; /* Se comento por que el puntaje maximo no se tiene que inicializar en 0 nuevamente cada vez que se inicia el juego creo
    secuenciaDelJuego = []; 
    secuenciaDelJugador = [];
    siguienteSecuencia();
}

function siguienteSecuencia() {
    let botonRandom = Math.floor(Math.random()*4);
    secuenciaDelJuego.push(botonRandom);

    mostrarSecuencia();

    puntajeTotal++;
    puntajeMaximo++;
}


function mostrarSecuencia(){}

/*
function iluminarBoton(){
    //Aca se usan muchjos if ver si se pueden usar case pero seguramente if mas ifelse revisar eso
}

function validarSecuencia (){
    //aca se compara las dos secuencias bah los dos array si son iguales se continua llamando a siguienteSecuencia o al nombre que le haya puesto
    if (secuenciaJugador)


    if (secuenciaJugador[secuenciaJugador.length - 1] !== sequence[playerSequence.length - 1]) {
        gameOver();
        return;
      }
    
      if (secuenciaJugador.length === secuenciaJuego.length) {
        playerSequence = [];
        setTimeout(function() {
          nextSequence();
        }, 1000);
}

function gameOver() {
    //aca se pone el tru del juego inicoado a false para que termine se muestra en el documento algo que diga se perdio
}

/* Ver donde poner el classlist.add y remove hide para iluminar el boton e investigar si se puede hacer con un relee*/
