const hsPorDia = 8; // Asumiendo que 8 hs es lo normal
const diasPorSemana = 6; // Asumiendo 1 Franco Semanal
const meses = 12; // Meses del año


//let salarioAnual = prompt("Ingrese su Salario Anual")

const salarioAnual = prompt("Ingrese su salario anual: ");
console.log("Salario Anual: " + salarioAnual);

function salarioMensual (salarioAnual) {
    let salarioMensual = salarioAnual / meses;
    console.log("Salario Mensual: " + salarioMensual) ;
}

function salarioSemanal (salarioMensual) {
    let salarioSemanal = salarioMensual / 4; // Asumiendo que son 4 semanas por mes
    console.log("Salario Semanal: " + salarioSemanal);
}

function salarioDiario (salarioSemanal, diasPorSemana) {
    let salarioDiario = salarioSemanal / diasPorSemana ;
    console.log("Salario Diario: " + salarioDiario)
}






