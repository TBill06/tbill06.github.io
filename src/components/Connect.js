import { useState } from 'react';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Connect = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    
    const socialLinks = [
        {
            id: 'github',
            icon: <FiGithub />,
            url: 'https://github.com/TBill06',
            label: 'GitHub: Check out my code'
        },
        {
            id: 'linkedin',
            icon: <FiLinkedin />,
            url: 'http://www.linkedin.com/in/tbill06',
            label: 'LinkedIn: Connect professionally'
        },
        {
            id: 'twitter',
            icon: <FiTwitter />,
            url: 'https://twitter.com/Tushar_bill',
            label: 'Twitter: Follow my updates'
        },
    ];

    return(
        <div className='pb-20'>
            <h3 className="text-4xl text-gradient font-bold py-2 mb-8">
                <span>GET IN TOUCH</span>
                <span className="ml-3 inline-block h-px w-20 bg-gradient-to-r from-[#00F0FF] to-[#FF00C8]"></span>
            </h3>
            
            <div className="cyber-card p-8 bg-[#0A1221] max-w-2xl mx-auto text-center">
                <p className="text-xl text-white mb-8 mt-2">
                    I'm actively seeking <span className="text-[#58DFC3]">for a full-time job.</span> 
                    Feel free to reach out if you'd like to discuss potential collaborations!
                </p>
                
                <div className="relative h-24 mb-8">
                    {socialLinks.map(social => (
                        <a 
                            key={social.id}
                            href={social.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-block mx-4"
                            onMouseEnter={() => setHoveredIcon(social.id)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            <div className={`text-4xl transition-all duration-300 ${
                                hoveredIcon === social.id 
                                    ? 'text-[#00F0FF] scale-125' 
                                    : hoveredIcon 
                                        ? 'text-[#3B4354] scale-75' 
                                        : 'text-[#CCD6F6]'
                            }`}>
                                {social.icon}
                            </div>
                        </a>
                    ))}
                    
                    <div className={`absolute left-0 right-0 bottom-0 text-sm font-mono transition-all duration-300 ${
                        hoveredIcon ? 'opacity-100' : 'opacity-0'
                    }`}>
                        {hoveredIcon && socialLinks.find(s => s.id === hoveredIcon)?.label}
                    </div>
                </div>
                
                <a 
                    className="inline-block text-[#00F0FF] border border-[#00F0FF] px-8 py-3 
                               relative overflow-hidden group transition-all duration-300
                               hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]" 
                    href='mailto:tbillakanti@mun.ca'
                    target='_blank'
                    rel="noreferrer"
                >
                    <span className="relative z-10">INIT_CONTACT( )</span>
                    <span className="absolute top-0 left-0 w-0 h-full bg-[#00F0FF] opacity-20 
                                     group-hover:w-full transition-all duration-300"></span>
                </a>
            </div>
        </div>
    );
};

export default Connect;