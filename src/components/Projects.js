import { useState } from "react";
import projects_data from "../data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    return(
        <div className="pb-7">
            <h3 className="text-4xl text-gradient font-bold py-2 mb-8">
                <span>PROJECTS</span>
                <span className="ml-3 inline-block h-px w-20 bg-gradient-to-r from-[#00F0FF] to-[#FF00C8]"></span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects_data.map((project, index) => (
                    <ProjectItem 
                        key={index}
                        kind={project.kind} 
                        name={project.name} 
                        desc={project.description} 
                        stack={project.stack} 
                        points={project.points} 
                        link={project.links} 
                        video={project.video}
                        isActive={activeProject === index}
                        onClick={() => setActiveProject(index === activeProject ? null : index)}
                    />
                ))}
            </div>
        </div>
    )
}

const ProjectItem = ({ kind, name, desc, stack, points, link, video, isActive, onClick }) => {
    return(
        <div 
            className={`cyber-card p-5 bg-[#0A1221] transform transition-all duration-300 
                      hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] 
                      ${isActive ? 'scale-105 shadow-[0_0_20px_rgba(0,240,255,0.5)]' : ''}`}
            onClick={onClick}
        >
            <div className="flex justify-between items-start mb-2">
                <p className="text-[#58DFC3] text-base font-mono">{kind}</p>
                <div className="flex space-x-4 text-xl">
                    <a href={link} rel="noreferrer" target='_blank' className="text-[#CCD6F6] hover:text-[#00F0FF] transition-colors">
                        <FiGithub />
                    </a>
                    {link.includes("github.com") && (
                        <a href={link.replace("github.com", "github.io").replace("/repo/", "/")} rel="noreferrer" target='_blank' className="text-[#CCD6F6] hover:text-[#00F0FF] transition-colors">
                            <FiExternalLink />
                        </a>
                    )}
                </div>
            </div>
            
            <h3 className="text-2xl text-[#CCD6F6] pb-4 pt-1 font-bold">{name}</h3>
            
            <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[1000px]' : 'max-h-[80px]'}`}>
                <p className="text-lg text-white pb-1">{desc}</p>
                
                <ul className={`list-none pl-0 py-3 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {points.map((point, i) => (
                        <li key={i} className="text-white text-lg mb-2 pl-4 border-l-2 border-[#00F0FF]">{point}</li>
                    ))}
                </ul>
                
                {video && isActive && (
                    <div className="py-3 flex justify-center">
                        <iframe
                            title={name}
                            src={video}
                            width="100%" 
                            height="200"
                            className="animated-fadeIn"
                            allow="autoplay; encrypted-media"
                        ></iframe>
                    </div>
                )}
            </div>
            
            <div className="mt-4 pt-3 border-t border-[#112240]">
                <p className="text-sm font-mono text-[#58DFC3]">{stack}</p>
            </div>
            
            <div className="mt-3 text-center">
                <button className="text-[#00F0FF] text-sm hover:text-[#FF00C8] transition-colors">
                    {isActive ? '< COLLAPSE >' : '< DETAILS >'}
                </button>
            </div>
        </div>
    )
}

export default Projects;