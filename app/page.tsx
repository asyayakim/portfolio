type Work = {
  title: string;
  description: string;
  video?: string;
  image?: string;
  note?: string;
  dimensions: { width: number; height: number };
  sourceLink?: string;
};

const Home = () => {
    const works: Work[] = [
      {
        title: "Pixel Oslo",
        description: "Looping pixel animation",
        video: "https://cdn.artstation.com/p/video_sources/000/193/376/111.mp4",
        dimensions: { width: 452, height: 415 },
        note: "Created with Aseprite",
        sourceLink: "https://www.artstation.com/artwork/4X3e6J",
      },
      // {
      //   title: "Nord",
      //   description: "Looping pixel animation",
      //   video: "https://cdn.artstation.com/p/video_sources/000/193/377/1-1.mp4",
      //   dimensions: { width: 452, height: 438 },
      //   note: "Created with Aseprite",
      //   sourceLink: "https://www.artstation.com/artwork/4X3e6J",
      // },
    ];
  return (
    <main className="relative min-h-screen">
      {/* Video Background Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />{" "}
        {/* Dark overlay */}
        <video
          src="https://cdn.artstation.com/p/video_sources/000/193/376/111.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        />
  
        <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl  text-accent drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
              Welcome
            </h1>
            <p className="text-2xl md:text-4xl text-foreground font-semibold max-w-2xl mx-auto">
              Explore my pixel art and web projects.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
