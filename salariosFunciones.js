const numIntegrantes = prompt("Cuantos integrantes tiene tu familia?");

const salarios = [];

for (let i = 0; i < numTrabajadores; i++) {
  const salario = prompt(`Ingrese el salario del trabajador ${i + 1}:`);
  salarios.push(salario);
}

function mayorSalario (...salarios) {
    let maxSalario = 0;
    for (let i = 0; i < salarios.length; i++) {

        let sumaSalarios = sumaSalarios + salarios.salario;

        if (salarios.salario > maxSalario) {
            maxSalario = salarios.salario;
            }
        }
        document.write(maxSalario);
        document.write(sumaSalarios);
        document.write(sumaSalarios / numTrabajadores)
    }
function menorSalario (...salarios){
    let minSalario = null;

    for (let i = 0; i < salarios.length; i++) {
        
        if (salarios.salario > minSalario) {
            minSalario = salarios.salario;
            }
        }
        document.write(minSalario);
    }


//function crearParrafo(){
 //   let salario = document.querySelector("#salario").value;
 //   let parrafo = document.createElement('p');
 //   let capturaDiv = document.querySelector('#mensaje');
 //   capturaDiv.appendChild(parrafo);
 //   parrafo.textContent = salario ;
//}
//console.log(salario);
