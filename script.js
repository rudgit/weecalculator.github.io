function calcular() {
  const rav = parseFloat(document.getElementById('rav').value) || 0;
  const taxa = parseFloat(document.getElementById('taxa').value) || 0;
  const adoPercent = parseFloat(document.getElementById('ado').value) || 0;
  const over = parseFloat(document.getElementById('over').value) || 0;

  // RAV líquida
  const ravLiquida = rav - taxa;

  // ADO
  const adoValor = ravLiquida * (adoPercent / 100);

  // Restante
  const restante = ravLiquida - adoValor;

  // Base para emissor/gerente
  const base = restante + over;

  // Emissor 25%
  const emissor = base * 0.25;

  // Gerente 4%
  const gerente = base * 0.04;

  // Sobra final
  const sobra = (ravLiquida + over) - (adoValor + emissor + gerente);

  // Resultado formatado
  document.getElementById('resultado').innerHTML = `
    <strong>Resultados:</strong><br>
    📊 <b>RAV Líquida:</b> R$ ${ravLiquida.toFixed(2)}<br>
    🧾 <b>ADO (${adoPercent}%):</b> R$ ${adoValor.toFixed(2)}<br>
    💼 <b>Emissor (25%):</b> R$ ${emissor.toFixed(2)}<br>
    🧑‍💼 <b>Gerente (4%):</b> R$ ${gerente.toFixed(2)}<br>
    💰 <b>Sobra Final:</b> R$ ${sobra.toFixed(2)}
  `;
}
