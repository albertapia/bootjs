let anio = prompt ("Ingrese el año (formato AAAA): ");
let mes = prompt("Ingrese el mes (formato MM): ");
let dia = prompt("Ingrese el dia (formato DD): ");

let AMD = anio + mes + dia; //AMD acronimo Año Mes Dia

function errorDate (mes, dia) {
    if (mes == 0 || mes > 12) {
        alert("Mes invalido"); 
    }

    if (dia > 31) {
        alert ("Dia Invalido");
    }
}

errorDate();
document.write(AMD);
console.log(AMD);

