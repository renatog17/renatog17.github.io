import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow p-4 flex justify-end">
      <LanguageSwitcher />
    </nav>
  );
}
