export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Check my Resume</h2>
          <div className="mt-2 h-1 w-40 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm relative pl-12 border-l-4 border-blue-600">
            <span className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              1
            </span>
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Physics
            </h3>
            <p className="text-gray-600 mt-1">
              Air Force Institute of Technology
            </p>
            <p className="text-gray-500 mt-2">2024 - Current</p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              {/* <li>GPA: 3.8/4.0</li> */}
              <li>
                Relevant Coursework: Computational Physics(Python), Numerical
                Methods, Data Analysis and Visualization
              </li>
              <li>
                Developing analytical and coding skills relating to software
                development
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm relative pl-12 border-l-4 border-purple-600">
            <span className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
              2
            </span>
            <h3 className="text-xl font-semibold">
              Front-end Developemnt Training
            </h3>
            <p className="text-gray-600 mt-1">Online Resources and Projects</p>
            {/* <p className="text-gray-500 mt-2">2019</p> */}
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>
                Built responsive websites using HTML, CSS, JavaScript, React.js
              </li>
              <li>
                Practiced version control (Git/GitHub) & modern frameworks
                (Vite, Tailwind)
              </li>
              <li>
                Created portfolio projects showcasing UI/UX and interactivity
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm relative pl-12 border-l-4 border-green-600">
            <span className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
              3
            </span>
            <h3 className="text-xl font-semibold">
              Online Courses & Certifications
            </h3>
            <p className="text-gray-600 mt-1">Alison, Udemy, HP Life, ALX</p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>Diploma in HTML & CSS</li>
              <li>Master JavaScript from Basics to Advanced</li>
              <li>Agile Methodologies</li>
              <li>AI Career Essentials</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm relative pl-12 border-l-4 border-red-500">
            <span className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
              4
            </span>
            <h3 className="text-xl font-semibold">Work Experience</h3>
            <p className="text-gray-600 mt-1">
              Ramlad Global Technologies (Contract)
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>
                Developed and deployed a **solar energy company website** (for
                client project)
              </li>
              <li>
                Built responsive UI with **HTML, CSS, JavaScript, and React**
              </li>
              <li>
                Optimized performance and mobile usability for customer reach
              </li>
              <li>
                Collaborated directly with client to meet design & business
                needs
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm relative pl-12 border-l-4 border-yellow-500">
            <span className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
              5
            </span>
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <p className="text-gray-600 mt-1">Front-end Technologies</p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>Languages: JavaScript, Python, C++</li>
              <li>Frameworks: React, Bootstrap, Tailwind CSS</li>
              <li>Tools: Git, Vite, Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
