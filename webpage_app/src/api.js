// API functions to integrate with Open-Meteo Geocoding and Weather APIs
// Reference: https://open-meteo.com/

export async function getCryptoList() {
  const res = await fetch("https://api.freecryptoapi.com/v1/getCryptoList", {
    headers: {
      accept: "application/json",
      Authorization: "Bearer 561064adyru7pdv5718u"
    }
  });
  const data = await res.json();
  return data.data || [];
}

export async function getCryptoData(symbol) {
  const res = await fetch(`https://api.freecryptoapi.com/v1/getData?symbol=${symbol}`, {
    headers: {
      "Authorization": "Bearer 561064adyru7pdv5718u"
    }
  });
  const data = await res.json();
  return data.symbols || null;
}


export async function getConversion(from, to, amount) {
  const res = await fetch(
    `https://api.freecryptoapi.com/v1/getConversion?from=${from}&to=${to}&amount=${amount}`,
    {
      headers: {
        Authorization: "Bearer 561064adyru7pdv5718u"
      }
    }
  );

  // Get the JSON from the HTTP request response
  const data = await res.json();
  return data; // full response
}









/**
 * {
    "status": "success",
    "symbols": [
        {
            "symbol": "BNB",
            "last": "857.95",
            "last_btc": "0.0098218219946307",
            "lowest": "856.95",
            "highest": "858.79",
            "date": "2025-11-26 00:32:10",
            "daily_change_percentage": "-0.047765506314363",
            "source_exchange": "binance"
        }
    ]
}
 * 
 * 
 */
