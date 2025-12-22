// src/App.jsx
import React, { useState, useEffect } from "react";
import "./styles/App.css";

import DashboardLayout from "./components/DashboardLayout";
import SearchCrypto from "./components/SearchCrypto";
import ConvertCrypto from "./components/ConvertCrypto";
import ConversionResult from "./components/ConversionResult";
import FavoritesHistory from "./components/FavoritesHistory";
import LoginForm from "./components/LoginForm";

import { searchCryptocurrencies, convertCrypto } from "./api/cryptoApi";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard | convert | history | login

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Conversion state
  const [fromSymbol, setFromSymbol] = useState("BNB");
  const [toSymbol, setToSymbol] = useState("BTC");
  const [amount, setAmount] = useState(900);
  const [conversionResult, setConversionResult] = useState(null);

  // Favorites & history
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  // Login state (front-end only)
  const [user, setUser] = useState(null); // { email } or null

  // Load favorites & history from localStorage on first render
  useEffect(() => {
    const storedFavorites = localStorage.getItem("kc_favorites");
    const storedHistory = localStorage.getItem("kc_history");

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Save favorites & history to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("kc_favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("kc_history", JSON.stringify(history));
  }, [history]);

  // Handle search
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const results = await searchCryptocurrencies(searchQuery);
    setSearchResults(results);
  };

  // Handle conversion
  const handleConvert = async () => {
    try {
      const data = await convertCrypto(fromSymbol, toSymbol, amount);
      const now = new Date();

      const record = {
        id: Date.now(),
        fromSymbol,
        toSymbol,
        amount,
        resultAmount: data.resultAmount,
        rate: data.rate,
        timestamp: now.toISOString(),
      };

      setConversionResult(record);
      setHistory((prev) => [record, ...prev]);
      setActiveTab("dashboard");
    } catch (error) {
      console.error("Conversion error:", error);
      alert("Conversion failed. Check console for details.");
    }
  };

  // Save current conversion to favorites
  const handleSaveFavorite = () => {
    if (!conversionResult) return;
    const exists = favorites.some(
      (fav) =>
        fav.fromSymbol === conversionResult.fromSymbol &&
        fav.toSymbol === conversionResult.toSymbol
    );
    if (!exists) {
      setFavorites((prev) => [
        ...prev,
        {
          id: Date.now(),
          fromSymbol: conversionResult.fromSymbol,
          toSymbol: conversionResult.toSymbol,
        },
      ]);
    }
  };

  // Handle login (fake)
  const handleLogin = (email, password) => {
    if (email && password) {
      setUser({ email });
      setActiveTab("dashboard");
    } else {
      alert("Please enter email and password.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setActiveTab("login");
  };

  return (
    <div className="app">
      <DashboardLayout
        activeTab={activeTab}
        onTabChange={setActiveTab}
        user={user}
        onLogout={handleLogout}
      >
        {activeTab === "dashboard" && (
          <div className="dashboard-grid">
            <SearchCrypto
              query={searchQuery}
              onQueryChange={setSearchQuery}
              onSearch={handleSearch}
              results={searchResults}
            />

            <ConvertCrypto
              fromSymbol={fromSymbol}
              toSymbol={toSymbol}
              amount={amount}
              onFromChange={setFromSymbol}
              onToChange={setToSymbol}
              onAmountChange={setAmount}
              onConvert={handleConvert}
            />

            <LoginForm compact onLogin={handleLogin} user={user} />

            <ConversionResult
              conversion={conversionResult}
              onSaveToHistory={() => {
                if (conversionResult) {
                  setHistory((prev) => [conversionResult, ...prev]);
                }
              }}
              onSaveFavorite={handleSaveFavorite}
            />

            <FavoritesHistory
              favorites={favorites}
              history={history}
              onSelectFavorite={(fav) => {
                setFromSymbol(fav.fromSymbol);
                setToSymbol(fav.toSymbol);
                setActiveTab("convert");
              }}
            />
          </div>
        )}

        {activeTab === "convert" && (
          <ConvertCrypto
            fromSymbol={fromSymbol}
            toSymbol={toSymbol}
            amount={amount}
            onFromChange={setFromSymbol}
            onToChange={setToSymbol}
            onAmountChange={setAmount}
            onConvert={handleConvert}
          />
        )}

        {activeTab === "history" && (
          <FavoritesHistory
            favorites={favorites}
            history={history}
            onSelectFavorite={(fav) => {
              setFromSymbol(fav.fromSymbol);
              setToSymbol(fav.toSymbol);
              setActiveTab("convert");
            }}
          />
        )}

        {activeTab === "login" && (
          <LoginForm onLogin={handleLogin} user={user} />
        )}
      </DashboardLayout>
    </div>
  );
}

export default App;
