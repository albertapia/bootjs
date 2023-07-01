let $titulo = document.querySelector('#titulo');
const $botonStar = document.querySelector('#botonStart');
const $botonRojo = document.querySelector('#rojo');
const $botonAmarillo = document.querySelector('#amarillo');
const $botonVerde = document.querySelector('#verde');
const $botonAzul = document.querySelector('#azul');
const cantidadDeBotonesDeColor = document.querySelectorAll('botonCaja');

let patron = []; /*  En este array tengo que pushear el patron cuando se vaya avanzando*/

$botonStar.onclick = start;
$botonRojo.onclick = botonRojo;
/* $botonAmarillo.onclick = botonAmarillo;
$botonVerde.onclick = botonVerde;
$botonAzul.onclick = botonAzul; */ //Estoy en fase de prueba del boton rojo y random de momento

function start() {
    botonRandom ();

}

function botonRandom (){

    let randomBoton = Math.floor(Math.random() * cantidadDeBotonesDeColor.length);
    return  [randomBoton];
}

