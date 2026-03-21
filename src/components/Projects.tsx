export default function Projects() {
  const projects = [
    {
      title: "Ramlad Global Technologies",
      description: "A responsive, optimized website built for a solar energy company to showcase services and improve customer reach.",
      tags: ["HTML", "CSS", "JavaScript", "BootStrap", "Responsive Design"],
      image:
        "https://res.cloudinary.com/deyjkjbl9/image/upload/v1774110893/Screenshot_2026-03-21_173336_auneiz.png",
      link: "https://ramladglobal.com/",
    },
    {
      title: "Cartify",
      description:
        "Admin dashboard for managing products, orders, and analytics with real-time updates.",
      tags: ["React", "Tailwind CSS", "Responsive Design", "Vite", "API"],
      image:
        "https://res.cloudinary.com/deyjkjbl9/image/upload/v1757755946/My_Snapshot_3_cc17lf.jpg",
      link: "https://cartify-mu.vercel.app/",
    },
    {
      title: "Weather Forecast App",
      description:
        "Mobile-first weather application using OpenWeatherMap API with location-based forecasts.",
      tags: ["JavaScript", "HTML5", "CSS3", "API"],
      image:
        "https://res.cloudinary.com/deyjkjbl9/image/upload/v1756126758/weather-img_dstwop.png",
      link: "https://weather-app-project-six-delta.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio built with modern web technologies showcasing work and skills.",
      tags: ["HTML", "CSS", "jQuery", "Responsive Design"],
      image:
        "https://res.cloudinary.com/deyjkjbl9/image/upload/v1756126750/portfolio-img_c8cab0.jpg",
      link: "https://res.cloudinary.com/deyjkjbl9/image/upload/v1756381368/My_Snapshot_7_h9pfue.jpg",
    },
    {
      title: "Banking App",
      description:
        "Modern neobank platform for digital natives, offering virtual USD bank accounts, debit cards, and seamless international payment solutions.",
      tags: ["HTML", "CSS", "JavaScript", "BootStrap", "Responsive Design"],
      image:
        "https://res.cloudinary.com/deyjkjbl9/image/upload/v1756365326/My_Snapshot_6_ue6gvu.jpg",
      link: "https://pay-e.vercel.app/",
    },
    {
    title: "Testable Profile Card",
    description: "",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://res.cloudinary.com/deyjkjbl9/image/upload/v1774118742/Screenshot_2026-03-21_194432_vwqxgs.png",
    link: "https://testable-profile-card.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Projects & Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
              <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-white px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {/* View More Projects */}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
