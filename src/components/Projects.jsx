const projects = [
  {
    title: "Método Poliglota",
    description:
      "Flashcard app built with Spring Security, Spring Boot, and React.",
    tech: "Java • Spring Boot • React",
    link: "https://github.com/renatog17/metodopoliglota-front",
  },
  {
    title: "Appointment",
    description:
      "Scheduling system made with full auth, CRUD, and frontend integration.",
    tech: "Java • Spring Boot • PostgreSQL",
    link: "https://zendaavip.com.br/",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-slate-100 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-slate-700 mb-3">{p.description}</p>
              <p className="text-sm text-slate-500 mb-4">{p.tech}</p>

              <a
                href={p.link}
                target="_blank"
                className="inline-block px-4 py-2 border rounded-lg hover:bg-slate-900 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
