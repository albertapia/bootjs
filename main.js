const botonSumarTiempo = document.querySelector('#sumarTiempo')
botonSumarTiempo.onclick = sumaTiempoTotal;

const botonReset = document.querySelector('#botonReset')
botonReset.onclick = hideResultados;

const divResultado = document.querySelector('#divResultado')

function hideResultados (){
    divResultado.classList.add('hide');
    document.getElementById('segundoFinal').innerHTML = '';
    document.getElementById('minutoFinal').innerHTML = '';
    document.getElementById('horaFinal').innerHTML = '';
}

function sumaTiempoTotal(){
  let minutoAdicional;
  let horaAdicional;

    divResultado.classList.remove('hide');
    minutoAdicional = sumaSegundos();
    horaAdicional = sumaMinutos(minutoAdicional);
    sumaHoras(horaAdicional);
}

const cajaSegundoFinal = document.querySelector('#segundoFinal');
const cajaMensajeError = document.querySelector('#mensajeError');

function sumaSegundos() {
    let segundosTotales = 0;
    let minutoAdicional = 0;
    let listaSegundos = document.querySelectorAll('.segundosClase');
  
      for (let i = 0; i < listaSegundos.length; i++) {
        let segundos = Number(listaSegundos[i].value);  
        if (segundos >= 0 && segundos <= 59) {
          segundosTotales += segundos;  
            if (segundosTotales >= 60) {
              minutoAdicional++;
            segundosTotales = segundosTotales - 60;
            }          
        } else {
          cajaMensajeError.textContent = `Ingresar segundos válidos (entre 0 y 59)`;          
        }
      }  
      cajaSegundoFinal.textContent = segundosTotales;
      return minutoAdicional;
}

const cajaMinutoFinal = document.querySelector('#minutoFinal');

function sumaMinutos(minutoAdicional){
  let minutosTotales = minutoAdicional;
  let horaAdicional = 0;
  let listaMinutos = document.querySelectorAll('.minutosClase');

    for (let i = 0; i < listaMinutos.length; i++) {
      let minutos = Number(listaMinutos[i].value);  
      if (minutos >= 0 && minutos <= 59) {
        minutosTotales += minutos;  
          if (minutosTotales >= 60) {
            horaAdicional++;
            minutosTotales = minutosTotales - 60;
          }          
      } else {
        cajaMensajeError.textContent = `Ingresar minutos válidos (entre 0 y 59)`;          
      }
    }  
    cajaMinutoFinal.textContent = minutosTotales;

}

const cajaHoraFinal = document.querySelector('#horaFinal');

function sumaHoras(horaAdicional) {
    let horasTotales = horaAdicional;
    let listaHoras = document.querySelectorAll('.horasClase');
  
    for (let i = 0; i < listaHoras.length; i++) {
      let horas = Number(listaHoras[i].value);
      horasTotales += horas;
    }
  
    cajaHoraFinal.textContent = horasTotales;
  }