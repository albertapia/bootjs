const $botones = document.querySelectorAll('.botonCaja');
const $botonEmpezar = document.querySelector('.botonStart');
const $cajaScore = document.getElementById('cajaScore');
const $cajaScoreMaximo = document.getElementById('cajaScoreMaximo');
const $cajaCpu = document.getElementById('cpu');
const $cajaHuman = document.getElementById('human');

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

function juego () {
  empezarJuego();
  turnoCpu();
  turnoHumano();
  turnoLogica();

  iluminarColor(); //ver donde meterlo

}

function empezarJuego() {
  $botonEmpezar.disabled = true;
  secuenciaDelJuego = []; 
  puntajeJuegoActual = 0; 
  secuenciaDelJugador = []; 
}

function turnoCpu(){
  $botones.disabled = true;
  $cajaHuman.classList.remove('iluminado');
  $cajaCpu.classList.add('iluminado');
  obtenerColorAleatorio();
  agregarNuevoColor();
  mostrarSecuencia();
}

function agregarNuevoColor(nuevoColor) {
  secuenciaDelJuego.push(nuevoColor);
}

function obtenerColorAleatorio() {
  const coloresDisponibles = ['rojo', 'verde', 'azul', 'amarillo'];
  const nuevoColor = Math.floor(Math.random() * coloresDisponibles.length);
  return coloresDisponibles[nuevoColor];
}

function mostrarSecuencia() {
  for (let i = 0; i < secuenciaDelJuego.length; i++) {
      const color = secuenciaDelJuego[i];
      setTimeout(() => {
          iluminarColor(color);
      }, i * 1000);
  }

  setTimeout(() => {
      permitirJugada();
  }, secuenciaDelJuego.length * 1000);
}

function turnoHumano() {
  $botones.disabled = false;
  $cajaCpu.classList.remove('iluminado');
  $cajaHuman.classList.add('iluminado');
  $botones.forEach(boton => {
      boton.addEventListener('click', function () {
          const colorSeleccionado = boton.id;
          secuenciaDelJugador.push(colorSeleccionado);
          verificarSecuencia();
      });
  });
}


function turnoLogica(){
  verificarSecuencia ()
}

function iluminarColor(color) {
  const $botonIluminado = document.getElementById(color); 
  $botonIluminado.classList.add('iluminado');

  setTimeout(() => {
    $botonIluminado.classList.remove('iluminado');
  }, 500); 
}

function permitirJugada() {
  // Aca tendria qeu poner algo que permita que el jugador ingrese su secuencia creo
}

function verificarSecuencia() {
  if (secuenciaDelJugador[secuenciaDelJugador.length - 1] != secuenciaDelJuego[secuenciaDelJugador.length - 1]) { // Cambiar secuenciaJugador a secuenciaDelJugador
      finDelJuego();
      return;
   }
  
  if (secuenciaDelJugador.length === secuenciaDelJuego.length) {
    secuenciaDelJugador = [];
    setTimeout( turnoCpu, 1000); // aca va otro mas creo parametro definir bien las cosas
  }

}

  function finDelJuego () {
    // agergar los respectivos inerhtml o contenttex para mostar el puntaje maximo y que este quede si continua jugando y ver si el reinicio que el puntaje total se reinicie en 0 este donde corresponda

    cajaScore.classList.remove('hide');
    cajaScoreMaximo.classList.remove('hide');
    puntajeFinDelJuego();
    maximoPuntaje();

  }

  function puntajeFinDelJuego() {
    
    $cajaScore.textContent = `Puntaje: ${puntajeJuegoActual}`;
}
  
  function maximoPuntaje (){
    if (puntajeTotal > puntajeMaximo) {
      puntajeMaximo = puntajeTotal;
    }
    $cajaScoreMaximo.textContent = `Puntaje Maximo: ${puntajeTotal}`;


  }

 