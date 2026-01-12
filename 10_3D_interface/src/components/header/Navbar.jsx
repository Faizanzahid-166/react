// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "My List", path: "/my-list" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // NavLink class helper (React Router v6)
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "text-green-500" : "text-white hover:text-red-400"
    }`;

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-bold">3D Models Dashboard</div>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="p-1"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-3 py-4 md:hidden z-50">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)} // close menu on click
                className={linkClass}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
