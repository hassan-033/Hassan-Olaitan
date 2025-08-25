export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate software engineer with a strong foundation in computer science and over 5 years of professional experience.
            </p>
            <p className="text-gray-600">
              I thrive on solving complex problems and am always eager to learn new technologies.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-2">Skills</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Full-Stack Development</li>
                  <li>• Data Analysis</li>
                  <li>• Agile Methodology</li>
                  <li>• Technical Leadership</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-2">Technologies</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• JavaScript/TypeScript</li>
                  <li>• React / Next.js</li>
                  <li>• Node.js / Python</li>
                  <li>• Artificial Intelligence</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-2">Education</h4>
                <p className="text-gray-600">BSc. Physics</p>
                <p className="text-gray-600">Air Force Institute of Technology, Kaduna</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-2">Experience</h4>
                <p className="text-gray-600">Web Developer at 14Eter Limited</p>
                <p className="text-gray-600">3+ Years of Professional Experience</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Certified Web Developer</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Agile Methodologies Certified</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AI Career Essentials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}