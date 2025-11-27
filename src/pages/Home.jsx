import { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/ProfilePic.JPG";
import { 
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import { 
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiKnexdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiGooglecloud,
  SiGit,
} from "react-icons/si";
import KelulusanDicoding from "../assets/experience/KelulusanDicoding.jpg";
import InstagramGEx from "../assets/experience/InstagramGEx.PNG";
import Project1 from "../assets/project/Project_1.png"
import Project2 from "../assets/project/Project_2.png";
import PDFModal from "../components/PDFModal";
import CertificationCard from "../components/CertificationCard";

import certificate_1 from "../assets/certfication/certificate_1.png";
import certificate_2 from "../assets/certfication/certificate_2.png";
import certificate_3 from "../assets/certfication/certificate_3.png";

function ExperienceCard({ title, description, bgImage }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative rounded-2xl shadow-md shadow-gray-400 bg-cover bg-top h-72 flex flex-col justify-end text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 transition p-1 rounded-full"
      >
        <ChevronDown
          className={`text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div className="bg-maroon/90 p-5 rounded-2xl m-3 transition-all duration-300">
        <h3 className="text-2xl font-semibold drop-shadow-lg">{title}</h3>

        {/* Deskripsi muncul hanya jika open = true */}
        {open && (
          <p className="drop-shadow-lg text-sm mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ title, bgImage, to, label, color }) {
  return (
    <Link
      to={to}
      className="relative rounded-2xl shadow-md shadow-gray-400 bg-cover bg-top h-56 flex items-end p-5 text-white hover:opacity-90 transition"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Label pojok kanan atas */}
      <span
        className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${color}`}
      >
        {label}
      </span>

      <div className="bg-maroon/90 px-4 py-2 rounded-lg drop-shadow-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-xs">Click for more details</p>
      </div>
    </Link>
  );
}

export default function HomePage() {

  const [open, setOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  return (
    <div className="font-sans text-gray-900 pt-24 scroll-smooth">
      {/* Home Section */}
      <section id="home" className="max-w-6xl mx-auto px-6 pb-20 md:flex items-start mt-10 justify-between gap-20">
        {/* Right Side */}
        <div className="md:w-1/2 mt-10 md:mt-0 mb-10 items-center flex flex-col justify-center">
          <img
            src= {ProfilePic}
            alt="Profile Pic"
            className="w-80 h-80 md:w-80 md:h-80 object-cover rounded-full shadow-lg shadow-slate-600 border-6 border-maroon"
          />

          <h2 className="text-2xl font-semibold mt-10 mb-5 text-maroon pt-4">Contact</h2>
            <ul className="text-gray-700 
              flex flex-row gap-8 justify-center 
              md:grid md:grid-cols-2 md:gap-7"
            >

              {/* Email */}
              <li>
                <a 
                  href="mailto:nawal23alhamid@gmail.com"
                  className="flex items-center gap-3 hover:text-maroon transition"
                >
                  <span className="hidden md:inline">nawal23alhamid@gmail.com</span>
                  <Mail className="text-white text-xl mt-1 bg-maroon rounded-lg size-7 p-1" />
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a 
                  href="https://www.linkedin.com/in/nawal-alhamid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-maroon transition"
                >
                  <Linkedin className="text-white text-xl mt-1 bg-maroon rounded-lg size-7 p-1" />
                  <span className="hidden md:inline">in/nawal-alhamid</span>
                </a>
              </li>

              {/* GitHub */}
              <li className="justify-items-end">
                <a 
                  href="https://github.com/wallsieiswallsie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-maroon transition"
                >
                  <span className="hidden md:inline">wallsieiswallsie</span>
                  <Github className="text-white text-xl mt-1 bg-maroon rounded-lg size-7 p-1" />
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a 
                  href="https://instagram.com/nawalhamid_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-maroon transition"
                >
                  <Instagram className="text-white text-xl mt-1 bg-maroon rounded-lg size-7 p-1" />
                  <span className="hidden md:inline">@nawalhamid_</span>
                </a>
              </li>

            </ul>

        </div>
        
        {/* Left Side Content */}
        <div className="space-y-6 md:w-1/2">
          <h2 className="text-3xl font-bold text-maroon">About</h2>
          <p className="leading-relaxed text-gray-700">
            <strong className="font-bold text-lg">Hi! I'm Nawal</strong>, 
            <br></br>
            a university student with a
            strong enthusiasm for <strong>backend software development and UX
            flow design</strong>. I enjoy exploring new technologies and concepts, 
            believing that nothing in this world is truly unreasonable as 
            long as we take the time to understand it. Constant learning drives me, 
            and I thrive on turning complex ideas into practical and user-friendly solutions.
          </p>

          <div className="flex items-start gap-2 mb-2">
            <MapPin className="text-gray-500 text-xl flex-shrink-0 mt-1" />
            <p className="text-gray-600 font-medium text-lg">Tangerang, Banten, Indonesia</p>
          </div>

          <h2 className="text-2xl font-semibold text-maroon pt-4">Education</h2>
          <p className="text-gray-700 text-lg">
            <strong>Computer Science | 2024 - Present</strong>
            <br></br>
            BINUS University
          </p>
          
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

        <ul className="space-y-4 text-gray-700 text-lg flex flex-col gap-8 justify-center 
              md:grid md:grid-cols-4 md:gap-7">

          {/* React.js */}
          <li className="flex items-center gap-3">
            <SiReact className="text-maroon size-12 text-2xl" />
            React.js
          </li>

          {/* Node.js */}
          <li className="flex items-center gap-3">
            <SiNodedotjs className="text-maroon size-12 text-2xl" />
            Node.js
          </li>

          {/* PostgreSQL */}
          <li className="flex items-center gap-3">
            <SiPostgresql className="text-maroon size-12 text-2xl" />
            PostgreSQL
          </li>

          {/* Knex.js */}
          <li className="flex items-center gap-3">
            <SiKnexdotjs className="text-maroon size-12 text-2xl" />
            Knex.js (Query Builder)
          </li>

          {/* HTML */}
          <li className="flex items-center gap-3">
            <SiHtml5 className="text-maroon size-12 text-2xl" />
            HTML
          </li>

          {/* CSS */}
          <li className="flex items-center gap-3">
            <SiCss3 className="text-maroon size-12 text-2xl" />
            CSS
          </li>

          {/* Tailwind CSS */}
          <li className="flex items-center gap-3">
            <SiTailwindcss className="text-maroon size-12 text-2xl" />
            Tailwind CSS & Responsive Design
          </li>

          {/* JavaScript */}
          <li className="flex items-center gap-3">
            <SiJavascript className="text-maroon size-12 text-2xl" />
            JavaScript
          </li>

          {/* Google Cloud Storage */}
          <li className="flex items-center gap-3">
            <SiGooglecloud className="text-maroon size-12 text-2xl" />
            Google Cloud (Storage)
          </li>

          {/* Git */}
          <li className="flex items-center gap-3">
            <SiGit className="text-maroon size-12 text-2xl" />
            Git (Version Control)
          </li>

        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-maroon mb-10">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <ExperienceCard
            title="Bootcamp Participant – Full-Stack Development"
            description={
              <ul className="list-disc ml-5 space-y-1">
                <li>Completed intensive training in Front-End (React.js) and Back-End (JavaScript).</li>
                <li>Collaborated in a final team project to build a functional web product.</li>
                <li>Gained hands-on experience in modern web development and deployment.</li>
              </ul>
            }
            bgImage={KelulusanDicoding}
          />


          {/* Experience 2 */}
          <ExperienceCard
            title="Co-Founder & Operations Lead"
            description={
              <ul className="list-disc ml-5 space-y-1">
                <li>Co-founded and scaled a logistics and expedition company from scratch with my team.</li>
                <li>Achieved operational growth of 4 tons of shipments per month.</li>
                <li>Managed business development, day-to-day operations.</li>
              </ul>
            }
            bgImage={InstagramGEx}
          />


        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-maroon mb-10">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <ProjectCard
            title="GEx Internal Operations System"
            bgImage={Project1}
            to="/project_1"
            label="Personal"
            color="bg-pink-300"
          />

          <ProjectCard
            title="Dicoding Capstone - Growing (Notes App)"
            bgImage={Project2}
            to="/project_2"
            label="Team"
            color="bg-blue-300"
          />

        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-maroon mb-10">Certification</h2>

        {/* State Modal */}
        <PDFModal
          open={open}
          onClose={() => setOpen(false)}
          pdfSrc={currentPdf}
          title={currentTitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sertifikat 1 */}
          <CertificationCard
            title="Belajar Fundamental Back-End dengan JavaScript"
            thumbnail={certificate_1}
            pdfSrc="/certificates/certification_1.pdf"
            onOpen={() => {
              setCurrentPdf("/certificates/certification_1.pdf");
              setCurrentTitle("Dicoding — Fundamental BE JavaScript");
              setOpen(true);
            }}
          />

          {/* Sertifikat 2 */}
          <CertificationCard
            title="Belajar Membuat Aplikasi Web dengan React"
            thumbnail={certificate_2}
            pdfSrc="/certificates/certification_2.pdf"
            onOpen={() => {
              setCurrentPdf("/certificates/certification_2.pdf");
              setCurrentTitle("Dicoding — Aplikasi Web dengan React");
              setOpen(true);
            }}
          />

          {/* Sertifikat 3 */}
          <CertificationCard
            title="React & Back-End Developer Dicoding Bootcamp Batch 6"
            thumbnail={certificate_3}
            pdfSrc="/certificates/certification_3.pdf"
            onOpen={() => {
              setCurrentPdf("/certificates/certification_3.pdf");
              setCurrentTitle("Dicoding — Kelulusan Bootcamp Batch 6 (React & BE)");
              setOpen(true);
            }}
          />

        </div>
      </section>

    </div>
  );
}