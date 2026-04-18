import React from "react";
import { Bell, Settings } from "lucide-react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Analysis from "./pages/Analysis";
import Upload from "./pages/Upload";
import Benchmarks from "./pages/Benchmarks";
import Marketplace from "./pages/Marketplace";

const navItems = [
  { label: "Upload", path: "/" },
  { label: "Analysis", path: "/analysis" },
  { label: "Market Benchmarks", path: "/benchmarks" },
  { label: "Legal Marketplace", path: "/marketplace" },
];

function TopNav() {
  return (
    <header className="dj-top-nav">
      <div className="dj-brand">Digital Jurist</div>

      <nav className="dj-top-links" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `dj-top-link${isActive ? " active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="dj-top-actions">
        <button className="dj-icon-btn" aria-label="Notifications">
          <Bell size={16} />
        </button>
        <button className="dj-icon-btn" aria-label="Settings">
          <Settings size={16} />
        </button>
        <img
          className="dj-avatar"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
          alt="User profile"
        />
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="dj-shell">
        <TopNav />
        <main className="dj-main">
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/benchmarks" element={<Benchmarks />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
