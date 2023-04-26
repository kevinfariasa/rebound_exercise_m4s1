document.getElementById("btnSubmit").addEventListener("click", (evento) => {
    evento.preventDefault();
    let total = parseInt(document.getElementById("valorPago").value);
    let intereses = parseInt(document.getElementById("valorIntereses").value);
    let term = parseInt(document.getElementById("formatoCuotas").value);
    validacion(total, intereses, term);
    let text = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${term} CUOTAS DE $${Math.round(calculo(total, intereses, term))}`;
    document.getElementById("cantidadTotal").innerText = text;
  });
  
  const calculo = (total, intereses, term) => {
    let calc = (total / term) * ((100 + intereses) / 100);
    return calc;
  };
  const validacion = (total, intereses, term) => {
    if (total < 0 || intereses < 0 || term < 0) {
      throw new Error(alert("no puede ingresar valores menores a 0"));      
      
    }
    if (isNaN(total) || isNaN(intereses) || isNaN(term)) {
      throw new Error(alert("por favor ingrese todos los datos"));
    }
};

