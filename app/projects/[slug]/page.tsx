import { Metadata } from "next";
import React from "react";
type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  link: string;
  details: ProjectDetails;
  links: ProjectLinks;
}
interface ProjectDetails {
  overview: string[];
  features: string[];
  techStack: TechStack;
}
interface ProjectLinks {
  github?: string;
  liveDemo?: string;
  adminDashboard?: string;
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
    description: "Full-stack hotel management system with advanced booking features",
    link: "/projects/hotel-booking",
    details: {
      overview: [
        "Facilitates hotel management and bookings",
        "Implements JWT-based authentication system",
        "Provides dual interfaces for users and administrators"
      ],
      features: [
        "User authentication with role-based access",
        "Hotel browsing with pagination and favorites",
        "Reservation system with date selection",
        "Secure payment processing integration",
        "User profile management",
          "Auto complete system",
        "Admin dashboard for hotel/reservation management"
      ],
      techStack: {
        backend: [
          "ASP.NET Core",
          "Entity Framework Core",
          "C#"
        ],
        frontend: [
          "React with TypeScript",
          "React Router",
          "Axios",
          "SweetAlert2"
        ],
        database: "PostgreSQL",
        authentication: "JWT",
        documentation: "Swagger"
      }
    },
    links: {
      github: "https://github.com/asyayakim/HotelService",
      adminDashboard: "https://github.com/asyayakim/hotel-service-frontend"
    }
  },
  {
    id: 2,
    slug: "project-2",
    title: "BookLibrary",
    description: "ASP.NET Core backend for library management system with PostgreSQL.",
    link: "/projects/project2",
    details: {
      overview: [
        "Backend for library management system",
        "Implements JWT authentication",
        "Provides API endpoints for book and user management"   ],
      features: [
        "Manage books (CRUD operations)",
        "Track top 10 loaned books",
        "Advanced search functionality",
        "Loan system with return tracking",
        "User management with role-based access",
        "Library events management",
        "Admin controls",
        "Browse available books",
        "View top 10 loaned books",
        "Advanced search by multiple criteria",
        "Favorites management",
        "Loan tracking system",
        "User profile page",
        "Events calendar"
      ],
      techStack: {
        backend: [
          "ASP.NET Core",
          "Entity Framework Core",
          "C#",
            "Google API"
        ],
        frontend: [
          "javascript",
          "CSS3",
          "Axios"
        ],
        database: "PostgreSQL",
        authentication: "JWT",
        documentation: "Swagger"
      }
    },
    links: {
      github: "https://github.com/asyayakim/BookLibrary",
      adminDashboard:"https://github.com/asyayakim/BookLibrary-Frontend",
    }
  },
  {
    id: 3,
    slug: "project-3",
    title: "Job-tracker",
    description: "Description of project 3.",
    link: "/projects/project3",
    details: {
      overview: [
        "Facilitates hotel management and bookings",
        "Implements JWT-based authentication system",
        "Provides dual interfaces for users and administrators"
      ],
      features: [
        "User authentication with role-based access",
        "Hotel browsing with pagination and favorites",
        "Reservation system with date selection",
        "Secure payment processing integration",
        "User profile management",
        "Admin dashboard for hotel/reservation management"
      ],
      techStack: {
        backend: [
          "ASP.NET Core",
          "Entity Framework Core",
        ],
        frontend: [
          "React",
          "React Router",
          "Axios",
        ],
        database: "PostgreSQL",
        authentication: "JWT",
        documentation: "Swagger"
      }
    },
    links: {
      github: "https://github.com/username/hotel-service",
      adminDashboard: "/admin/dashboard"
    }
  },
];
interface PageProps {
  params: { slug: string };
}
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project ? `${project.id} – ${project.title}` : "Project Not Found",
    description: project?.description,
  };
}
export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
      <main >
        <div className="pixel-tech-box-main">
          <h1 className="text-3xl text-pixel-green mb-4 glitch-text">{project.title}</h1>
          <p className="text-pixel-cyan text-lg">{project.description}</p>
        </div>
        
        <section className="pixel-tech-section-head">
          <h2 className="text-2xl text-pixel-pink mb-4">📁 Overview</h2>
          <ul className="space-y-3">
            {project.details.overview.map((item, index) => (
                <li key={index} className="text-pixel-white flex items-center">
                  <span className="inline-block w-4 h-4 bg-pixel-green mr-2"></span>
                  {item}
                </li>
            ))}
          </ul>
        </section>
        
        <section className="pixel-tech-section">
          <h2 className="text-2xl text-pixel-orange mb-4">🕹️ Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.details.features.map((feature, index) => (
                <div key={index} >
                  <span className="text-pixel-green">-</span> {feature}
                </div>
            ))}
          </div>
        </section>

        <section className="">
          <h2 className="text-2xl text-pixel-yellow mb-6">💻 Tech Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
            <div className="pixel-tech-box">
              <h3 className="text-xl text-pixel-pink mb-3">🔧 Backend</h3>
              <ul className="space-y-2">
                {project.details.techStack.backend.map((tech, index) => (
                    <li key={index} className="text-pixel-cyan">
                      <span className="text-pixel-green mr-2"></span> {tech}
                    </li>
                ))}
              </ul>
            </div>
            
            <div className="pixel-tech-box">
              <h3 className="text-xl text-pixel-pink mb-3">🎨 Frontend</h3>
              <ul className="space-y-2">
                {project.details.techStack.frontend.map((tech, index) => (
                    <li key={index} className="text-pixel-cyan">
                      <span className="text-pixel-green mr-2"></span> {tech}
                    </li>
                ))}
              </ul>
            </div>
            
            <div className="pixel-tech-box">
              <h3 className="text-xl text-pixel-pink mb-3">🔐 Infrastructure</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-pixel-cyan">
                  <span className="text-pixel-green">🗄️</span> {project.details.techStack.database}
                </div>
                <div className="text-pixel-cyan">
                  <span className="text-pixel-green">🔑</span> {project.details.techStack.authentication}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pixel-tech-box-main">
          <h2 className="text-2xl text-pixel-blue mb-4">🔗 Links</h2>
          <div className="flex gap-4">
            <a href={project.links.github} className="pixel-button bg-pixel-blue hover:bg-pixel-darkblue">
              GitHub Repository Backend
            </a>
            <a href={project.links.adminDashboard} className="pixel-button bg-pixel-purple hover:bg-pixel-darkpurple">
              GitHub Repository Frontend
            </a>
          </div>
        </section>
      </main>
  );
};