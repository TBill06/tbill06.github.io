import TypewriterText from './TypeWriter';

const TerminalHero = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center pt-20">
      <div className="cyber-card p-5 md:p-8 mx-auto w-full max-w-3xl bg-[#0A1221] animated-fadeIn">
        <div className="flex items-center mb-4 border-b border-gray-700 pb-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-gray-400 text-sm">terminal@tushar:~</div>
        </div>
        
        <div className="font-mono text-sm md:text-base text-[#CCD6F6] space-y-4">
          <div className="flex">
            <span className="text-[#00F0FF] mr-2">$</span>
            <TypewriterText text="whoami" speed={100} />
          </div>
          
          <div className="pl-4 text-[#58DFC3]">
            <TypewriterText 
              text="Tushar Billakanti - Computer Science & Business Student" 
              delay={800} 
              speed={30} 
            />
          </div>
          
          <div className="flex">
            <span className="text-[#00F0FF] mr-2">$</span>
            <TypewriterText text="cat skills.txt" speed={100} delay={2000} />
          </div>
          
          <div className="pl-4 text-white">
            <TypewriterText 
              text="Full-stack Development | AI/ML | VR/AR | Software Engineering" 
              delay={3000} 
              speed={20} 
            />
          </div>
          
          <div className="flex">
            <span className="text-[#00F0FF] mr-2">$</span>
            <TypewriterText text="echo $MISSION" speed={100} delay={4500} />
          </div>
          
          <div className="pl-4 text-[#FF00C8]">
            <TypewriterText 
              text="Building applications that integrate tech into our lives to make em better."
              delay={5500} 
              speed={25} 
            />
          </div>
          
          <div className="mt-8 flex items-center">
            <span className="text-[#00F0FF] mr-2 animate-pulse">`{'>'}`</span>
            <span className="text-white">Scroll down to explore my work...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;