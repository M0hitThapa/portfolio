const Hero = () => {
    return (
      <section className="py-32 px-6 md:py-44">
        <div className="text-center text-slate-200 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/pr.jpeg"
              alt="profile"
              className="h-40 w-40 md:h-52 md:w-52 rounded-lg shadow-inner shadow-black object-cover"
            />
            <p className="text-2xl md:text-3xl font-black font-mono pt-5">I am Mohit Thapa.</p>
            <h2 className="text-md md:text-lg font-mono font-medium">Developer based in Kathmandu, Nepal</h2>
          </div>
  
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black font-sans leading-tight">
              Passionate about creating
            </h2>
            <h2 className="text-3xl md:text-5xl font-black font-mono">great experiences through Code</h2>
            <div className="pt-6 flex flex-col md:flex-row gap-4">
              <button className="bg-rose-200 px-4 py-2 rounded-3xl text-black font-semibold font-mono w-full md:w-auto">
                Talk With Me
              </button>
              <button className="bg-rose-200 px-4 py-2 rounded-3xl text-black font-semibold font-mono w-full md:w-auto">
                See My Work
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;