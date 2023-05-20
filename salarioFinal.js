//let numeroIntegrantes = prompt("Cuantos Integrantes tiene tu Familia?");

let cantidadTrabajando= document.querySelector('#integrantesTrabajando');

let $ejecutaCargarTrabajadores = document.querySelector("#cargarIntegrantes");

$ejecutaCargarTrabajadores.onclick = obtieneIntegrantes;

function obtieneIntegrantes() {
    for(i=0; i<cantidadTrabajando.value; i++){
      creaFormSalarios(i)
    }  
  }

  function crearFormSalarios(i) {
    let cajaForm = document.querySelector("#integrantesQueTrabajan");
    let $inputSalario = document.createElement("form");
    let $numeroDeIntegrante = document.createElement("p");
    let $saltoDeLinea = document.createElement("br");
  
    cajaForm.appendChild($numeroDeIntegrante);
    $numeroDeIntegrante.textContent = `Ingresar Salario Integrante Trabajador ${i}`;
    cajaForm.appendChild($inputSalario);
    cajaForm.appendChild($saltoDeLinea);
    
  
  }