let numeroIntegrantes = prompt("Cuantos Integrantes tiene tu Familia?");
let cantidadTrabajando = document.querySelector('#integrantesTrabajando');
let $ejecutaCargarTrabajadores = document.querySelector("#cargarIntegrantes");

$ejecutaCargarTrabajadores.onclick = obtieneIntegrantes;

function obtieneIntegrantes() {
  for(i=0; i<cantidadTrabajando.value; i++){
    creaInputSalarios(i)
  } 
  const createButton= document.createElement('button')
  createButton.innerText= 'Cargar Salarios';
  document.body.appendChild(createButton);
}

function creaInputSalarios(i) {
  let cajaDiv = document.querySelector("#integrantesQueTrabajan");
  let $inputSalario = document.createElement("input");
  let $numeroDeIntegrante = document.createElement("p");
  let $saltoDeLinea = document.createElement("br");

  cajaDiv.appendChild($numeroDeIntegrante);
  $numeroDeIntegrante.textContent = `Ingresar Salario Integrante Trabajador ${i+1}`;
  cajaDiv.appendChild($inputSalario);
  cajaDiv.appendChild($saltoDeLinea);
}
