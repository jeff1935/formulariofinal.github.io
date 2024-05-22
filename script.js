const form = document.getElementById('pensionForm');
const result = document.getElementById('result');
const message = document.getElementById('message');
const pension = document.getElementById('pension');
const fund = document.getElementById('fund');
const saldoActual = document.getElementById('saldoActual');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = form.age.value;
    const income = form.income.value;
    const saldo = form.saldo.value;
    const pensionValue = (income * age * 0.60) / 12;
    const fundValue = age * income + saldo;
    message.textContent = "Resultados:";
    pension.textContent = `1) Pension Estimada: ${pensionValue}`;
    fund.textContent = `2) Fondo Estimado: ${fundValue}`;
    saldoActual.textContent = `3) Saldo Actual: ${saldo}`;
});