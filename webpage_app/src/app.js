import { renderMessage } from "./dom.js";
import { getDogImage, getCatFact, getFoxImage } from "./api.js";

const dogForm = document.querySelector("#dog-form");
const dogOutput = document.querySelector("#dog-output");

const catForm = document.querySelector("#cat-form");
const catOutput = document.querySelector("#cat-output");

const foxForm = document.querySelector("#fox-form");
const foxOutput = document.querySelector("#fox-output");

// Dog section
dogForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  renderMessage(dogOutput, "Loading dog image…");

  try {
    const imageUrl = await getDogImage();
    renderMessage(dogOutput, `<img src="${imageUrl}" alt="Random Dog" style="max-width:100%"/>`);
  } catch (err) {
    renderMessage(dogOutput, `Error: ${err.message}`);
  }
});

// Cat section
catForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  renderMessage(catOutput, "Loading cat fact…");

  try {
    const fact = await getCatFact();
    renderMessage(catOutput, `<p>${fact}</p>`);
  } catch (err) {
    renderMessage(catOutput, `Error: ${err.message}`);
  }
});

// Fox section
foxForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  renderMessage(foxOutput, "Loading fox image…");

  try {
    const imageUrl = await getFoxImage();
    renderMessage(foxOutput, `<img src="${imageUrl}" alt="Random Fox" style="max-width:100%"/>`);
  } catch (err) {
    renderMessage(foxOutput, `Error: ${err.message}`);
  }
});
