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
        secuenciaDelJugador.push(0);
        verificarSecuencia();
      }
}

function botonAmarillo() {
    if (juegoIniciado=true) {
        secuenciaDelJugador.push(1);
        verificarSecuencia();
      }
}

function botonVerde() {
    if (juegoIniciado=true) {
        secuenciaDelJugador.push(2);
        verificarSecuencia();
      }
}

function botonAzul() {
    if (juegoIniciado=true) {
        secuenciaDelJugador.push(3);
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

    mostrarSecuencia(secuenciaDelJuego);

    puntajeTotal++;
    puntajeMaximo++;
}


function mostrarSecuencia() {
    let i = 0;
    let intervalo = setInterval(function() {
      resaltarBoton(secuenciaDelJuego[i]);
      i++;
      if (i >= secuenciaDelJuego.length) {
        clearInterval(intervalo);
      }
    }, 1000);
  }

  function resaltarBoton(boton) {
    switch (boton) {
      case 0:
        $botonVerde.classList.add("active");
        setTimeout(function() {
          $botonVerde.classList.remove("active");
        }, 500);
        break;
      case 1:
        $botonRojo.classList.add("active");
        setTimeout(function() {
          $botonRojo.classList.remove("active");
        }, 500);
        break;
      case 2:
        $botonAmarillo.classList.add("active");
        setTimeout(function() {
          $botonAmarillo.classList.remove("active");
        }, 500);
        break;
      case 3:
        $botonAzul.classList.add("active");
        setTimeout(function() {
          $botonAzul.classList.remove("active");
        }, 500);
        break;
    }
  }

  function verificarSecuencia () {

  }

  function finDelJuego () {
    // agergar los respectivos inerhtml o contenttex para mostar el puntaje maximo y que este quede si continua jugando y ver si el reinicio que el puntaje total se reinicie en 0 este donde corresponda
    juegoIniciado = false;
  }
  

 