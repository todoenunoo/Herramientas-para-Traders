function updateMarketTimes() {
  // Definición de mercados con zona horaria y horarios de apertura y cierre
  const markets = [
    { id: 'London', timeZone: 'Europe/London', open: 8, close: 16 },
    { id: 'NY', timeZone: 'America/New_York', open: 9.5, close: 16 },
    { id: 'Tokyo', timeZone: 'Asia/Tokyo', open: 9, close: 15 },
    { id: 'Sydney', timeZone: 'Australia/Sydney', open: 10, close: 16 }
  ];

  markets.forEach(market => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-ES', { timeZone: market.timeZone });
    document.getElementById('time' + market.id).innerText = timeString;

    const nowInMarket = new Date(now.toLocaleString('en-US', { timeZone: market.timeZone }));
    const hours = nowInMarket.getHours();
    const minutes = nowInMarket.getMinutes();
    const currentTimeDecimal = hours + minutes / 60;

    const status = (currentTimeDecimal >= market.open && currentTimeDecimal < market.close) ? 'Abierto' : 'Cerrado';
    document.getElementById('status' + market.id).innerText = status;
  });
}

// Actualización cada segundo
setInterval(updateMarketTimes, 1000);
