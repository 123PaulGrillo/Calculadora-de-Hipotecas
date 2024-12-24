export function calcularPagoMensual(monto, plazo, tasa) {
    const tasaMensual = tasa / 100 / 12;
    const numeroPagos = plazo * 12;
    return (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));
  }
  
  export function calcularTotalPagar(pagoMensual, numeroPagos) {
    return pagoMensual * numeroPagos;
  }
  
  export function calcularSoloIntereses(totalPagar, montoHipoteca) {
    return totalPagar - montoHipoteca;
  }
  