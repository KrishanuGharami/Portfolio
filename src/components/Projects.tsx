import { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and secure checkout process.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: '#',
    demo: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for monitoring social media performance across multiple platforms.',
    tags: ['React', 'Chart.js', 'Tailwind CSS', 'Firebase'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: '#',
    demo: '#',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality.',
    tags: ['React', 'Redux', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: '#',
    demo: '#',
    category: 'fullstack'
  },
  {
    id: 4,
    title: 'Weather Application',
    description: 'A real-time weather application with location detection and 5-day forecast.',
    tags: ['JavaScript', 'API', 'CSS', 'HTML'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: '#',
    demo: '#',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: '#',
    demo: '#',
    category: 'frontend'
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A content management system for creating and managing blog posts.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: '#',
    demo: '#',
    category: 'fullstack'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="card group hover:shadow-accent border border-gray-800 hover:border-primary-500/50 overflow-hidden transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-background text-gray-300 border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a 
            href={project.github} 
            className="text-gray-400 hover:text-primary-500 transition-colors"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href={project.demo} 
            className="text-white bg-primary-500/10 hover:bg-primary-500/20 px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors"
          >
            Live Demo <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-title">My Work</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 fade-in">
          <div className="inline-flex bg-background-light p-1 rounded-full">
            {filterButtons.map(button => (
              <button
                key={button.id}
                onClick={() => setFilter(button.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === button.id 
                    ? 'bg-primary-500 text-white shadow-accent' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <a 
            href="https://github.com/KrishanuGharami" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            See More On GitHub <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;