//let Integrantes = prompt("Nuemro de Integrantes de la Familia")

function pedirSalarios() {
    const numeroDeTrabajadores = document.getElementById("numeroTrabajadores").value;
    let salarios = [];
    let salarioMaximo = 0;
    let salarioMinimo = 0;
    let salariototal = 0;
  
    for (let i = 1; +i <= numeroDeTrabajadores; i++) {
      const salario = prompt(`Ingrese el salario del trabajador ${i}:`);
      salarios.push(parseFloat(salario));

      if (salarioMaximo < salarios.salario){
        salarioMaximo = salarios.salario;
      }

      if (salarioMinimo > salarios.salario){
      salarioMinimo = salarios.salario;
      }

    }

    let salariopromedio = salariototal / numeroDeTrabajadores;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
      Maximo salario: ${salarioMaximo}<br>
      Minimo salario: ${salarioMinimo}<br>
      Salario promedio: ${salariopromedio}<br>
      Total de salarios: ${salariototal}

    `;
    
}