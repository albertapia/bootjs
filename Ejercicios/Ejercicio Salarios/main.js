const numeroIntegrantesFamilia = prompt('Cuantos Integrantes son en tu familia');

const botonCargarTrabajadores = document.querySelector('#botonCargarTrabajadores');
const divResultado = document.querySelector("#divResultado");

const divInputs = document.querySelector('#divInputs')
const divBotonEscondido = document.querySelector('#divBotonEscondido')
const botonCargarSalarios = document.querySelector('#botonCargarSalarios')

let salariosCargados = [];

botonCargarTrabajadores.onclick = crearInputs;
botonCargarSalarios.onclick = cargarSalarios;

function crearInputs() {
  const inputs = document.querySelectorAll("#divInputs input[type='number']");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].parentNode.removeChild(inputs[i]);
  }

  const numeroDeTrabajadores = document.querySelector("#numeroDeTrabajadores").value;

  for (let i = 0; i < numeroDeTrabajadores; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Salario del trabajador #" + (i + 1);
    input.className = "salario-integrante";
    divInputs.appendChild(input);
  }
  divInputs.classList.remove('hide');
  divBotonEscondido.classList.remove('hide');
  divResultado.classList.add('hide');
  
}

function cargarSalarios() {
  const salarios = document.querySelectorAll('.salario-integrante');
  salariosCargados = [];

  for (let i = 0; i < salarios.length; i++) {
    salariosCargados.push(Number(salarios[i].value));
  }
  console.log(salariosCargados);

  divBotonEscondidoResultado.classList.remove('hide');
  divResultado.classList.remove('hide');
}

const botonResultados = document.querySelector('#botonResultados');

botonResultados.onclick = resultados;

function resultados() {
  const longitudDelArray = salariosCargados.length;

  ordenadoMayorMenor();
  sumaTotal();
  calcularPromedioTrabajadores();
  calcularPromedioFamiliar();

  /*
  divResultado.innerHTML = `
    Maximo salario: ${salariosCargados[0]}<br>
    Minimo salario: ${salariosCargados[longitudDelArray - 1]}<br>
    Suma de salarios ${suma}<br>
    Salario promedio: ${promedio}<br>
    
  `;

  */
  botonResultados.classList.add('hide');


}

function ordenadoMayorMenor() {
  const longitudDelArray = salariosCargados.length;

  for (let i = 0; i < longitudDelArray; i++) {
    for (let j = 0; j < longitudDelArray - i - 1; j++) {
      if (salariosCargados[j] < salariosCargados[j + 1]) {
        let contenedorTemporal = salariosCargados[j];
        salariosCargados[j] = salariosCargados[j + 1];
        salariosCargados[j + 1] = contenedorTemporal;
      }
    }
  }
  console.log(salariosCargados);
  console.log("El mayor salario es: " + salariosCargados[0]);
  console.log("El menor salario es: " + salariosCargados[longitudDelArray - 1]);

  maximoSalario.textContent = `El mayor salario es: ${salariosCargados[0]}`;
  minimoSalario.textContent = `El menor salario es: ${salariosCargados[longitudDelArray - 1]}`;

  //divResultado.textContent = (`El menor numero es: ${salariosCargados[longitudDelArray - 1]}`);
  //divResultado.textContent = `El mayor número es: ${salariosCargados[0]}`;


}

function sumaTotal() {
  let suma = 0;

  for (let i = 0; i < salariosCargados.length; i++) {
    suma += salariosCargados[i];
  }

  console.log("Suma total de salarios:", suma);
  sumaSalario.innerHTML = "Suma total de salarios: " + suma;

}

function calcularPromedioTrabajadores() {
  let suma = 0;

  for (let i = 0; i < salariosCargados.length; i++) {
    suma += salariosCargados[i];
  }

  let promedio = suma / salariosCargados.length;

  console.log("Promedio de salarios:", promedio);
  promedioSalarioTrabajadores.innerHTML = "Promedio salarios de trabajadores: " + promedio;

}

function calcularPromedioFamiliar() {
  let sumaFamiliar = 0;

  for (let i = 0; i < salariosCargados.length; i++) {
    sumaFamiliar += salariosCargados[i];
  }

  let promedioFamiliar = sumaFamiliar / numeroIntegrantesFamilia;

  console.log("Promedio de salarios Familia:", promedioFamiliar);
  //promedioSalarioTrabajadores.innerHTML = "Promedio de salarios Familia: " + promedioFamiliar;

  promedioSalarioFamiliar.textContent = `Promedio de salarios Familia: ${promedioFamiliar}`;


}