type Work = {
  title: string;
  description: string;
  video?: string;
  image?: string;
  note?: string;
  dimensions: { width: number; height: number };
  sourceLink?: string;
};

const AboutMe = () => {
  const works: Work[] = [
    {
      title: "Nord",
      description: "Looping pixel animation",
      video: "https://cdn.artstation.com/p/video_sources/000/193/377/1-1.mp4",
      dimensions: { width: 452, height: 438 },
      note: "Created with Aseprite",
      sourceLink: "https://www.artstation.com/artwork/4X3e6J",
    },
  ];
  return (
    <main className="">
      <div className="flex items-center justify-center ">
        <article className="pixel-tech-box-main">
          <h1 className="text-2xl ">About me</h1>
          <p>Hello! I'm Asia, a dedicated software developer with a background in academic art education. After years in the creative field, I made the exciting leap into tech to pursue my passion for building innovative digital solutions.</p>

          <p>My journey into software development has been fueled by curiosity, continuous learning, and a drive to create meaningful applications. I specialize in full-stack development and enjoy working across different technologies and frameworks to bring ideas to life.</p>

          <p>I’m particularly drawn to clean architecture, intuitive design, and problem-solving in real-world scenarios. Whether it's developing a responsive UI, optimizing backend performance, or learning the latest in cloud infrastructure—I'm always eager to dive in.</p>

          <p>Outside of development, I enjoy staying active through hiking, yoga, and personal fitness. I believe that a balanced lifestyle enhances creativity and focus—both essential in the tech world.</p>

          <p>Feel free to explore my projects, and don’t hesitate to reach out if you're interested in collaborating or have any questions. I'm always open to new opportunities and connections in the development community.</p>

          <p>Thanks for stopping by!</p>

          <p>— Asia<br />Software Developer</p>
        </article>
        {works.map((work, index) => (
          <article
            key={index}
            className="pixel-border bg-highlight p-4 rounded-lg hover:scale-[1.02] transition-transform"
          >
            <div
              className="relative"
              style={{
                aspectRatio: `${work.dimensions.width}/${work.dimensions.height}`,
              }}
            >
              {work.video ? (
                <video
                  src={work.video}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className=" object-cover pixel-art"
                />
              ) : (
                <img
                  src={work.image}
                  alt={work.description}
                  width={work.dimensions.width}
                  height={work.dimensions.height}
                  className="w-full h-full object-cover rounded-lg pixel-art"
                />
              )}
            </div>
            <div className="mt-4 space-y-2">
              <h3 className=" text-lg">{work.title}</h3>
              <p className="text-medium text-sm">{work.description}</p>
              {work.note && <p className="text-accent text-xs">{work.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};
export default AboutMe;
