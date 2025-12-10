import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
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
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-slate-200 transition text-slate-800"
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
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-32 text-slate-800">

          <button
            onClick={() => changeLanguage("en")}
            className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-slate-100"
          >
            <ReactCountryFlag countryCode="US" svg style={{ width: "1.2em" }} />
            EN
          </button>

          <button
            onClick={() => changeLanguage("pt")}
            className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-slate-100"
          >
            <ReactCountryFlag countryCode="BR" svg style={{ width: "1.2em" }} />
            PT
          </button>

          <button
            onClick={() => changeLanguage("es")}
            className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-slate-100"
          >
            <ReactCountryFlag countryCode="ES" svg style={{ width: "1.2em" }} />
            ES
          </button>

        </div>
      )}
    </div>
  );
}
