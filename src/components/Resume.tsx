const resumeData = [
  {
    id: 1,
    title: "Bachelor of Science in Physics (300 Level)",
    subtitle: "Air Force Institute of Technology",
    date: "2024 - Present",
    theme: {
      border: "border-blue-600 dark:border-blue-500",
      bg: "bg-blue-600 dark:bg-blue-500",
    },
    items: [
      "Specializing in Computational and Medical Physics.",
      "Relevant Coursework: Computational Physics (Python), Numerical Methods, Data Analysis.",
      "Developing analytical and coding skills relating to software development and data science.",
    ],
  },
  {
    id: 2,
    title: "Work Experience & Leadership",
    subtitle: "Contract & Campus Roles",
    theme: {
      border: "border-red-500 dark:border-red-400",
      bg: "bg-red-500 dark:bg-red-400",
    },
    items: [
      "Ramlad Global Technologies: Developed and deployed a responsive solar energy company website using React.",
      "Cowrywise Campus Ambassador: Representing the brand professionally and advocating for financial literacy on campus.",
      "Collaborated directly with clients to meet design, performance, and business needs.",
    ],
  },
  {
    id: 3,
    title: "Key Projects",
    subtitle: "Software Engineering & Artificial Intelligence",
    theme: {
      border: "border-purple-600 dark:border-purple-500",
      bg: "bg-purple-600 dark:bg-purple-500",
    },
    items: [
      "SysServe AI Fleet: Configured a local AI environment utilizing Ollama and Dify.",
      "Kosmos Framework: Building a self-reinforcing ecosystem of development tools.",
      "Agri-Tech Solutions: Developing software to address and solve agricultural challenges in Nigeria.",
      "VisioX: Developing software integrations for a smart glasses hardware project.",
      "Text Classification ML Model: Built a functional text classification ML model using CNN and LRP.",
    ],
  },
  {
    id: 4,
    title: "Achievements & Certifications",
    subtitle: "Competitions & Online Courses",
    theme: {
      border: "border-green-600 dark:border-green-500",
      bg: "bg-green-600 dark:bg-green-500",
    },
    items: [
      "Participant in the NextGen Innovation Challenge 2026.",
      "ALX: AI Career Essentials & Agile Methodologies.",
      "Udemy & Alison: Master JavaScript & Diploma in HTML & CSS.",
    ],
  },
  {
    id: 5,
    title: "Technical Skills",
    subtitle: "Development, Data Science & Tools",
    theme: {
      border: "border-yellow-500 dark:border-yellow-400",
      bg: "bg-yellow-500 dark:bg-yellow-400",
    },
    items: [
      "Languages: JavaScript, Python, C++, HTML/CSS, SQL-(MySQL)",
      "Frameworks: React, Tailwind CSS, Bootstrap",
      "AI & Data: Machine Learning, Ollama, Dify, Data Analysis",
      "Tools: Git, Vite, Vercel",
    ],
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Check my Resume
          </h2>
          <div className="mt-2 h-1 w-40 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {resumeData.map((section, index) => (
            <div
              key={section.id}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm relative pl-12 border-l-4 ${section.theme.border}`}
            >
              <span
                className={`absolute -left-4 top-6 w-8 h-8 rounded-full ${section.theme.bg} flex items-center justify-center text-white font-bold`}
              >
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {section.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {section.subtitle}
              </p>
              {section.date && (
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {section.date}
                </p>
              )}
              <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}