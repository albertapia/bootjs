function crearInputs() {
	// Pedir número de integrantes
	const numIntegrantes = prompt("Ingrese el número de integrantes:");

	// Crear inputs de salario
	for (let i = 0; i < numIntegrantes; i++) {
		const input = document.createElement("input");
		input.type = "number";
		input.placeholder = "Salario del trabajador #" + (i+1);
		input.id = "input-" + i;
		document.body.appendChild(input);
	}

	// Crear botón para cargar salarios
	const botonCargar = document.createElement("button");
	botonCargar.innerText = "Cargar salarios";
	botonCargar.id = "boton-cargar";
	botonCargar.onclick = cargarSalarios;
	document.body.appendChild(botonCargar);
}

function cargarSalarios() {
	// Obtener salarios
	const salarios = [];
	const numIntegrantes = document.querySelectorAll("input[type='number']").length;
	for (let i = 0; i < numIntegrantes; i++) {
		const input = document.getElementById("input-" + i);
		salarios.push(parseFloat(input.value));
	}

	// Eliminar inputs
	const inputs = document.querySelectorAll("input[type='number']");
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].parentNode.removeChild(inputs[i]);
	}

	// Ordenar salarios
	salarios.sort(function(a, b) {
		return b - a;
	});

	// Calcular total y promedio
	const total = salarios.reduce(function(acum, salario) {
		return acum + salario;
	}, 0);
	const promedio = total / salarios.length;

	// Mostrar resultados
	const resultados = document.createElement("div");
	resultados.innerHTML = "Salarios: " + salarios.join(", ") + "<br>" +
						   "Total: " + total.toFixed(2) + "<br>" +
						   "Promedio: " + promedio.toFixed(2);
	document.body.appendChild(resultados);

	console.log("Salarios ordenados de mayor a menor:", salarios);
	console.log("Total:", total);
	console.log("Promedio:", promedio);
}