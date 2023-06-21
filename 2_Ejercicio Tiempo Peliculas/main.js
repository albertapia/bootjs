const divResultado = document.querySelector('#divResultado');

const botonSumarTiempo = document.querySelector('#sumarTiempo');
botonSumarTiempo.onclick = horasMinutosSegundos;

const botonReset = document.querySelector('#botonReset');
botonReset.onclick = hideResultados;

function hideResultados() {
  divResultado.classList.add('hide');

  document.getElementById('segundoFinal').innerHTML = '';
  document.getElementById('minutoFinal').innerHTML = '';
  document.getElementById('horaFinal').innerHTML = '';

}

function horasMinutosSegundos(){

    divResultado.classList.remove('hide');

    sumaHoras();
    sumaMinutos();
    sumaSegundos();

    
}

function sumaHoras(){

  let horasTotales = 0;
  let listaHoras = document.querySelectorAll('.horasClase');

  for (let i =0; i < listaHoras.length; i++) {
    horasTotales += Number(listaHoras[i].value);
   
  }

  //horasTotales = horasTotales + horaAdicional;
  horaFinal.textContent = `${horasTotales}`;

}

function sumaMinutos(){

  let minutosTotales = 0;
  let horaAdicional = 0;
  let listaMinutos = document.querySelectorAll('.minutosClase');

  for (let i =0; i < listaMinutos.length; i++) {

    minutosTotales += Number(listaMinutos[i].value);

    if (minutosTotales >= 60){
      horaAdicional++;
      minutosTotales = minutosTotales - 60;

    }    
  }

  //minutosTotales = minutosTotales + minutoAdicional;
  minutoFinal.textContent = `${minutosTotales}`;
 
}

function sumaSegundos (){

  let segundosTotales = 0;
  let minutoAdicional = 0;
  let listaSegundos = document.querySelectorAll('.segundosClase');

  for (let i =0; i < listaSegundos.length; i++) {

    segundosTotales += Number(listaSegundos[i].value);

    if (segundosTotales >= 60){
      minutoAdicional++;
      segundosTotales = segundosTotales - 60;
    }    
  }

segundoFinal.textContent = `${segundosTotales}`;

} 