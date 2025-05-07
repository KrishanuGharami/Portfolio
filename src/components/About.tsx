import { useEffect } from 'react';
import { Code, Lightbulb, GraduationCap, BrainCircuit } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-primary-500/5 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="container relative">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know me, my background, and what I'm passionate about in the world of web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="relative">
              <div className="border-2 border-primary-500 absolute rounded-lg -top-4 -right-4 h-full w-full z-0"></div>
              <img 
                src="https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About Krishanu" 
                className="rounded-lg relative z-10 w-full shadow-lg"
              />
            </div>
          </div>
          
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-4">
              I'm Krishanu Gharami, a passionate web developer and designer currently pursuing my B.Tech in Computer Science Engineering (2022-26) from SSIPMT, Raipur.
            </p>
            <p className="text-gray-300 mb-6">
              With a love for creating beautiful, functional websites, I combine technical skills with creative problem-solving to deliver exceptional digital experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-background p-4 rounded-lg border border-gray-800">
                <Code className="text-primary-500 mb-2 h-6 w-6" />
                <h4 className="font-semibold mb-1">Web Development</h4>
                <p className="text-gray-400 text-sm">Creating responsive and interactive web applications</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-gray-800">
                <Lightbulb className="text-primary-500 mb-2 h-6 w-6" />
                <h4 className="font-semibold mb-1">UI/UX Design</h4>
                <p className="text-gray-400 text-sm">Designing intuitive and engaging user interfaces</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-gray-800">
                <GraduationCap className="text-primary-500 mb-2 h-6 w-6" />
                <h4 className="font-semibold mb-1">Continuous Learning</h4>
                <p className="text-gray-400 text-sm">Always exploring new technologies and methodologies</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-gray-800">
                <BrainCircuit className="text-primary-500 mb-2 h-6 w-6" />
                <h4 className="font-semibold mb-1">Problem Solving</h4>
                <p className="text-gray-400 text-sm">Finding elegant solutions to complex challenges</p>
              </div>
            </div>
            
            <a href="/resume.pdf" className="btn btn-primary inline-block">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;