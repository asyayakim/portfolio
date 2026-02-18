import { Metadata } from "next";

type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  details: ProjectDetails;
  links: ProjectLinks;
};

interface ProjectDetails {
  overview: string[];
  features: string[];
  techStack: TechStack;
}

interface ProjectLinks {
  github?: string;
  liveDemo?: string;
}

interface TechStack {
  backend: string[];
  frontend: string[];
  database: string;
  authentication: string;
  documentation: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: "project-1",
    title: "Hotel Service Platform",
    description:
      "Full-stack hotel management system with advanced booking features",
    details: {
      overview: [
        "Facilitates hotel management and bookings",
        "Implements JWT-based authentication system",
        "Provides dual interfaces for users and administrators",
      ],
      features: [
        "User authentication with role-based access",
        "Hotel browsing with pagination and favorites",
        "Reservation system with date selection",
        "Secure payment processing integration",
        "User profile management",
        "Auto complete system",
        "Admin dashboard for hotel/reservation management",
      ],
      techStack: {
        backend: ["ASP.NET Core", "Entity Framework Core", "C#"],
        frontend: ["React with TypeScript", "React Router", "Axios", "SweetAlert2"],
        database: "PostgreSQL",
        authentication: "JWT",
        documentation: "Swagger",
      },
    },
    links: {
      github: "https://github.com/asyayakim/HotelService",
      liveDemo: "https://hotel-service-frontend-kefi.vercel.app/",
    },
  },
  {
    id: 3,
    slug: "project-3",
    title: "Charity Store",
    description:
      "An online charity store that allows users to browse and purchase donated products while supporting charitable causes.",
    details: {
      overview: [
        "Provides an online platform for charity-based product sales",
        "Supports product browsing and purchasing for social good",
        "Includes management tools for products and orders",
      ],
      features: [
        "Product listing and detailed product pages",
        "Store browsing with categories",
        "Shopping cart and checkout functionality",
        "Order management system",
        "Responsive and user-friendly UI",
        "API-based product and store management",
      ],
      techStack: {
        backend: ["ASP.NET Core", "Entity Framework Core"],
        frontend: ["React", "React Router", "Axios"],
        database: "PostgreSQL",
        authentication: "JWT",
        documentation: "Swagger",
      },
    },
    links: {
      liveDemo:
        "https://product-service-frontend-git-main-asyayakims-projects.vercel.app",
    },
  },
];

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project ? `${project.title} – Portfolio` : "Project Not Found",
    description: project?.description,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="container mx-auto px-4 py-12">
        <p className="text-pixel-pink">Project not found.</p>
      </main>
    );
  }

  const { details, links } = project;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-10 max-w-4xl mb-[15vh]">

      {/* Header */}
      <div className="pixel-tech-box-main space-y-2">
        <span className="text-xs text-pixel-green opacity-70">
          PROJECT_{String(project.id).padStart(2, "0")}
        </span>
        <h1 className="text-3xl text-pixel-green glitch-text">{project.title}</h1>
        <p className="text-pixel-cyan text-base leading-relaxed">{project.description}</p>
      </div>

      {/* Overview */}
      <section className="pixel-tech-box space-y-4">
        <h2 className="text-xl text-pixel-pink">Overview</h2>
        <ul className="space-y-3">
          {details.overview.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-pixel-white text-sm leading-relaxed">
              <span className="mt-1 shrink-0 inline-block w-3 h-3 bg-pixel-green" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Features */}
      <section className="pixel-tech-box space-y-4">
        <h2 className="text-xl text-pixel-orange">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {details.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="text-pixel-green mt-0.5 shrink-0">{">"}</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-xl text-pixel-yellow">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="pixel-tech-box space-y-3">
            <h3 className="text-base text-pixel-pink">Backend</h3>
            <ul className="space-y-1">
              {details.techStack.backend.map((tech, i) => (
                <li key={i} className="text-pixel-cyan text-sm flex gap-2">
                  <span className="text-pixel-green">#</span> {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="pixel-tech-box space-y-3">
            <h3 className="text-base text-pixel-pink">Frontend</h3>
            <ul className="space-y-1">
              {details.techStack.frontend.map((tech, i) => (
                <li key={i} className="text-pixel-cyan text-sm flex gap-2">
                  <span className="text-pixel-green">#</span> {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="pixel-tech-box sm:col-span-2 space-y-3">
            <h3 className="text-base text-pixel-pink">Infrastructure</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-pixel-cyan">
              <div className="flex gap-2">
                <span className="text-pixel-green shrink-0">DB</span>
                {details.techStack.database}
              </div>
              <div className="flex gap-2">
                <span className="text-pixel-green shrink-0">Auth</span>
                {details.techStack.authentication}
              </div>
              <div className="flex gap-2">
                <span className="text-pixel-green shrink-0">Docs</span>
                {details.techStack.documentation}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Links */}
      <section className="pixel-tech-box-main space-y-4">
        <h2 className="text-xl text-pixel-blue">Links</h2>
        <div className="flex flex-wrap gap-4">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button"
            >
              {">"} GitHub Repository
            </a>
          )}
          {links.liveDemo && (
            <a
              href={links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button"
            >
              {">"} Live Demo
            </a>
          )}
        </div>
      </section>

    </main>
  );
}
