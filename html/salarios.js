
let obtener = document.querySelector("#captura");

obtener.onclick = crearParrafo;


function crearParrafo(){
    let salario = document.querySelector("#salario").value;
    let parrafo = document.createElement('p');
    let capturaDiv = document.querySelector('#mensaje');
    capturaDiv.appendChild(parrafo);
    parrafo.textContent = salario ;
}
console.log(salario);

