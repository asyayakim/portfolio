import Link from "next/link";

    const projects = [
      {
        id: 1,
        slug: "project-1",
        name: "Hotel Booking",
        title: "Hotel Booking",
        description: "Full-stack hotel management system with advanced booking features",
        link: "/projects/project1",
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
        name: "Job-tracker",
        title: "Job-tracker",
        description: "Project is under development.",
        link: "/projects/project3",
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
          </article>
        ))}
      </div>
    </main>
  );
}

export default PortfolioPage;