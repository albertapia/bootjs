const botonCargarTrabajadores = document.getElementById("botonCargarTrabajadores");
const resultado = document.getElementById("resultado");

botonCargarTrabajadores.addEventListener("click", crearInputs);

function crearInputs() {

  const numeroDeTrabajadores = document.getElementById("numeroDeTrabajadores").value;

	for (let i = 0; i < numeroDeTrabajadores; i++) {
		const input = document.createElement("input");
		input.type = "number";
		input.placeholder = "Salario del trabajador #" + (i+1);
		input.id = "input-" + i;
		document.body.appendChild(input);
	}

	const botonCargar = document.createElement("button");
	botonCargar.innerText = "Cargar salarios";
	botonCargar.id = "botonCargarSalarios";
	botonCargar.onclick = botonCargarTrabajadores;
	document.body.appendChild(botonCargar);
}

const botonCargarSalarios = document.getElementById("botonCargarSalarios");
botonCargarSalarios.addEventListener("click", cargarSalarios);


function cargarSalarios () { 
	const numeroDeTrabajadores = document.getElementById("numeroDeTrabajadores").value;
	let salarios = []

	for (let i = 0; i < numeroDeTrabajadores; i++) {
		const input = document.getElementById("input-" + i);
		salarios.push(parseFloat(input.value));
	}

	// Supuestamente esto elimina los inputs creados con la funcion crearimputs
	const inputs = document.querySelectorAll("input[type='number']");
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].parentNode.removeChild(inputs[i]);
	}
	
	consola.log(mostrarResultados);

}