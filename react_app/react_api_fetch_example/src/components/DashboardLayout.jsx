// src/components/DashboardLayout.jsx
import React from "react";

function DashboardLayout({ activeTab, onTabChange, user, onLogout, children }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>Kelvin Crypto Dashboard</h1>
        <div className="layout-header-right">
          <nav className="layout-tabs">
            <button
              className={activeTab === "dashboard" ? "tab active" : "tab"}
              onClick={() => onTabChange("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={activeTab === "convert" ? "tab active" : "tab"}
              onClick={() => onTabChange("convert")}
            >
              Convert
            </button>
            <button
              className={activeTab === "history" ? "tab active" : "tab"}
              onClick={() => onTabChange("history")}
            >
              Favorites & History
            </button>
            <button
              className={activeTab === "login" ? "tab active" : "tab"}
              onClick={() => onTabChange("login")}
            >
              Login
            </button>
          </nav>
          <div className="layout-user">
            {user ? (
              <>
                <span className="user-email">{user.email}</span>
                <button className="btn-secondary" onClick={onLogout}>
                  Log Out
                </button>
              </>
            ) : (
              <span className="user-email">Guest</span>
            )}
          </div>
        </div>
      </header>

      <main className="layout-content">{children}</main>
    </div>
  );
}

export default DashboardLayout;
