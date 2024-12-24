export function mostrarResultados(intereses, total, esSoloInteres, pagoMensual) {
    const pPagoMensual = document.getElementById("pPagoMensual");
    const pTotalAmount = document.getElementById("pTotalAmount");
    if (esSoloInteres) {
      pPagoMensual.textContent = `$0.00 mxn`;
      pTotalAmount.textContent = `$${intereses.toFixed(2)} mxn`;
    } else {
      pPagoMensual.textContent = `$${pagoMensual.toFixed(2)} mxn`;
      pTotalAmount.textContent = `$${total.toFixed(2)} mxn`;
    }
    const calculateMount = document.getElementById("calculateMount");
    calculateMount.style.display = "block";
    const normalSection = document.getElementById("normalSection");
    normalSection.style.display = "none";
  }
  
  export function limpiarCampos(inputs) {
    inputs.forEach(input => input.value = "");
  }
  