// Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Tools", href: "#tools" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certification", href: "#certification" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-end h-16">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="hover:opacity-80 transition"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-gray-900"></span>
          <span className="block w-6 h-0.5 bg-gray-900"></span>
          <span className="block w-6 h-0.5 bg-gray-900"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-maroon text-white px-6 py-4 space-y-3 flex flex-col">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="block py-1 hover:opacity-80 transition"
                onClick={() => setOpen(false)}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}