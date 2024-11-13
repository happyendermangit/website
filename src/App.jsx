import { useState } from 'react';
import reactLogo from './assets/react.svg';
import typescriptLogo from './assets/ts.svg';
import honoLogo from './assets/hono.svg';
import discordLogo from './assets/dc.svg';
import './App.css';

function App() {
    const [skills, setSkills] = useState([
        {
            name: 'TypeScript',
            logo: typescriptLogo,
        },
        {
            name: 'React',
            logo: reactLogo,
        },
        {
            name: 'Hono (CF workers)',
            logo: honoLogo,
        },
        {
            name: 'Discord Dataminer',
            logo: discordLogo,
        },
    ]);
    const [projects, setProjects] = useState([
        {
            githubUrl: 'https://github.com/wavedevgit/discord-datamining_v2',
            name: 'Discord collectibles & activities watcher',
            description:
                'This code watches when a category/profile effect/activity is posted/modified/deleted by discord and notifies me on a discord webhook',
            logo: discordLogo,
        },
        {
            githubUrl: 'https://github.com/wavedevgit/discord-datamining',
            name: 'Discord builds saver',
            description:
                'This code saves all builds from each discord channel (canary, ptb, stable) into one json file and a folder',
            logo: discordLogo,
        },
    ]);

    return (
        <div>
            <div className="p-20 mx-auto text-start">
                <h1 className="font-bold">
                    Yo, I'm <span className="grad">WaveDev</span> 👋
                </h1>
                <p className="mt-10">
                    I’m a passionate <b>backend</b> developer, I mostly code using TypeScript.
                </p>
            </div>
            <div className="px-20 mx-auto text-start">
                <h1 className="font-bold">Skills</h1>
                <div className="sm:flex sm:gap-5 grid grid-cols-1 gap-3">
                    {skills.map((skill) => (
                        <div className="min-w-[200px] sm:max-w-[200px] flex bg-black px-5 py-3 rounded-lg border-[0.5px] border-gray-500">
                            <img src={skill.logo} className="mr-5 w-[50px] h-[50px]"></img>
                            <h3 className="font-bold">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-20 mx-auto text-start">
                <h1 className="font-bold">Projects</h1>
                <p>I've built a couple of projects, but I don't maintain all of them</p>
                <button className="mb-5 mt-3" onClick={() => window.open('https://github.com/wavedevgit')}>
                    View all of them on my github...
                </button>
                <div className="sm:flex sm:gap-5 grid grid-cols-1 gap-3">
                    {projects.map((project) => (
                        <div className="sm:min-w-[400px] min-w-[300px] sm:max-w-[400px] bg-black px-5 py-3 rounded-lg border-[0.5px] border-gray-500">
                            <div className="flex">
                                <img src={project.logo} className="mr-5 w-[50px] h-[50px]"></img>
                                <h3 className="font-bold">{project.name}</h3>
                            </div>
                            <p className="text-md">{project.description}</p>
                            <button onClick={() => window.open(project.githubUrl)}>Open in github</button>
                        </div>
                    ))}
                </div>
                <br></br>
            </div>
        </div>
    );
}

export default App;
