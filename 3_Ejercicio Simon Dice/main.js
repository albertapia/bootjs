const $botonStar = document.querySelector('.botonStart');
const $botonRojo = document.querySelector('#rojo');
const $botonAmarillo = document.querySelector('#amarillo');
const $botonVerde = document.querySelector('#verde');
const $botonAzul = document.querySelector('#azul');

/*cuando cambie a clases revisar tomar de referencia haer las correcicones etc

 let cuadrado = document.querySelector('#cajaBotones')
undefined
cuadrado.addEventListener('click', ()=> {
    console.log("Hago click")
}) */

const secuenciaDelJuego = []; /*  En este array tengo que pushear el patron cuando se vaya avanzando en el juego*/
let secuenciaDelJugador = []; /*  En este array tengo que pushear el patron cuando el jugador vaya avanzando en el juego para comparar con el otro array*/
let puntajeMaximo = 0; 
let juegoIniciado = false;

$botonStar.onclick = iniciandoElJuego;
$botonRojo.onclick = botonRojo;
$botonAmarillo.onclick = botonAmarillo;
$botonVerde.onclick = botonVerde;
$botonAzul.onclick = botonAzul;

function iniciandoElJuego() {
  // console.log("Test Iniciando"); 
      if (juegoIniciado === false) {
        juegoIniciado === true;
        iniciarJuego();
      }
    }

function botonRojo() {
      if (juegoIniciado===true) {
        secuenciaDelJugador.push(0);
        verificarSecuencia();
      }
}

function botonAmarillo() {
  if (juegoIniciado===true) {
    secuenciaDelJugador.push(1);
        verificarSecuencia();
      }
}

function botonVerde() {
      if (juegoIniciado===true) {
    secuenciaDelJugador.push(2);
        verificarSecuencia();
      }
}

function botonAzul() {
      if (juegoIniciado===true) {
    secuenciaDelJugador.push(3);
        verificarSecuencia();
      }
}

function iniciarJuego () {
    let puntajeTotal = 0;
    siguienteSecuencia();
    return puntajeTotal; // tenog que declarar a donde va en medio de las llamadas de las funciones del boton star creo
}

// ver donde se pone secuencia jugador que se reinicia en cada ronda para comparar si el jugador hio bien

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
    if (secuenciaDelJugador[secuenciaDelJugador.length - 1] != secuenciaDelJuego[secuenciaJugador.length - 1]) {
      finDelJuego();
      return;
    }
  
    if (secuenciaDelJugador.length === secuenciaDelJuego.length) {
      secuenciaDelJugador = [];
      setTimeout(siguienteSecuencia, 1000);
    }

  }

  function finDelJuego () {
    // agergar los respectivos inerhtml o contenttex para mostar el puntaje maximo y que este quede si continua jugando y ver si el reinicio que el puntaje total se reinicie en 0 este donde corresponda

  cajaScore.classList.remove('hide');
  cajaScoreMaximo.classList.remove('hide');
  

    puntajeFinDelJuego();
    maximoPuntaje();

    juegoIniciado = false;
  }
  
  function maximoPuntaje (){
    if (puntajeTotal > puntajeMaximo) {
      puntajeMaximo = puntajeTotal;
    }
    puntajeMaximo.textContent = `Puntaje Maximo: ${puntajeTotal}`;


  }

  function puntajeFinDelJuego () {
    puntajeJuegoActual.textContent = `Puntaje: ${puntajeTotal}`;

  }

 