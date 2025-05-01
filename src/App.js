import Navbar from './components/Navbar.js'
import TerminalHero from './components/TerminalHero.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Connect from './components/Connect.js'
import ScrollReveal from './components/ScrollReveal.js'

const App = () => {
  return (
    <div className="bg-[#050A13]">
      <Navbar />
      <main className='min-h-max px-5 md:px-20 lg:px-40'>
        <TerminalHero />
        
        <section id="about" className='min-h-max pt-20'>
          <ScrollReveal animation="slideUp">
            <About />
          </ScrollReveal>
        </section>

        <section id="experience" className='min-h-max pt-20'> 
          <ScrollReveal animation="slideUp" delay={150}>
            <Experience />
          </ScrollReveal>
        </section>
        
        <section id="projects" className='min-h-max pt-20'>
          <ScrollReveal animation="slideUp" delay={200}>
            <Projects />
          </ScrollReveal>
        </section>
        
        <section id="connect" className='min-h-min pt-20'>
          <ScrollReveal animation="slideUp" delay={300}>
            <Connect />
          </ScrollReveal>
        </section>
        
        <footer className='flex justify-center items-center pb-7 text-white font-mono'>
          <span className="glitch-text">Designed & Built by Tushar! © {new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  );
}

export default App;