

const aboutData = {
  skills: [
    "Front-End Development",
    "Machine Learning & AI",
    "Data Analysis",
    "Technical Leadership",
    "AI Engineering and LLM's"
  ],
  technologies: [
    "React / TypeScript",
    "Python / C++",
    "Tailwind / Bootstrap",
    "JavaScript / DOM",
    "SQL / Database"
  ],
  education: {
    degree: "BSc. Physics (300 Level)",
    institution: "Air Force Institute of Technology, Kaduna",
  },
  experience: {
    roles: [
      "Intern AI Engineer at SysServe Solutions LTD - Current Role",
      "Freelance Web Developer (Ramlad Global Tech)",
      "Campus Ambassador at Cowrywise",
    ],
  },
  certifications: [
    { name: "Master JavaScript", color: "blue" },
    { name: "Agile Methodologies Certified", color: "purple" },
    { name: "AI Career Essentials", color: "green" },
    { name: "Diploma in HTML & CSS", color: "yellow" },
  ],
};

// Helper function to dynamically map color themes for certification badges
const getBadgeStyles = (color: string) => {
  const styles: Record<string, string> = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100",
    green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100",
    yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100",
  };
  return styles[color] || styles.blue;
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a Physics student and software engineer driven by a passion for building impactful solutions. My background blends computational physics with modern web development and artificial intelligence.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether I'm developing tech solutions for agriculture, configuring local AI environments, or building responsive user interfaces, I thrive on solving complex problems and exploring new technologies.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-t border-r border-b border-l-4 border-gray-100 dark:border-gray-700 border-l-blue-500 dark:border-l-blue-400 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  Skills
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {aboutData.skills.map((skill, index) => (
                    <li key={index}>• {skill}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-t border-r border-b border-l-4 border-gray-100 dark:border-gray-700 border-l-purple-500 dark:border-l-purple-400 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  Technologies
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {aboutData.technologies.map((tech, index) => (
                    <li key={index}>• {tech}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-t border-r border-b border-l-4 border-gray-100 dark:border-gray-700 border-l-green-500 dark:border-l-green-400 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6" /></svg>
                  Education
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {aboutData.education.degree}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {aboutData.education.institution}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-t border-r border-b border-l-4 border-gray-100 dark:border-gray-700 border-l-yellow-500 dark:border-l-yellow-400 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Experience
                </h4>
                {aboutData.experience.roles.map((role, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-400 mb-1">
                    {role}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-3">
                {aboutData.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${getBadgeStyles(
                      cert.color
                    )}`}
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}