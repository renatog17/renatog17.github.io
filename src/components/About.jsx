import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section  id="about" className="py-20 bg-white text-slate-800 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          {t("about.title")}
        </h2>

        <p className="text-lg leading-relaxed">
          {t("about.text")}{" "}
          <span className="font-semibold">React</span> {t("about.and")}
          <span className="font-semibold"> Spring Boot</span>.{" "}
          {t("about.more")}
        </p>
      </div>
    </section>
  );
}
