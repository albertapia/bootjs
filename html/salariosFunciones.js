let Integrantes = prompt("Nuemor de Integrantes de la Familia")

function pedirSalarios() {
    const numeroDeTrabajadores = document.getElementById("numeroTrabajadores").value;
    let salarios = [];
  
    for (let i = 1; +i <= numeroDeTrabajadores; i++) {
      const salario = prompt(`Ingrese el salario del trabajador ${i}:`);
      salarios.push(parseFloat(salario));
    }

    function calcularSalarios(numeroDeTrabajadores){

      let salarioMaximo = salarios[0];
      let salarioMinimo = salarios[0];
      let salarioTotal = 0;

      for (let i = 0; i < salarios.length; i++){

        if (salarios[i] > salarioMaximo){
          salarioMaximo = salarios[i];
        }

        if (salarios[i] < salarioMinimo){
          salarioMinimo = salarios[i];
          
        }

        salarioTotal += salarios[i]; 
      }

      let salarioPromedio = salarioTotal / numeroDeTrabajadores;

    }

    calcularSalarios();

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
      Máximo salario: ${salarioMaximo}<br>
      Mínimo salario: ${salarioMinimo}<br>
      Salario promedio: ${salarioPromedio}<br>
      Total de salarios: ${salarioTotal}
    `;
}