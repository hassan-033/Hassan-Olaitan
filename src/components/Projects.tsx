export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description: "A conversational AI assistant built with React and Node.js that understands natural language queries.",
      tags: ["React", "Node.js", "NLP", "MongoDB"],
      image: "src/assets/Images/img-1.jpg",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and analytics with real-time updates.",
      tags: ["Vue.js", "Vuex", "Firebase", "Chart.js"],
      image: "src/assets/Images/img-2.jpg",

    },
    {
      title: "Weather Forecast App",
      description: "Mobile-first weather application using OpenWeatherMap API with location-based forecasts.",
      tags: ["JavaScript", "HTML5", "CSS3", "API"],
      image: "src/assets/Images/weather-img.png",
      link: "https://weather-app-project-six-delta.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "Personal developer portfolio built with modern web technologies showcasing work and skills.",
      tags: ["HTML", "CSS", "jQuery", "Responsive Design"],
      image: "src/assets/Images/portfolio-img.jpg",
      link: "https://responsive-personal-portfolio-roan.vercel.app/#home"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Projects & Experience</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200 group">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <a href={project.link} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">View Details</a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
            View More Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}