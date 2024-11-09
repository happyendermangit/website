import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Mail, ChevronDown, Menu, X } from 'lucide-react';
import reactLogo from './assets/react.svg';
import typescriptLogo from './assets/ts.svg';
import honoLogo from './assets/hono.svg';
import discordLogo from './assets/discord.svg';

function SkillCard({ skill }) {
    return (
        <div className="group flex items-center bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700/50 w-full sm:min-w-[240px] sm:max-w-[240px] transition-all duration-500 hover:scale-105 hover:border-cyan-500/50">
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-500 group-hover:scale-110" />
            <h3 className="font-bold ml-3 sm:ml-4 text-base sm:text-lg text-white">{skill.name}</h3>
        </div>
    );
}

SkillCard.propTypes = {
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    }).isRequired,
};

function ProjectCard({ project }) {
    return (
        <div className="group bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700/50 w-full sm:min-w-[300px] lg:min-w-[400px] lg:max-w-[400px] transition-all duration-500 hover:scale-105 hover:border-cyan-500/50">
            <div className="flex items-center mb-3 sm:mb-4">
                <img src={project.logo} alt={`${project.name} logo`} className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="font-bold ml-3 sm:ml-4 text-base sm:text-lg text-white">{project.name}</h3>
            </div>
            <p className="text-sm sm:text-md text-gray-300">{project.description}</p>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    }).isRequired,
};

function App() {
    const [skills] = useState([
        { name: 'TypeScript', logo: typescriptLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Hono', logo: honoLogo },
        { name: 'Discord', logo: discordLogo },
    ]);

    const [projects] = useState([
        {
            githubUrl: 'https://github.com/happyendermangit/discord-datamining_v2',
            name: 'Discord Collectibles & Activities Watcher',
            description: 'Monitors category/profile activity changes on Discord and sends webhook notifications.',
            logo: discordLogo,
        },
        {
            githubUrl: 'https://github.com/happyendermangit/discord-datamining',
            name: 'Discord Build Saver',
            description: 'Saves builds from Discord channels (canary, ptb, stable) into a JSON file and folder.',
            logo: discordLogo,
        },
    ]);

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
                <div className={`fixed inset-0 z-50 pointer-events-none ${mobileMenuOpen ? 'h-full' : 'h-auto'}`}>
                    <nav className={`w-full pointer-events-auto transition-all duration-300 py-4 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : ''}`}>
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                            <span className="text-lg sm:text-xl font-bold text-white">Wave Dev</span>
                            
                            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                                {['about', 'skills', 'projects', 'contact'].map((section) => (
                                    <li key={section}>
                                        <button 
                                            onClick={() => scrollToSection(section)}
                                            className="text-gray-400 hover:text-white capitalize border-none p-2 hover:bg-transparent transition-colors duration-300"
                                        >
                                            {section}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle mobile menu"
                            >
                                <div className="relative w-6 h-6">
                                    <Menu className={`w-6 h-6 absolute transition-all duration-300 ${
                                        mobileMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                                    }`} />
                                    <X className={`w-6 h-6 absolute transition-all duration-300 ${
                                        mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                                    }`} />
                                </div>
                            </button>
                        </div>

                        <div 
                            className={`md:hidden fixed inset-x-0 bottom-0 pointer-events-auto bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
                                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                            }`}
                            style={{ top: '60px' }}
                        >
                            <ul className="flex flex-col items-center gap-4 text-sm font-medium pt-8">
                                {['about', 'skills', 'projects', 'contact'].map((section, index) => (
                                    <li 
                                        key={section}
                                        className={`transform transition-all duration-300 ${
                                            mobileMenuOpen 
                                                ? 'translate-x-0 opacity-100' 
                                                : 'translate-x-8 opacity-0'
                                        }`}
                                        style={{ 
                                            transitionDelay: `${index * 50}ms`,
                                        }}
                                    >
                                        <button 
                                            onClick={() => scrollToSection(section)}
                                            className="text-gray-400 hover:text-white capitalize border-none p-4 hover:bg-transparent transition-colors duration-300"
                                        >
                                            {section}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>

                <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32">
                    <header className="min-h-[60vh] sm:min-h-[70vh] flex flex-col items-center justify-center text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                            Yo, I&apos;m <span className="grad">WaveDev</span> 👋
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl px-4">
                            A passionate <span className="text-cyan-400 font-semibold">backend developer</span> crafting scalable solutions with TypeScript
                        </p>
                        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mt-12 sm:mt-16 animate-bounce text-gray-400" />
                    </header>

                    <section id="about" className="py-16 sm:py-20 min-h-screen flex flex-col items-center justify-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white">About Me</h2>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl text-center px-4">
                            I love coding, building backends, and working with scalable cloud architectures. 
                            My passion lies in creating efficient and robust solutions that make a difference.
                        </p>
                    </section>

                    <section id="skills" className="py-16 sm:py-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-white">Skills</h2>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-4">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </section>

                    <section id="projects" className="py-16 sm:py-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-white">Projects</h2>
                        <div className="flex flex-col items-center mb-8 sm:mb-12">
                            <p className="text-lg sm:text-xl text-gray-400 mb-6 text-center max-w-2xl px-4">
                                Here are a few of my projects that showcase my skills and interests.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-4">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </div>
                    </section>

                    <section id="contact" className="py-16 sm:py-20 mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-white">Get in Touch</h2>
                        <div className="flex flex-col items-center px-4">
                            <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 text-center max-w-2xl">
                                Interested in working together? Let&apos;s connect and create something amazing!
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => window.open('mailto:contact@wavedev.lol')}
                                    className="bg-gray-700/50 hover:bg-cyan-600 transition-all duration-300 py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center gap-2 border-none text-white text-sm sm:text-base"
                                >
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>Get in Touch</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
