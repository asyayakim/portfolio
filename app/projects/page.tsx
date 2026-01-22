import Link from "next/link";
interface Project {
  id: number;
  slug: string;
  name: string;
  title: string;
  description: string;
  link: string;
  liveDemo?: string;
}
const projects: Project[] = [
      {
        id: 1,
        slug: "project-1",
        name: "Hotel Booking",
        title: "Hotel Booking",
        description: "Full-stack hotel management system with advanced booking features",
    link: "/projects/project1",
        liveDemo: "https://product-service-frontend-git-main-asyayakims-projects.vercel.app",
      },
      {
        id: 2,
        slug: "project-2",
        name: "Library",
        title: "Library",
        description: "ASP.NET Core backend for library management system with PostgreSQL",
        link: "/projects/project2",
      },
      {
        id: 3,
        slug: "project-3",
        name: "Charity Store",
        title: "Charity Store",
        description: "An online charity store that allows users to browse and purchase donated products while supporting charitable causes.",
        link: "/projects/project3",
        liveDemo: "https://product-service-frontend-git-main-asyayakims-projects.vercel.app",
      },
    ];

const PortfolioPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <article
            key={index}
            className="pixel-tech-box-main"
          >
            <div className="relative overflow-hidden rounded-md mb-4">
              <h4 className="text-xl text-cyan-200">{project.title}</h4>
              <p className="text-medium text-sm">{project.description}</p>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="text-blue-500 underline"
            >
              View Project
            </Link>
            {project.liveDemo && (
              <Link
                href={project.liveDemo}
                className="ml-4 text-blue-500 underline"
              >
                Live Demo
              </Link>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}

export default PortfolioPage;