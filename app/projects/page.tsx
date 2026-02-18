import Link from "next/link";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  liveDemo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: "project-1",
    title: "Hotel Booking",
    description:
      "Full-stack hotel management system with advanced booking features",
    liveDemo: "https://hotel-service-frontend-kefi.vercel.app/",
  },
  {
    id: 3,
    slug: "project-3",
    title: "Charity Store",
    description:
      "An online charity store that allows users to browse and purchase donated products while supporting charitable causes.",
    liveDemo:
      "https://product-service-frontend-git-main-asyayakims-projects.vercel.app",
  },
];

const PortfolioPage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <h1 className="text-2xl mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="pixel-tech-box-main flex flex-col justify-between gap-4 hover:scale-[1.02] transition-transform"
          >
            {/* Content */}
            <div className="space-y-2">
              <span className="text-xs text-pixel-green opacity-70">
                PROJECT_{String(project.id).padStart(2, "0")}
              </span>
              <h2 className="text-xl text-cyan-200">{project.title}</h2>
              <p className="text-sm leading-relaxed">{project.description}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-purple-800">
              <Link
                href={`/projects/${project.slug}`}
                className="pixel-button text-xs"
              >
                {">"} View Details
              </Link>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button text-xs"
                >
                  {">"} Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;