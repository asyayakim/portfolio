
import Image from "next/image";

type Work = {
  title: string;
  description: string;
  image: string;
  note?: string;
  dimensions: { width: number; height: number };
  sourceLink?: string;
};

const Home = () => {
  const works: Work[] = [
    {
      title: "Pixel Fjord",
      description: "Norsk fjordlandskap i 8-bit stil",
      image:
        "https://i.pinimg.com/originals/db/6b/71/db6b7129e806a069af71d4343ee1cbbc.gif",
      dimensions: { width: 800, height: 450 },
      sourceLink:
        "https://i.pinimg.com/originals/db/6b/71/db6b7129e806a069af71d4343ee1cbbc.gif",
    },
    {
      title: "Cyberpunk Gate",
      description: "Neonlys-belyst bylandskap med regnanimasjon",
      image:
        "https://i.pinimg.com/originals/3c/8b/c5/3c8bc51e62b30a4a8bd0c5a97d187e92.gif",
      dimensions: { width: 640, height: 360 },
    },
    {
      title: "Skogtroll",
      description: "Isometrisk skogscene med skjulte vesener",
      image:
        "https://i.pinimg.com/originals/ef/77/05/ef77051d7537dec6a19664859a153a05.gif",
      note: "Utvalgt til Pixel Perfect 2023",
      dimensions: { width: 480, height: 480 },
    },
  ];

  return (
    <main className="">
      <h1 className="text-4xl font-bold">Innhold:</h1>

      <section className="space-y-8 max-w-6xl mx-auto">
        <article className="bg-highlight p-6 rounded-xl border-2 border-medium">
          <h3 className="text-2xl font-semibold">
            Asia
          </h3>
          <p className="text-medium leading-relaxed">
            Pixelkunstner og animatør basert i Oslo. Spesialitet på detaljerte,
            stemningsfulle illustrasjoner med retro-estetikk. Arbeider primært i
            <span className="text-accent"> Aseprite </span>
            med begrensede fargepaletter.
          </p>
        </article>
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Pixel Verker</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work, index) => (
              <article
                key={index}
                className="group bg-highlight p-4 rounded-lg border-2 border-medium hover:border-accent transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-md mb-4">
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
        <article className="bg-highlight p-6 rounded-xl border-2 border-medium">
          <h3 className="text-2xl font-semibold mb-4">
            Tekniske Detaljer
          </h3>
          <div className="grid grid-cols-2 gap-4 text-medium">
            <div>
              <p className="text-accent mb-2">Stack:</p>
              <ul className="space-y-1 text-sm list-disc pl-4">
                <li>Next.js 14</li>
                <li>TypeScript 5</li>
                <li>Tailwind 3</li>
              </ul>
            </div>
            <div>
              <p className="text-accent mb-2">Design:</p>
              <ul className="space-y-1 text-sm list-disc pl-4">
                <li>Retro-modern</li>
                <li>8-bit inspirert</li>
                <li>Høy kontrast</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;