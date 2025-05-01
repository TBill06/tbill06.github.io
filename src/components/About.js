import SkillsNetwork from './SkillsNetwork';

const About = () => {
    return (
        <div className="pb-16">
            <h3 className="text-4xl text-gradient font-bold py-2 mb-8">
                <span>ABOUT ME</span>
                <span className="ml-3 inline-block h-px w-20 bg-gradient-to-r from-[#00F0FF] to-[#FF00C8]"></span>
            </h3>
            
            <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-4">
                    <p className="text-lg text-[#CCD6F6]">
                        I'm a <span className="text-[#00F0FF]">Computer Science & Business</span> student at Memorial University, 
                        passionate about building applications that solve real problems.
                    </p>
                    
                    <p className="text-lg text-[#CCD6F6]">
                        My journey in tech started with simple HTML websites and grew into a fascination with 
                        <span className="text-[#FF00C8]"> full-stack development</span>, extended reality, and the 
                        intersection of technology with everyday life.
                    </p>
                    
                    <p className="text-lg text-[#CCD6F6]">
                        Beyond coding, I'm deeply interested in product design, user experience, and creating 
                        systems that feel intuitive yet powerful.
                    </p>
                    
                    <div className="mt-6 cyber-card p-5 bg-[#0A1221]">
                        <h4 className="text-xl text-[#58DFC3] mb-3">// CURRENT FOCUS</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-[#00F0FF] mr-2">▹</span>
                                <span>Building immersive web experiences</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00F0FF] mr-2">▹</span>
                                <span>Expanding my knowledge in AR/VR development</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00F0FF] mr-2">▹</span>
                                <span>Contributing to open-source projects</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00F0FF] mr-2">▹</span>
                                <span>Looking for development internships for 2023</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="md:col-span-5">
                    <div className="cyber-card h-full flex flex-col justify-between p-5 bg-[#0A1221]">
                        <h4 className="text-xl text-[#58DFC3] mb-3">// TECH STACK</h4>
                        <SkillsNetwork />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;