import Link from "next/link";

    const projects = [
      {
        id: 1,
        slug: "project-1",
        name: "Hotel Booking",
        title: "Hotel Booking",
        description: "Description of project 1.",
        link: "/projects/project1",
      },
      {
        id: 2,
        slug: "project-2",
        name: "Library",
        title: "Library",
        description: "Description of project 2.",
        link: "/projects/project2",
      },
      {
        id: 3,
        slug: "project-3",
        name: "Job-tracker",
        title: "Job-tracker",
        description: "Description of project 3.",
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
            className="group bg-highlight p-4 border-2 border-medium hover:border-accent transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-md mb-4">
              <h4 className="text-300">{project.title}</h4>
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