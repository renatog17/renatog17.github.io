import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const flags = {
    en: "US",
    pt: "BR",
    es: "ES",
  };

  const current = i18n.language || "en";

  return (
    <nav className="flex items-center justify-between px-0 py-4 bg-slate-900 text-white fixed top-0 left-0 w-full z-50">
      {/* Logo / Nome */}
      <div className="font-bold text-xl px-6">Renato Oliveira</div>
      <div className="hidden md:flex gap-6 px-6">
        <a href="#hero" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
      <div className="relative px-6">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-slate-700 transition"
        >
          <FaGlobe size={18} />
          <ReactCountryFlag
            countryCode={flags[current]}
            svg
            style={{ width: "1.2em", height: "1.2em" }}
          />
          {current.toUpperCase()}
        </button>

        {open && (
          <div className="absolute right-0 mt-0 bg-white text-slate-800 shadow-lg rounded p-2 w-32">
            <button
              onClick={() => changeLanguage("en")}
              className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-slate-100"
            >
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: "1.2em" }}
              />
              EN
            </button>
            <button
              onClick={() => changeLanguage("pt")}
              className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-slate-100"
            >
              <ReactCountryFlag
                countryCode="BR"
                svg
                style={{ width: "1.2em" }}
              />
              PT
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-slate-100"
            >
              <ReactCountryFlag
                countryCode="ES"
                svg
                style={{ width: "1.2em" }}
              />
              ES
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
