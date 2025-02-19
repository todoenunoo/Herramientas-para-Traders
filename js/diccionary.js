// Usamos el nombre "diccionary" en la variable para mantener la coherencia.
const diccionary = [
  { term: 'Stop Loss', definition: 'Orden para limitar las pérdidas en una operación.' },
  { term: 'Take Profit', definition: 'Orden para asegurar ganancias en una operación.' },
  { term: 'Pips', definition: 'Unidad de medida en el movimiento de precios de un activo.' },
  { term: 'Spread', definition: 'Diferencia entre el precio de compra y venta.' },
  { term: 'Apalancamiento', definition: 'Uso de capital prestado para aumentar la potencial ganancia (o pérdida).' },
  { term: 'Volatilidad', definition: 'Medida de la variabilidad en el precio de un activo.' },
  { term: 'Riesgo', definition: 'Probabilidad de que una operación termine en pérdida.' },
  { term: 'Punto de entrada', definition: 'El momento exacto para abrir una operación en el mercado.' },
  { term: 'Punto de salida', definition: 'El momento exacto para cerrar una operación en el mercado.' },
  { term: 'Tendencia', definition: 'Dirección general en la que se mueve el precio de un activo.' },
  { term: 'Soporte', definition: 'Nivel de precio en el que un activo tiende a encontrar soporte antes de subir.' },
  { term: 'Resistencia', definition: 'Nivel de precio en el que un activo tiende a encontrar resistencia antes de bajar.' },
  { term: 'Análisis técnico', definition: 'Estudio de los movimientos del precio y los patrones de gráficos para predecir futuras tendencias.' },
  { term: 'Análisis fundamental', definition: 'Evaluación de los factores económicos y financieros que afectan el precio de un activo.' },
  { term: 'Indicadores técnicos', definition: 'Herramientas matemáticas utilizadas para analizar los movimientos del mercado.' },
  { term: 'Media móvil', definition: 'Indicador que suaviza los precios de un activo para identificar tendencias.' },
  { term: 'MACD', definition: 'Indicador que muestra la relación entre dos medias móviles de un activo.' },
  { term: 'RSI', definition: 'Índice de Fuerza Relativa, indicador que mide la velocidad y el cambio de los movimientos de precios.' },
  { term: 'Estocástico', definition: 'Indicador que compara el precio de cierre de un activo con su rango de precios durante un periodo de tiempo.' },
  { term: 'Bollinger Bands', definition: 'Indicador que utiliza dos desvíos estándar por encima y por debajo de una media móvil para mostrar la volatilidad.' },
  { term: 'CandleStick', definition: 'Tipo de gráfico utilizado en análisis técnico que muestra el precio de apertura, cierre, máximo y mínimo de un activo en un periodo de tiempo.' },
  { term: 'Hacía abajo', definition: 'Movimiento del precio de un activo hacia abajo, generalmente relacionado con una tendencia bajista.' },
  { term: 'Hacía arriba', definition: 'Movimiento del precio de un activo hacia arriba, generalmente relacionado con una tendencia alcista.' },
  { term: 'Breakout', definition: 'Cuando el precio de un activo atraviesa un nivel de soporte o resistencia, generalmente precedido de una alta volatilidad.' },
  { term: 'Retorno', definition: 'Ganancia o pérdida en una operación, normalmente expresada como un porcentaje.' },
  { term: 'Apalancamiento', definition: 'Uso de capital prestado para aumentar la exposición en el mercado.' },
  { term: 'Margin Call', definition: 'Notificación que se recibe cuando el saldo de la cuenta cae por debajo del margen mínimo necesario.' },
  { term: 'Papel', definition: 'Acción o instrumento financiero que se cotiza en el mercado de valores.' },
  { term: 'Límite de orden', definition: 'Orden para comprar o vender un activo a un precio específico o mejor.' },
  { term: 'Orden de mercado', definition: 'Orden para comprar o vender un activo inmediatamente al precio actual del mercado.' },
  { term: 'Corto', definition: 'Operación en la que se vende un activo con la esperanza de que su precio disminuirá.' },
  { term: 'Largo', definition: 'Operación en la que se compra un activo con la esperanza de que su precio aumentará.' },
  { term: 'Apertura de mercado', definition: 'Momento en que el mercado abre al inicio de la sesión de trading.' },
  { term: 'Cierre de mercado', definition: 'Momento en que el mercado cierra al final de la sesión de trading.' },
  { term: 'Orden OCO', definition: 'Orden "One Cancels Other" (Uno Cancela Otro) que combina una orden límite con una orden de stop.' },
  { term: 'Orden If Done', definition: 'Orden que ejecuta una segunda orden solo si la primera se ejecuta con éxito.' },
  { term: 'Slippage', definition: 'Desviación entre el precio esperado de una operación y el precio real de ejecución.' },
  { term: 'Scalping', definition: 'Estrategia de trading que busca obtener pequeñas ganancias mediante la ejecución de numerosas operaciones a lo largo del día.' },
  { term: 'Swing trading', definition: 'Estrategia de trading que se centra en capturar movimientos a corto y medio plazo en los mercados.' },
  { term: 'Day trading', definition: 'Estilo de trading que implica comprar y vender activos dentro de la misma jornada de negociación.' },
  { term: 'Carry trade', definition: 'Estrategia que implica pedir prestado en una moneda de bajo interés y invertir en una de mayor interés.' },
  { term: 'Portfolio', definition: 'Conjunto de activos financieros que posee un inversor.' },
  { term: 'Diversificación', definition: 'Estrategia de inversión que implica distribuir el capital entre diferentes activos para reducir el riesgo.' },
  { term: 'Hedge', definition: 'Estrategia para proteger una inversión mediante la toma de una posición opuesta en un activo relacionado.' },
  { term: 'Leverage ratio', definition: 'Proporción entre el capital propio de un inversor y el capital prestado para realizar una operación.' },
  { term: 'ETF', definition: 'Fondo cotizado en bolsa que sigue el rendimiento de un índice, una materia prima u otro activo.' },
  { term: 'Futuro', definition: 'Contrato financiero que obliga a comprar o vender un activo en el futuro a un precio previamente acordado.' },
  { term: 'Acción', definition: 'Título de propiedad emitido por una empresa, que representa una fracción de su capital social.' },
  { term: 'Forex', definition: 'Mercado de divisas donde se intercambian monedas de diferentes países.' },
  { term: 'Comodity', definition: 'Activo básico que se intercambia en los mercados financieros, como petróleo, oro o grano.' },
  { term: 'CFD', definition: 'Contrato por diferencia, un acuerdo entre dos partes para intercambiar la diferencia de valor de un activo entre el momento de apertura y cierre de la posición.' },
  { term: 'Dividendos', definition: 'Pagos periódicos realizados por una empresa a sus accionistas, generalmente basados en las ganancias de la empresa.' },
  { term: 'IPO', definition: 'Oferta pública inicial, proceso mediante el cual una empresa se cotiza en la bolsa de valores por primera vez.' },
  { term: 'Volumen', definition: 'Cantidad de activos negociados durante un periodo de tiempo.' },
  { term: 'Liquidez', definition: 'Facilidad con la que un activo puede ser comprado o vendido en el mercado sin afectar su precio.' },
  { term: 'Activos', definition: 'Cualquier cosa de valor que pueda ser intercambiada o utilizada como inversión, como acciones, bonos, bienes raíces, etc.' },
  { term: 'Bonos', definition: 'Instrumento de deuda emitido por gobiernos o empresas que promete pagar un interés fijo durante un tiempo determinado.' },
  { term: 'Banca central', definition: 'Entidad responsable de la política monetaria de un país, como la emisión de dinero y la regulación de tasas de interés.' },
  { term: 'Inflación', definition: 'Aumento generalizado y sostenido de los precios de los bienes y servicios en una economía durante un período prolongado.' },
  { term: 'Recesión', definition: 'Periodo de declive económico caracterizado por una disminución de la actividad económica, el empleo y la producción.' },
  { term: 'Ciclo económico', definition: 'Las fluctuaciones a largo plazo de la actividad económica de un país, incluyendo expansiones y contracciones.' },
  { term: 'Forex trading', definition: 'La compra y venta de monedas extranjeras con el objetivo de obtener ganancias.' },
  { term: 'Valor nominal', definition: 'El valor facial de una acción o bono, que no refleja su valor de mercado real.' },
  { term: 'Precio de mercado', definition: 'El precio al que un activo se compra y vende en el mercado en un momento determinado.' },
  { term: 'Subida de tipos de interés', definition: 'Cuando los bancos centrales aumentan las tasas de interés, generalmente como respuesta a una economía recalentada o inflación alta.' },
  { term: 'Tipo de cambio', definition: 'El valor de una moneda frente a otra, determinado por el mercado de divisas.' },
  { term: 'FOMO', definition: 'Fear of Missing Out, el miedo a perderse una oportunidad de inversión.' },
  { term: 'Rally', definition: 'Un aumento significativo en el precio de un activo durante un período corto de tiempo.' },
  { term: 'Crash', definition: 'Una caída abrupta y significativa en el precio de un activo o en todo el mercado.' },
  { term: 'Bear Market', definition: 'Mercado en el que los precios de los activos están en tendencia bajista.' },
  { term: 'Bull Market', definition: 'Mercado en el que los precios de los activos están en tendencia alcista.' },
  { term: 'Dividend yield', definition: 'El rendimiento del dividendo de una acción, calculado como el dividendo anual dividido por el precio de la acción.' },
  { term: 'Dollar Cost Averaging', definition: 'Estrategia de inversión que implica invertir una cantidad fija de dinero en un activo a intervalos regulares.' },
  { term: 'Contratación de futuros', definition: 'Acuerdo para comprar o vender un activo en una fecha futura a un precio determinado.' },
  { term: 'Equity', definition: 'El valor neto de una cuenta de trading, que es el saldo más cualquier ganancia o pérdida no realizada.' }
];

  
  function displayDiccionary(filtered = diccionary) {
    const container = document.getElementById('diccionaryList');
    container.innerHTML = '';
  
    if (filtered.length === 0) {
      container.innerHTML = '<p>No se encontraron términos.</p>';
      return;
    }
  
    filtered.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'card mb-2';
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${entry.term}</h5>
          <p class="card-text">${entry.definition}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  function searchDictionary() {
    const query = document.getElementById('searchTerm').value.toLowerCase();
    const filtered = diccionary.filter(entry => 
      entry.term.toLowerCase().includes(query) ||
      entry.definition.toLowerCase().includes(query)
    );
    displayDiccionary(filtered);
  }
  
  // Inicialmente mostramos todos los términos
  displayDiccionary();
  