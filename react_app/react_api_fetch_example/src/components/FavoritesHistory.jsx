// src/components/FavoritesHistory.jsx
import React, { useState } from "react";

function formatTimestamp(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleString();
}

function FavoritesHistory({ favorites, history, onSelectFavorite }) {
  const [activeTab, setActiveTab] = useState("favorites");

  return (
    <div className="card">
      <div className="card-tabs">
        <button
          className={activeTab === "favorites" ? "tab active" : "tab"}
          onClick={() => setActiveTab("favorites")}
        >
          FAVORITES
        </button>
        <button
          className={activeTab === "history" ? "tab active" : "tab"}
          onClick={() => setActiveTab("history")}
        >
          HISTORY
        </button>
      </div>

      {activeTab === "favorites" && (
        <div className="favorites-section">
          {favorites.length === 0 && <p>No favorites yet.</p>}

          {favorites.map((fav) => (
            <button
              key={fav.id}
              className="favorite-item"
              onClick={() => onSelectFavorite(fav)}
            >
              {fav.fromSymbol} → {fav.toSymbol}
            </button>
          ))}
        </div>
      )}

      {activeTab === "history" && (
        <div className="history-section">
          {history.length === 0 && <p>No history yet.</p>}

          {history.map((item) => (
            <div key={item.id} className="history-item">
              <div className="history-main">
                {item.amount} {item.fromSymbol} ={" "}
                {item.resultAmount.toFixed(4)} {item.toSymbol}
              </div>
              <div className="history-sub">
                1 {item.fromSymbol} = {item.rate} {item.toSymbol}
              </div>
              <div className="history-time">
                {formatTimestamp(item.timestamp)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesHistory;
