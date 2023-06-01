//let integrantes = prompt("Numero de Integrantes de la Familia")
let listaDeSalarios = [];

function pedirSalarios() {
    const numeroDeTrabajadores = document.getElementById("numeroTrabajadores").value;

    for (let i = 1; +i <= numeroDeTrabajadores; i++) {
      const salario = prompt(`Ingrese el salario del trabajador ${i}:`);
      listaDeSalarios.push(salario);

      console.log(listaDeSalarios);

    }

  }

  function ordenarSalarioMaximo(array) {
    const longitudDelArray = array.length;
    
    for (let i = 0; i < longitudDelArray; i++) {
      for (let j = 0; j < longitudDelArray; j++) {
        if(array[j] > array[j + 1]) {
          let contenedorTemporal = array[j];
          array[j] = array[j + 1];
          array[j + 1] = contenedorTemporal;
      }
        
    }
   
    }

  }

  function ordenarSalarioMinimo(array) {
    const longitudDelArray = array.length;
    
    for (let i = 0; i < longitudDelArray; i++) {
      for (let j = 0; j < longitudDelArray; j++) {
        if(array[j] < array[j + 1]) {
          let contenedorTemporal = array[j];
          array[j] = array[j + 1];
          array[j + 1] = contenedorTemporal;
      }
        
    }
   
    }

  }

  function sumaTotal(array) {

    let sumaSalariosTotal = 0;

    for (let i = 0; i < array.length; i++) {

      sumaSalariosTotal += array[i];
   
    }

  }

  function promedioTrabajadores (sumaSalariosTotal, numeroDeTrabajadores) {
    let promedioSalarioTrabajadores = sumaSalariosTotal / numeroDeTrabajadores;
  }

  function promedioIntegrantes (sumaSalariosTotal, integrantes)
  {

    let promedioSalarioIntegrantes = sumaSalariosTotal / integrantes;


  }

    
  
