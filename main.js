const divResultado = document.querySelector('#divResultado');

const botonSumarTiempo = document.querySelector('#sumarTiempo');
botonSumarTiempo.onclick = horasMinutosSegundos;

function horasMinutosSegundos(){

    divResultado.classList.remove('hide');

    sumaHoras();
    sumaMinutos();
    sumaHoras();

    
}

function sumaHoras(horaAdicional){

  let horasTotales = 0;
  let listaHoras = document.querySelectorAll('.horasClase');

  for (let i =0; i < listaHoras.length; i++) {
    horasTotales = horasTotales + listaHoras[i].value;
   
  }

  horasTotales = horasTotales + horaAdicional;
  horaFinal.textContent = `${horasTotales}`;

}

function sumaMinutos(minutoAdicional){

  let minutosTotales = 0;
  let horaAdicional = 0;
  let listaMinutos = document.querySelectorAll('.minutosClase');

  for (let i =0; i < listaMinutos.length; i++) {

    minutosTotales = minutosTotales + listaMinutos[i].value;

    if (minutosTotales >= 60){
      horaAdicional++;
      minutosTotales = minutosTotales - 60;

    }    
  }

  minutosTotales = minutosTotales + minutoAdicional;
  minutoFinal.textContent = `${minutosTotales}`;
 
}

function sumaSegundos (){

  let segundosTotales = 0;
  let minutoAdicional = 0;
  let listaSegundos = document.querySelectorAll('.segundosClase');

  for (let i =0; i < listaSegundos.length; i++) {

    segundosTotales = segundosTotales + listaSegundos[i].value;

    if (segundosTotales >= 60){
      minutoAdicional++;
      segundosTotales = segundosTotales - 60;
    }    
  }

segundoFinal.textContent = `${segundosTotales}`;

} 