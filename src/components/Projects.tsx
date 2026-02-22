import { useMemo, useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  repoLink?: string;
  visibility: "public" | "private";
  impact: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and analytics with real-time updates.",
    tags: ["Vue.js", "Vuex", "Firebase", "Chart.js"],
    image:
      "https://res.cloudinary.com/deyjkjbl9/image/upload/v1756381368/My_Snapshot_7_h9pfue.jpg",
    liveLink: "https://pivot-rust.vercel.app/",
    repoLink: "https://github.com/Hassan-Olaitan/pivot-rust",
    visibility: "public",
    impact: "Improved monitoring and order processing visibility.",
  },
  {
    title: "Weather Forecast App",
    description:
      "Mobile-first weather application using OpenWeatherMap API with location-based forecasts.",
    tags: ["JavaScript", "HTML5", "CSS3", "API"],
    image:
      "https://res.cloudinary.com/deyjkjbl9/image/upload/v1756126758/weather-img_dstwop.png",
    liveLink: "https://weather-app-project-six-delta.vercel.app/",
    repoLink: "https://github.com/Hassan-Olaitan/weather-app-project",
    visibility: "public",
    impact: "Delivered quick weather insights with responsive UX.",
  },
  {
    title: "Pay-E Banking App",
    description:
      "Modern neobank platform for digital natives with virtual USD accounts and smooth international payment flows.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image:
      "https://res.cloudinary.com/deyjkjbl9/image/upload/v1756365326/My_Snapshot_6_ue6gvu.jpg",
    liveLink: "https://pay-e.vercel.app/",
    visibility: "private",
    impact: "Built a conversion-focused product experience for a fintech launch.",
  },
  {
    title: "Internal Portfolio CMS",
    description:
      "Private content management workflow used to update project highlights, testimonials, and release notes faster.",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    image:
      "https://res.cloudinary.com/deyjkjbl9/image/upload/v1756126750/portfolio-img_c8cab0.jpg",
    visibility: "private",
    impact: "Reduced profile update time by introducing reusable content blocks.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "public" | "private">("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.visibility === filter);
  }, [filter]);

  const publicCount = projects.filter((project) => project.visibility === "public").length;
  const privateCount = projects.filter((project) => project.visibility === "private").length;

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A curated mix of public repositories and private production work that reflects recent growth in product delivery, design quality, and engineering impact.
          </p>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { id: "all", label: `All (${projects.length})` },
            { id: "public", label: `Public (${publicCount})` },
            { id: "private", label: `Private (${privateCount})` },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as "all" | "public" | "private")}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                filter === item.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-200 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.visibility === "public"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {project.visibility === "public" ? "Public Repo" : "Private Repository"}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500">{project.impact}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.repoLink ? (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors text-sm"
                    >
                      Repository
                    </a>
                  ) : (
                    <span className="inline-flex items-center px-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-500 text-sm">
                      Repository private
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
