let array = [];
let minimo;
let maximo=0;

for (let i = 0; i <10; i++ ) {
    let numero = Number(prompt("Ingresa numbero"));
    array.push(numero);

}

//

//let numeroIntegrantes = prompt("Cuantos Integrantes tiene tu Familia?");

let cantidadTrabajando= document.querySelector('#integrantesTrabajando');

let $ejecutaCargarTrabajadores = document.querySelector("#cargarIntegrantes");

$ejecutaCargarTrabajadores.onclick = obtieneIntegrantes;

function obtieneIntegrantes() {
    for(i=0; i<cantidadTrabajando.value; i++){
      creaInputSalarios(i)
    }  
  }

  function creaInputSalarios(i) {
    let cajaDiv = document.querySelector("#integrantesQueTrabajan");
    let $inputSalario = document.createElement("input");
    let $cargarSalario = document.createElement("button");
    let $numeroDeIntegrante = document.createElement("p");
    let $saltoDeLinea = document.createElement("br");
  
    cajaDiv.appendChild($numeroDeIntegrante);
    $numeroDeIntegrante.textContent = `Ingresar Salario Integrante Trabajador ${i}`;
    cajaDiv.appendChild($inputSalario);
    cajaDiv.appendChild($cargarSalario);
    cajaDiv.appendChild($saltoDeLinea);
    
  
  }
