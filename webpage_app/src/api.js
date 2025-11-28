// API function to integrate with Open-Meteo Geocoding and Weather APIs
// Reference: https://open-meteo.com/

// Fetch a random dog image
export async function getDogImage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return data.message; // image URL
}

// Fetch a random cat fact
export async function getCatFact() {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  return data.fact; // fact string
}

// Fetch a random fox image
export async function getFoxImage() {
  const res = await fetch("https://randomfox.ca/floof/");
  const data = await res.json();
  return data.image; // image URL
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