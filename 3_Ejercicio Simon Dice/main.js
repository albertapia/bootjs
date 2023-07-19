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
  mostrarSecuencia(secuenciaDelJuego);
}

function obtenerColorAleatorio() {
  const coloresDisponibles = ['rojo', 'verde', 'azul', 'amarillo'];
  const color = Math.floor(Math.random() * coloresDisponibles.length);
  return coloresDisponibles[color];
}

function mostrarSecuencia() {
  let i = 0;
  const intervalo = setInterval(() => {
    const color = secuencia[i];
    iluminarColor(color);
    i++;
    if (i >= secuencia.length) {
      clearInterval(intervalo);
      permitirJugada();
    }
  }, 1000);
}



function iluminarColor(color) {
  const $botonIluminado = document.getElementById(color); 
  $botonIluminado.classList.add('iluminado');

  setTimeout(() => {
    $botonIluminado.classList.remove('iluminado');
  }, 500); 
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

 