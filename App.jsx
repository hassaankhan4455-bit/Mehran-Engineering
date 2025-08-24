import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";
import Buy from "./pages/Buy";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Education from "./pages/Education";
import About from "./pages/About";
import Contact from "./pages/Contact";
import logo from "./assets/logo.jpg";

export default function App() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Mehran Engineering Logo" className="h-12 w-auto"/>
          <span className="text-xl font-bold text-blue-700">Mehran Engineering</span>
        </div>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/rentals">Rentals</Link>
          <Link to="/buy">Buy a Boiler</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/education">Education</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
