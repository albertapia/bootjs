 let cantidadIntegrantes = document.querySelector('#familiares');

 let $ejecutaCalculosFamiliares = document.querySelector("#calcula-integrantes");
 
 $ejecutaCalculosFamiliares.onclick = obtieneIntegrantes;
 
 function obtieneIntegrantes() {
   for(i=0; i<cantidadIntegrantes.value; i++){
     creaInputSalarios(i)
   } 
 }
 
 function creaInputSalarios(i) {
   let cajaDiv = document.querySelector("#cantidadIntegrantes");
   let $inputSalario = document.createElement("input");
   let $numeroDeIntegrante = document.createElement("p");
   let $saltoDeLinea = document.createElement("br");
 
   cajaDiv.appendChild($numeroDeIntegrante);
   $numeroDeIntegrante.textContent = `integrante ${i}`;
   cajaDiv.appendChild($inputSalario);
   cajaDiv.appendChild($saltoDeLinea);
 
 }
