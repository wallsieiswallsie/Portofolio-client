import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: "Home", id: "home" },
    { name: "Tools", id: "tools" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certification", id: "certification" },
  ];

  const handleNavClick = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      // tunggu sampai halaman home selesai dirender
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-end h-16">
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base">
          {links.map((l) => (
            <li key={l.name}>
              <button
                onClick={() => handleNavClick(l.id)}
                className="hover:opacity-80 transition"
              >
                {l.name}
              </button>
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
              <button
                onClick={() => handleNavClick(l.id)}
                className="block py-1 hover:opacity-80 transition text-left"
              >
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}