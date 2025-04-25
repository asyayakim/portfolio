import { Metadata } from "next";

const projects = [
  {
    id: 1,
    slug: "project-1",
    title: "Hotel Booking",
    description: "Description of project 1.",
    link: "/projects/project1",
  },
  {
    id: 2,
    slug: "project-2",
    title: "Library",
    description: "Description of project 2.",
    link: "/projects/project2",
  },
  {
    id: 3,
    slug: "project-3",
    title: "Job-tracker",
    description: "Description of project 3.",
    link: "/projects/project3",
  },
];
type Props = {
  params: {
    id: number;
    slug: string;
    title: string;
    description: string;
    link: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.id} - ${project.title}`,
    description: project.description,
  };
}
const fetchProject = async (slug: string) => {
  return projects.find((p) => p.slug === slug);
};
const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const project = await fetchProject(params.slug);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <main className="">
        <h1 className="text-3xl font-bold">{project.title}</h1>{" "}
      <p className="mt-4">{project.description}</p>{" "}
    </main>
  );
};

export default ProjectPage;