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
        <article>
          <h1>Portfolio</h1>
          <p>This is a portfolio page.</p>
          <p>
            My name is Asia, and I am a software developer with a passion for
            creating innovative solutions.
          </p>
          <p>
            I have experience in various programming languages and frameworks,
            and I love to learn new technologies.
          </p>
          <p>
            In my free time, I enjoy hiking, reading, and exploring new places.
          </p>
          <p>
            If you would like to know more about my work or get in touch, feel
            free to reach out!
          </p>
          <p>Thank you for visiting my portfolio!</p>
          <p>
            Feel free to check out my projects and contact me for any inquiries.
          </p>
          <p>Looking forward to connecting with you!</p>
          <p>Best regards,</p>
          <p>Asia</p>
          <p>Software Developer</p>
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
              <h3 className="font-mono text-lg">{work.title}</h3>
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
