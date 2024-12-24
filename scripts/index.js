import {
  calcularPagoMensual,
  calcularTotalPagar,
  calcularSoloIntereses
} from './calculadoraHipoteca.js';
import { mostrarResultados, limpiarCampos } from './uiHelper.js';

const ctaCalculate = document.getElementById("ctaCalculate");

ctaCalculate.addEventListener("click", () => {
  const inputMortgageAmount = document.getElementById("inputMortgageAmount");
  const inputMortgageTerm = document.getElementById("inputMortgageTerm");
  const inputInterestRate = document.getElementById("inputInterestRate");
  const esSoloInteres = document.getElementById("inputInterestOnly").checked;

  const montoHipoteca = parseFloat(inputMortgageAmount.value);
  const plazoHipoteca = parseInt(inputMortgageTerm.value);
  const tasaInteres = parseFloat(inputInterestRate.value);

  if (isNaN(montoHipoteca) || isNaN(plazoHipoteca) || isNaN(tasaInteres)) {
    alert("Introduzca números válidos para todos los campos.");
    return;
  }

  const pagoMensual = calcularPagoMensual(montoHipoteca, plazoHipoteca, tasaInteres);
  const numeroPagos = plazoHipoteca * 12;
  const totalPagar = calcularTotalPagar(pagoMensual, numeroPagos);
  const totalIntereses = esSoloInteres ? calcularSoloIntereses(totalPagar, montoHipoteca) : 0;

  mostrarResultados(totalIntereses, totalPagar, esSoloInteres, pagoMensual);

  limpiarCampos([inputMortgageAmount, inputMortgageTerm, inputInterestRate]);
});
