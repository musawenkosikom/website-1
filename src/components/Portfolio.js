import FadeInSection from './FadeInSection';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          
          {/* Centered Project */}
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <div className="card group bg-black/30 p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/project1.png" 
                    alt="My Portfolio Screenshot"
                    className="w-full h-64 object-contain bg-black/40 transform group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/60 group-hover:to-black/10 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">My Portfolio</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-400">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-400">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Portfolio;

