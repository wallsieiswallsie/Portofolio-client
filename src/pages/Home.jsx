// HomePage.jsx
export default function HomePage() {
  return (
    <div className="font-sans text-gray-900 pt-24 scroll-smooth">
      {/* Home Section */}
      <section id="home" className="max-w-6xl mx-auto px-6 pb-20 md:flex items-center justify-between gap-10">
        {/* Right Side Photo */}
        <div className="md:w-1/2 mt-10 md:mt-0 mb-10 flex justify-center">
          <img
            src="/selfpic.jpg"
            alt="Self"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-4 border-maroon"
          />
        </div>
        
        {/* Left Side Content */}
        <div className="space-y-6 md:w-1/2">
          <h2 className="text-3xl font-bold text-maroon">About Me</h2>
          <p className="leading-relaxed text-gray-700">
            Saya seorang mahasiswa Computer Science yang tertarik pada pengembangan web modern,
            khususnya React, Firebase, serta pengelolaan data. Saya suka membangun aplikasi yang
            rapi, fungsional, dan mudah dipakai.
          </p>

          <h2 className="text-2xl font-semibold text-maroon pt-4">Education</h2>
          <p className="text-gray-700">
            Undergraduate Computer Science Student at BINUS University
          </p>

          <h2 className="text-2xl font-semibold text-maroon pt-4">Contact</h2>
          <ul className="space-y-1 text-gray-700">
            <li>Telp: 08xxxxxxxxxx</li>
            <li>Email: email@gmail.com</li>
            <li>LinkedIn: linkedin.com/in/username</li>
            <li>Github: github.com/username</li>
            <li>Instagram: @username</li>
          </ul>

          <h2 className="text-2xl font-semibold text-maroon pt-4">Lokasi</h2>
          <p className="text-gray-700">Indonesia</p>

          <a
            href="/cv.pdf"
            download
            className="inline-block mt-6 bg-maroon text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="max-w-6xl mx-auto px-6 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-maroon mb-6">Tools</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>React.js & Next.js</li>
          <li>Firebase (Auth, Firestore, Hosting)</li>
          <li>Tailwind CSS & Responsive Design</li>
          <li>JavaScript, HTML, CSS</li>
          <li>Data Management & Excel Advanced</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-maroon mb-6">Experience</h2>
        <p className="text-gray-700">
          Saya memiliki pengalaman membangun aplikasi web personal dan proyek kelompok,
          terutama menggunakan React, Firebase, dan Tailwind CSS.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-maroon mb-6">Projects</h2>
        <p className="text-gray-700">
          Contoh proyek termasuk aplikasi catatan pribadi, marketplace sederhana, dan integrasi API.
        </p>
      </section>

      {/* Certification Section */}
      <section id="certification" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-maroon mb-6">Certification</h2>
        <p className="text-gray-700">
          Beberapa sertifikasi yang dimiliki termasuk React Developer, JavaScript, dan Cloud Services.
        </p>
      </section>
    </div>
  );
}