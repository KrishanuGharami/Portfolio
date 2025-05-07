import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const titles = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Software Engineer'];

  useEffect(() => {
    const typeNextTitle = () => {
      const currentTitle = titles[typewriterIndex];
      let charIndex = 0;
      let currentText = '';
      let isDeleting = false;
      
      const typeEffect = setInterval(() => {
        if (!isDeleting && charIndex <= currentTitle.length) {
          currentText = currentTitle.substring(0, charIndex);
          setTypewriterText(currentText);
          charIndex++;
        } else if (charIndex === currentTitle.length + 1) {
          // Pause at end of word
          isDeleting = true;
          setTimeout(() => {
            // Start deleting after pause
            charIndex--;
            currentText = currentTitle.substring(0, charIndex);
            setTypewriterText(currentText);
          }, 1500);
        } else if (isDeleting && charIndex > 0) {
          currentText = currentTitle.substring(0, charIndex);
          setTypewriterText(currentText);
          charIndex--;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          setTypewriterIndex((prevIndex) => (prevIndex + 1) % titles.length);
          clearInterval(typeEffect);
          setTimeout(typeNextTitle, 200);
        }
      }, 100);
      
      return () => clearInterval(typeEffect);
    };
    
    typeNextTitle();
  }, [typewriterIndex]);

  return (
    <section id="home" className="flex items-center min-h-screen pt-20 pb-12 lg:pb-0">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-xl fade-in visible">
            <div className="mb-4">
              <span className="px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm inline-block">
                Hi there, I'm
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Krishanu <span className="text-primary-500">Gharami</span>
            </h1>
            
            <div className="text-xl sm:text-2xl font-medium text-gray-300 mb-6 h-8">
              <span className="text-white">Creative </span>
              <span className="text-primary-500 relative">
                {typewriterText}
                <span className="absolute right-0 top-0 h-full w-1 bg-primary-500 animate-pulse"></span>
              </span>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Pre-Final Year Student pursuing B.Tech CSE (2022-26) from SSIPMT, Raipur. 
              Passionate about creating elegant solutions through code.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="btn btn-primary w-full sm:w-auto"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline w-full sm:w-auto"
              >
                Get In Touch
              </a>
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a 
                href="https://github.com/KrishanuGharami" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/krishanugharami/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative fade-in visible">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/7544626/pexels-photo-7544626.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-4 border-primary-500/30 p-1"
              />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 opacity-30 blur-md animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <a 
            href="#about" 
            className="text-gray-400 hover:text-white transition-colors duration-300 animate-bounce flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;