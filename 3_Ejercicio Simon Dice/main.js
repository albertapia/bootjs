const $botones = document.querySelectorAll('.botonCaja');
const $botonEmpezar = document.querySelector('.botonStart');
const $cajaScore = document.getElementById('cajaScore');
const $cajaScoreMaximo = document.getElementById('cajaScoreMaximo');
let secuenciaDelJuego = []; // secuencia del juego ...MAKINA
let secuenciaDelJugador = []; // secuencia del HUMANO
let puntajeJuegoActual = 0; // Puntaje del juego actual
let puntajeMaximo = 0; // RECORDDD!!

$botonEmpezar.addEventListener('click', empezarJuego);
// $botonEmpezar.onclick = empezarJuego;

/*
botones.addEventListener('click', empezarJuego);
$cuadradoBotones.addEventListener('click', ()=> {
    console.log("Hago click")
})*/

function empezarJuego() {
  $botonEmpezar.disabled = true; // para desabilitar el boton una vez iniciado
  secuenciaDelJuego = []; 
  puntajeJuegoActual = 0; 
  secuenciaDelJugador = [];
  agregarNuevoColor();
}

function agregarNuevoColor() {
  const nuevoColor = obtenerColorAleatorio();
  secuenciaDelJuego.push(nuevoColor);
  ejecutarSecuencia(secuenciaDelJuego);
}

function obtenerColorAleatorio() {
  const coloresDisponibles = ['rojo', 'verde', 'azul', 'amarillo'];
  const color = Math.floor(Math.random() * coloresDisponibles.length);
  return coloresDisponibles[color];
}

function ejecutarSecuencia(secuenciaDelJuego) {

}

function iluminarColor(color) {
  const $botonIluminado = document.getElementById(color);
  $botonIluminado.classList.add('iluminado');

  setTimeout(() => {
    $botonIluminado.classList.remove('iluminado');
  }, 500); 
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

 