import FadeInSection from './FadeInSection';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Musawenkosi Kom
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-400">
            Your Go-To Freelance Web Developer!
          </h2>
          <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I design and develop stunning, user-friendly websites that help businesses grow and stand out online. 
            Whether you need a sleek portfolio, an engaging e-commerce store, or a custom web app, 
            I bring your ideas to life with modern technology and creative flair. 
            Let's turn your vision into a digital reality!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#portfolio" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;

