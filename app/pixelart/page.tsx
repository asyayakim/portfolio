
import Image from "next/image";

type Work = {
  title: string;
  description: string;
  image: string;
  note?: string;
  dimensions: { width: number; height: number };
  sourceLink?: string;
};

const LoadPictures = () => {
  const works: Work[] = [
    {
      title: "Urban",
      description: "Two guys in the old factory area are tagging the wall",
      image:
        "https://i.pinimg.com/originals/db/6b/71/db6b7129e806a069af71d4343ee1cbbc.gif",
      dimensions: { width: 800, height: 450 },
      sourceLink:
        "https://i.pinimg.com/originals/db/6b/71/db6b7129e806a069af71d4343ee1cbbc.gif",
    },
    {
      title: "Winter",
      description: "Cosy winter scene",
      image:
        "https://i.pinimg.com/originals/3c/8b/c5/3c8bc51e62b30a4a8bd0c5a97d187e92.gif",
      dimensions: { width: 640, height: 360 },
    },
    {
      title: "Ski trip",
      description: "Some typical scene in the winter forest",
      image:
        "https://i.pinimg.com/originals/ef/77/05/ef77051d7537dec6a19664859a153a05.gif",
      note: "Hobby gif animations",
      dimensions: { width: 480, height: 480 },
    },
  ];

  return (
    <main className="">
      <h1 className="text-4xl font-bold">Some Works:</h1>

      <section className="space-y-8 max-w-6xl mx-auto">
        <article>
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-xl text-pixel-yellow">
              After-Hours Creator
            </h3>
          </div>
        </article>
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Pixel Verker</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work, index) => (
              <article
                key={index}
              >
                <div className="relative overflow-hidden mb-4">
                  <Image
                    src={work.image}
                    alt={work.description}
                    width={work.dimensions.width}
                    height={work.dimensions.height}
                    className="pixel-art scale-100 group-hover:scale-105 transition-transform"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg text-accent">
                    {work.title}
                  </h4>
                  <p className="text-medium text-sm">{work.description}</p>
                  {work.note && (
                    <p className="text-xs text-medium">{work.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <article className="pixel-tech-box-main">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">
            Technical details
          </h3>
          <div className="grid grid-cols-2 gap-4 text-medium">
            <div>
              <p className="text-accent mb-2">Design:</p>
              <ul className="space-y-1 text-sm list-disc pl-4">
                <li>Retro-modern</li>
                <li>8-bit</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default LoadPictures;