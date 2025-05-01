import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header className={`fixed w-full px-2 top-0 z-10 lg:px-5 transition-all duration-300 ${scrolled ? 'bg-[#050A13] bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}`}>
            <nav className="flex text-2xl py-5 items-center justify-between max-w-7xl mx-auto">
                <h1 className="font-semibold text-white relative overflow-hidden group">
                    <span className="inline-block">
                        <span className="relative z-10">TUSHAR</span>
                        <span className="absolute top-0 left-0 w-full h-full bg-[#00F0FF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-30 z-0"></span>
                    </span>{" "}
                    <span className="inline-block text-[#00F0FF]">BILLAKANTI</span>
                </h1>
                
                <div className="flex items-center space-x-6">
                    <ul className="hidden md:flex space-x-8 text-sm">
                        <li><a href="#about" className="text-white hover:text-[#00F0FF] transition-colors">ABOUT</a></li>
                        <li><a href="#experience" className="text-white hover:text-[#00F0FF] transition-colors">EXPERIENCE</a></li>
                        <li><a href="#projects" className="text-white hover:text-[#00F0FF] transition-colors">PROJECTS</a></li>
                        <li><a href="#connect" className="text-white hover:text-[#00F0FF] transition-colors">CONNECT</a></li>
                    </ul>
                    
                    <a className="text-[#00F0FF] border border-[#00F0FF] hover:text-white hover:bg-[#00F0FF] hover:bg-opacity-20 px-5 py-2 relative overflow-hidden group" 
                       href="/Tushar_Resume.pdf" 
                       target='_blank' 
                       rel="noreferrer">
                        <span className="relative z-10">RESUME</span>
                        <span className="absolute top-0 left-0 w-full h-0 bg-[#00F0FF] opacity-20 group-hover:h-full transition-all duration-300"></span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;