// src/components/ConversionResult.jsx
import React from "react";

function formatTimestamp(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleString();
}

function ConversionResult({ conversion, onSaveToHistory, onSaveFavorite }) {
  if (!conversion) {
    return (
      <div className="card">
        <h2 className="card-title">Conversion Result</h2>
        <p>No conversion yet. Try converting some crypto.</p>
      </div>
    );
  }

  const {
    amount,
    fromSymbol,
    toSymbol,
    resultAmount,
    rate,
    timestamp,
  } = conversion;

  return (
    <div className="card">
      <h2 className="card-title">Conversion Result</h2>

      <p className="conversion-main">
        {amount} {fromSymbol} = {resultAmount.toFixed(4)} {toSymbol}
      </p>

      <p className="conversion-sub">
        1 {fromSymbol} = {rate} {toSymbol}
      </p>

      <p className="conversion-time">{formatTimestamp(timestamp)}</p>

      <div className="card-actions">
        <button className="btn-secondary" onClick={onSaveToHistory}>
          SAVE TO HISTORY
        </button>
        <button className="btn-secondary" onClick={onSaveFavorite}>
          ADD TO FAVORITES
        </button>
      </div>
    </div>
  );
}

export default ConversionResult;
