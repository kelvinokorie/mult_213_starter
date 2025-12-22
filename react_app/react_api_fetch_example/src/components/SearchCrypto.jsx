// src/components/SearchCrypto.jsx
import React from "react";

function SearchCrypto({ query, onQueryChange, onSearch, results }) {
  return (
    <div className="card">
      <h2 className="card-title">Kelvin Crypto Dashboard</h2>
      <label className="field-label">Search Cryptocurrency</label>
      <input
        className="field-input"
        type="text"
        placeholder="Enter"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button className="btn-primary" onClick={onSearch}>
        SEARCH
      </button>

      <div className="card-footer">
        <span>Loaded {results.length} cryptocurrencies...</span>
      </div>

      {results.length > 0 && (
        <ul className="result-list">
          {results.map((coin) => (
            <li key={coin.id} className="result-item">
              <span className="result-name">{coin.name}</span>
              <span className="result-symbol">{coin.symbol}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchCrypto;
