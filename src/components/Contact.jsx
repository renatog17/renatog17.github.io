import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900 text-white px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-slate-300 mb-6">
        Feel free to reach out for projects or collaborations.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="mailto:renato@example.com"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-slate-900 transition"
        >
          Send Email
        </a>

        <a
          href="https://wa.me/5571999416735"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
        >
          <FaWhatsapp size={22} />
          WhatsApp
        </a>
      </div>
    </section>
  );
}
