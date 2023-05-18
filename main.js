let salAnual = prompt("Por favor Ingrese su Salario Anual");
let hsPorDia = prompt("Por favor Ingrese Cuantas Horas trabaja por dia");

function anios () {
    console.log("Salario Anual: " + salAnual);
    let salMen = salAnual/12;
    console.log("Salario Mensual: " + salMen);
    let salSem = salMen/4;
    console.log("Salario Semanal: " + salSem);
    let salDia = salSem/7;
    console.log("Salario Diario: " + salDia);
    console.log("Salario por Hora: " + salDia / hsPorDia);

}

anios();