// src/components/ConvertCrypto.jsx
import React from "react";

function ConvertCrypto({
  fromSymbol,
  toSymbol,
  amount,
  onFromChange,
  onToChange,
  onAmountChange,
  onConvert,
}) {
  return (
    <div className="card">
      <h2 className="card-title">Convert Crypto</h2>

      <label className="field-label">From</label>
      <div className="field-row">
        <input
          className="field-input"
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
        <input
          className="field-input"
          type="text"
          value={fromSymbol}
          onChange={(e) => onFromChange(e.target.value.toUpperCase())}
        />
      </div>

      <label className="field-label">To</label>
      <input
        className="field-input"
        type="text"
        value={toSymbol}
        onChange={(e) => onToChange(e.target.value.toUpperCase())}
      />

      <button className="btn-primary" onClick={onConvert}>
        CONVERT
      </button>
    </div>
  );
}

export default ConvertCrypto;
