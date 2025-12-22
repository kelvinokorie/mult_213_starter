// src/api/cryptoApi.js

const API_BASE = "https://api.freecryptoapi.com/v1";
const API_KEY = "561064adyru7pdv5718u";

// Get full crypto list
export async function searchCryptocurrencies(query) {
  try {
    const res = await fetch(`${API_BASE}/getCryptoList`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const data = await res.json();
    const allCoins = data.data || [];

    // Filter by query (name or symbol)
    return allCoins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error("Error fetching crypto list:", error);
    return [];
  }
}

// Get detailed data for a specific symbol (optional use)
export async function getCryptoData(symbol) {
  try {
    const res = await fetch(`${API_BASE}/getData?symbol=${symbol}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const data = await res.json();
    return data.symbols || null;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return null;
  }
}

// Convert crypto from one to another
export async function convertCrypto(fromSymbol, toSymbol, amount) {
  try {
    const res = await fetch(
      `${API_BASE}/getConversion?from=${fromSymbol}&to=${toSymbol}&amount=${amount}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const data = await res.json();

    // Expected structure: { result: number, rate: number, timestamp: string }
    return {
      resultAmount: data.result,
      rate: data.rate,
      timestamp: data.timestamp,
    };
  } catch (error) {
    console.error("Error converting crypto:", error);
    throw error;
  }
}
