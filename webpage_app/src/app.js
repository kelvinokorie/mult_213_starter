import { renderMessage } from "./dom.js";
import { getCryptoData, getCryptoList, getConversion} from "./api.js";

// Form + Output Elements
const searchForm = document.querySelector("#crypto-form");
const searchInput = document.querySelector("#crypto-input");
const resultsSection = document.querySelector("#crypto-results");

// Load crypto list on page load (BONUS)
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const list = await getCryptoList();
    renderMessage(
      resultsSection,
      `<p>Loaded ${list.length} cryptocurrencies. You can search any symbol above.</p>`
    );
  } catch (err) {
    renderMessage(resultsSection, `Error loading crypto list: ${err.message}`);
  }
});

// MAIN SEARCH FUNCTIONALITY
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const symbol = searchInput.value.trim().toUpperCase();
  if (!symbol) return;

  renderMessage(resultsSection, "Loading…");

  try {
    const data = await getCryptoData(symbol);

    if (!data || data.length === 0) {
      renderMessage(resultsSection, `<p>No results found for "${symbol}".</p>`);
      return;
    }
const History= await getConversion(symbol);

    let html = `<h3>Results for "${symbol}"</h3><ul>`;

    data.forEach((item) => {
      html += `
        <li class="crypto-item">
          <strong>${item.symbol}</strong> — ${item.source_exchange}<br>
          Lowest: <span>${item.lowest}</span> | 
          Highest: <span>${item.highest}</span>
        </li>
      `;
    });

// Conversion Elements
const convertForm = document.querySelector("#convert-form");
const convertFrom = document.querySelector("#convert-from");
const convertTo = document.querySelector("#convert-to");
const convertAmount = document.querySelector("#convert-amount");
const convertResults = document.querySelector("#convert-results");

// Conversion Handler
convertForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const from = convertFrom.value.trim().toUpperCase();
  const to = convertTo.value.trim().toUpperCase();
  const amount = convertAmount.value.trim();

  if (!from || !to || !amount) return;

  renderMessage(convertResults, "Converting…");

  try {
    const data = await getConversion(from, to, amount);

    if (!data || !data.result) {
      renderMessage(convertResults, "<p>Conversion failed.</p>");
      return;
    }
    console.log("kelvin");
console.log(data);
let convertednumber = data.result / amount;
let now = Date().toLocaleString();

    const html = `
      <h3>Conversion Result</h3>
      <div class="conversion-box">
        <p><strong>${amount} ${from}</strong> = <strong>${data.result} ${to}</strong></p>
        <p>Rate: 1 ${from} = ${convertednumber} ${to}</p>
        <p>Timestamp: ${now}</p>
      </div> 
    `;

    renderMessage(convertResults, html);
  } catch (err) {
    renderMessage(convertResults, `Error: ${err.message}`);
  }
});





    html += "</ul>";

    renderMessage(resultsSection, html);
  } catch (err) {
    renderMessage(resultsSection, `Error: ${err.message}`);
  }
});
