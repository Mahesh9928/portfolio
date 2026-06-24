export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">
          Mahesh Vashishth
        </h1>

        <h2 className="text-2xl text-sky-400 mb-6">
          Backend Developer
        </h2>

        <p className="max-w-2xl text-lg text-gray-300">
          NestJS | PostgreSQL | Prisma | Docker | Redis
        </p>

        <button className="mt-8 bg-sky-500 px-6 py-3 rounded-lg">
          Contact Me
        </button>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>

        <p className="text-gray-300 leading-8">
          I am a Backend Developer specializing in NestJS,
          PostgreSQL, Prisma ORM, Docker and Redis.
          I enjoy building scalable APIs and real-world
          backend systems.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800 p-4 rounded">NestJS</div>
          <div className="bg-slate-800 p-4 rounded">PostgreSQL</div>
          <div className="bg-slate-800 p-4 rounded">Prisma</div>
          <div className="bg-slate-800 p-4 rounded">Docker</div>
          <div className="bg-slate-800 p-4 rounded">Redis</div>
          <div className="bg-slate-800 p-4 rounded">Node.js</div>
          <div className="bg-slate-800 p-4 rounded">Git</div>
          <div className="bg-slate-800 p-4 rounded">REST API</div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">
          Projects
        </h2>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">
            BookWrench
          </h3>

          <p className="text-gray-300">
            Production-grade service management platform
            with Invoice Management, Estimate Management,
            PDF Generation, Email Integration and
            Multi-Tenant Architecture.
          </p>
        </div>
      </section>

      {/* Contact */}
     <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
  <h2 className="text-3xl font-bold mb-4">
    Contact
  </h2>

  <div className="space-y-3 text-gray-300">
    <p>
      Email: maheshvashishth713@gmail.com
    </p>

    <p>
      GitHub:
      <a
        href="https://github.com/Mahesh9928"
        target="_blank"
        className="text-sky-400 ml-2"
      >
        Mahesh9928
      </a>
    </p>

    <p>
      LinkedIn:
      <a
        href="https://www.linkedin.com/in/mahesh-vashishth-761074140/"
        target="_blank"
        className="text-sky-400 ml-2"
      >
        View Profile
      </a>
    </p>
  </div>
</section>
    </main>
  );
}