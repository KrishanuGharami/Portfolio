import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Skill categories
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 70 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 60 },
      { name: "RESTful APIs", level: 80 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 85 },
      { name: "Performance Optimization", level: 75 },
    ]
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-background-dark rounded-full h-2.5">
        <motion.div
          className="bg-primary-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category, items }: { category: string; items: { name: string; level: number }[] }) => {
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
      className="bg-background-light p-6 rounded-lg border border-gray-800"
    >
      <h3 className="text-xl font-bold mb-4 text-white relative inline-block">
        {category}
        <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary-500"></span>
      </h3>
      <div className="space-y-4">
        {items.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background-dark">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I've developed a diverse skill set across various technologies. Here's an overview of my technical proficiencies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <SkillCategory 
              key={index} 
              category={skillCategory.category} 
              items={skillCategory.items}
            />
          ))}
        </div>
        
        {/* Languages section */}
        <div className="mt-16 fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["JavaScript", "TypeScript", "Python", "Java", "C++"].map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center border-2 border-primary-500/30 mb-2 hover:border-primary-500 transition-colors">
                  <span className="text-xl font-bold text-primary-400">{language.charAt(0)}</span>
                </div>
                <span className="text-sm text-gray-300">{language}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;