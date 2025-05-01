import React from 'react';
import { 
  DiReact, DiNodejs, DiPython, DiJavascript1, DiJava, DiHtml5, DiCss3, DiGit,
  DiMongodb
} from 'react-icons/di';
import { SiTailwindcss, SiExpress } from 'react-icons/si';

const skills = [
  { id: 'js', name: 'JavaScript', level: 0.9, category: 'frontend', icon: <DiJavascript1 /> },
  { id: 'react', name: 'React', level: 0.85, category: 'frontend', icon: <DiReact /> },
  { id: 'node', name: 'Node.js', level: 0.8, category: 'backend', icon: <DiNodejs /> },
  { id: 'python', name: 'Python', level: 0.75, category: 'backend', icon: <DiPython /> },
  { id: 'java', name: 'Java', level: 0.7, category: 'languages', icon: <DiJava /> },
  { id: 'html', name: 'HTML', level: 0.9, category: 'frontend', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS', level: 0.85, category: 'frontend', icon: <DiCss3 /> },
  { id: 'tailwind', name: 'Tailwind', level: 0.8, category: 'frontend', icon: <SiTailwindcss /> },
  { id: 'express', name: 'Express', level: 0.75, category: 'backend', icon: <SiExpress /> },
  { id: 'mongo', name: 'MongoDB', level: 0.7, category: 'backend', icon: <DiMongodb /> },
  { id: 'git', name: 'Git', level: 0.85, category: 'tools', icon: <DiGit /> },
];

const SkillsGrid = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      {skills.map((skill) => (
        <div 
          key={skill.id}
          className="w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 p-2"
        >
          <div className="skill-card bg-[#0A1221] p-4 border border-[#112240] hover:border-[#00F0FF] transition-all duration-300 group h-full">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl text-[#58DFC3] group-hover:text-[#00F0FF] transition-colors duration-300">
                {skill.icon}
              </div>
            </div>
            
            <h3 className="text-lg font-rajdhani font-bold mb-2">{skill.name}</h3>
            
            <div className="w-full h-1 bg-[#112240] overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#00F0FF] to-[#FF00C8]" 
                style={{ width: `${skill.level * 100}%`, 
                  transition: 'width 1s ease-in-out' }}
              ></div>
            </div>
            
            <div className="mt-2 flex justify-end text-xs font-mono">
              <div>{Math.round(skill.level * 100)}%</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;