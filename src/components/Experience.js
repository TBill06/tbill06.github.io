import { useState } from "react";

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    const experiences = [
        {
            title: "Undergraduate Research Developer",
            company: "Memorial University - HCI Lab",
            date: "Jan 2024 - Dec 2024",
            duties: [
                "Coauthored a paper \"Comparing Pinch and Point Poses for Stroke Drawing in Virtual Reality\" with Dr. Jay Henderson.",
                "Built and designed an Unity VR app with ECS architecture for a robust game-like experience to allow users drawing on multiple surfaces with various hand poses.",
                "Implemented algorithms to optimize user experience like procedural mesh generations for 3D drawing, ray-casting, filters to reduce hand tracking jitters, data structures to collect points for analysis."
            ],
            tags: ["Unity", "VR", "C#", "Research", "ECS"]
        },
        {
            title: "Front End Developer Intern",
            company: "Carnegie Learning - Zorbits Math",
            date: "Apr 2023 - Dec 2023",
            duties: [
                "Developing and maintaining CL dashboard, contributing to 10 projects focused on new features implementation and internal testing tools. Also a lot of bug-fixing, code refactoring to ensure smooth re branding of the product.",
                "Designed and implemented reusable Angular components, services, and modules, enhancing code scalability and maintainability by 25% in key feature like student performance reports, teacher resources, district and school profiles.",
                "Implemented analytical strategies by leveraging Pendo, to track user interactions with features withing the product, enabling a 40% improvement in product decision making with the help of quality user data."
            ],
            tags: ["Angular", "TypeScript", "Analytics", "Pendo", "UI/UX"]
        },
        {
            title: "Full Stack Developer",
            company: "DIAG Lab - Memorial University",
            date: "Apr 2022 - Dec 2022",
            duties: [
                "Worked in a team developing issue/ticket management system for a machine learning lab detecting medical images."
            ],
            tags: ["Full Stack", "Ticket System", "Medical Imaging"]
        },
        {
            title: "Learning Design and Development Assistant",
            company: "CITL - Memorial University",
            date: "Oct 2021 - Mar 2022",
            duties: [
                "Developed web pages for nursing courses which were taught online at MUN Nursing school",
                "Wrote technical reports for support page release notes.",
                "Refactored course content to avoid copyright infringement and achieve web accessibility."
            ],
            tags: ["Web Development", "Technical Writing", "Accessibility"]
        }
    ];

    return (
        <div className="pb-16">
            <h3 className="text-4xl text-gradient font-bold py-2 mb-8">
                <span>EXPERIENCE</span>
                <span className="ml-3 inline-block h-px w-20 bg-gradient-to-r from-[#00F0FF] to-[#FF00C8]"></span>
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6">
                {/* Tabs navigation */}
                <div className="md:w-1/4">
                    <div className="sticky top-24">
                        <div className="flex md:flex-col overflow-x-auto scrollbar-hide md:overflow-visible">
                            {experiences.map((exp, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`py-3 px-4 text-left border-b-2 md:border-b-0 md:border-l-2 transition-all whitespace-nowrap md:whitespace-normal ${
                                        activeTab === idx 
                                            ? 'border-[#00F0FF] text-[#00F0FF] bg-[#0A1221]' 
                                            : 'border-[#112240] text-white hover:border-[#58DFC3] hover:text-[#58DFC3]'
                                    }`}
                                >
                                    <span className="text-xs font-mono block">{exp.company.split(' - ')[0]}</span>
                                    <span className="font-bold">{exp.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content area */}
                <div className="md:w-3/4">
                    <div className="cyber-card p-6 bg-[#0A1221]">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">
                                <span className="text-white">{experiences[activeTab].title}</span>
                                <span className="text-[#00F0FF]"> @ </span>
                                <span className="text-[#58DFC3]">{experiences[activeTab].company.split(' - ')[0]}</span>
                            </h3>
                            <p className="text-sm font-mono text-gray-400">{experiences[activeTab].company.split(' - ')[1]}</p>
                            <p className="text-sm font-mono text-[#FF00C8] mt-1">{experiences[activeTab].date}</p>
                        </div>

                        <ul className="space-y-4">
                            {experiences[activeTab].duties.map((duty, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-[#00F0FF] mr-2 mt-1.5">▹</span>
                                    <span className="text-[#CCD6F6]">{duty}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-6 flex flex-wrap gap-2">
                            {experiences[activeTab].tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 text-xs font-mono bg-[#112240] text-[#58DFC3] rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;