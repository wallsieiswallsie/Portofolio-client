export default function Project_2() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 font-sans text-gray-900">
      <h1 className="text-3xl font-bold text-maroon mb-6">
        Dicoding Capstone - Growing (Notes App)
      </h1>

      {/* Peran */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-maroon mb-2">My Role</h2>
        <p className="text-gray-700 leading-relaxed">
          In this project, I contributed as a debugger and system refiner, focusing 
          on transforming our previous local-storage-based class assignment into a 
          more scalable cloud-integrated application. I performed extensive code 
          cleaning to improve modularity, fixed several re-rendering issues caused by 
          duplicated function calls, and restructured the architecture to separate 
          concerns more clearly. I also handled the migration of the entire logic—from 
          running entirely on local storage to utilizing a MySQL database—while integrating 
          the client and server layers to ensure smooth communication and stable application 
          behavior.
        </p>
      </section>

      {/* Dokumen */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-maroon mb-2">
          Related Documents
        </h2>

        <ul className="list-disc ml-5 text-gray-700 space-y-2">
          <li>
            <a
              href="https://drive.google.com/file/d/1hwA-MVT5WAyYcP6LAy7SJCA_K67gGh6e/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon hover:underline"
            >
              Project Documentation
            </a>
          </li>
        </ul>
      </section>

      {/* Repository */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-maroon mb-2">
          GitHub Repository
        </h2>
        <ul className="list-disc ml-5">
          <li>
            <a
              href="https://github.com/wallsieiswallsie/Growing-client.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon hover:underline"
            >
              Growing-client
            </a>
          </li>
          <li>
            <a
              href="https://github.com/wallsieiswallsie/Growing-server.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon hover:underline"
            >
              Growing-server
            </a>
          </li>
        </ul>
      </section>

      {/* Deploy */}
      <section>
        <h2 className="text-2xl font-semibold text-maroon mb-2">
          Live Deployment
        </h2>

        <a
          href="https://growing-client-7i1d.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-maroon hover:underline"
        >
          https://growing-client-7i1d.vercel.app/
        </a>
      </section>
    </div>
  );
}