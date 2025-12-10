import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-900 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {t("hero.title")}
      </h1>

      <p className="text-lg md:text-2xl text-slate-300 max-w-xl">
        {t("hero.subtitle")}
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/renatog17"
          className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-slate-900 transition"
        >
          {t("hero.github")}
        </a>

        <a
          href="https://www.linkedin.com/in/renato-oliveira-9575781b9/"
          className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-slate-900 transition"
        >
          {t("hero.linkedin")}
        </a>
      </div>
    </section>
  );
}
