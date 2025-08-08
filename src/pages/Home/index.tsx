import blythe  from './../../assets/blythe.png'
import normal from './../../assets/normal.jpeg'
import imagemLaura from './../../assets/imagemLaura.jpeg'
import PonderaLegal from './../../assets/PonderaLegal.png'
import GCP from './../../assets/GCP.png'
import Java from './../../assets/Java.png'
import { 
  Github, Linkedin, ChevronDown, Code, Database, Cloud, GitBranch, 
  MonitorDot, Server, LayoutDashboard, Terminal, Package, Cpu, Zap, Settings, 
  Globe, Type, Smartphone, Rocket, Monitor, Coffee,
} from 'lucide-react';
import { FaSpotify, FaMedium, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../../components/card';
import { useState } from 'react';
import Footer from '../../components/footer'

function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const photo1 = blythe;
  const photo2 = normal;

  const descriptiveText = "Aspiring full-stack and mobile software developer, focused on solution-oriented development using best practices..";

    const technicalSkills = [
    { name: 'JavaScript', icon: <Code size={30} /> },
    { name: 'TypeScript', icon: <Type size={30} /> },
    { name: 'React', icon: <MonitorDot size={30} /> },
    { name: 'Node.js', icon: <Server size={30} /> },
    { name: 'Nest.js', icon: <Package size={30} /> }, 
    { name: 'Python', icon: <Cpu size={30} /> },
    { name: 'Java', icon: <Coffee size={30} /> }, 
    { name: 'PHP', icon: <Code size={30} /> }, 
    { name: 'HTML', icon: <Globe size={30} /> },
    { name: 'CSS', icon: <LayoutDashboard size={30} /> },
    { name: 'Tailwind CSS', icon: <Zap size={30} /> },
    { name: 'Linux', icon: <Terminal size={30} /> },
    { name: 'Windows', icon: <Monitor size={30} /> }, 
    { name: 'Android', icon: <Smartphone size={30} /> }, 
    { name: 'Docker', icon: <Cloud size={30} /> },
    { name: 'Git', icon: <GitBranch size={30} /> },
    { name: 'GitHub', icon: <Github size={30} /> },
    { name: 'CI/CD', icon: <Settings size={30} /> }, 
    { name: 'Vercel', icon: <Rocket size={30} /> }, 
    { name: 'MongoDB', icon: <Database size={30} /> },
    { name: 'PostgreSQL', icon: <Database size={30} /> },
    { name: 'MySQL', icon: <Database size={30} /> },
  ];

    const projects = [
    {
      title: "RESTful API hosted with GCP",
      description: "An API developed with FastAPI to manage students, courses, and enrollments at an educational institution, with Swagger documentation.",
      imageUrl: GCP,
      projectUrl: "https://github.com/kyoulau/api-python-docker"
    },
    {
      title: "Constitutional Digital Gamification - Pondera Legal",
      description: "An innovative project that transforms the study of Constitutional Law into an engaging game experience! 'Choque Jurídico' is an interactive tool for exploring the challenges and conflicts of fundamental rights in the digital age.",
      imageUrl: PonderaLegal,
      projectUrl: "https://github.com/maricastroo/ponderalegal"
    },
    {
      title: "Workshop about version control with Git & GitHub",
      description: "A workshop that covers version control and Git, with a focus on branching and merging, and GitHub as a platform for collaboration and code management.",
      imageUrl: imagemLaura,
      projectUrl: "https://www.linkedin.com/posts/laura-santos-costa_ol%C3%A1-rede-querida-aqui-estou-eu-mais-uma-activity-7317631019073851392-SVCB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADib-YEBr93dI0g2sWZvzBxpo2xcb-skepc"
    },
    {
      title: "Data Structures with Java",
      description: "In this Medium post, I dive into the knowledge from my Information Systems degree, showing how to write more efficient Java code by implementing data structures like stacks and queues.",
      imageUrl: Java,
      projectUrl: "https://medium.com/@laucosan05/estrutura-de-dados-com-pilhas-e-filas-em-java-6cbe30b68b78"
    }
  ];

  return (
    <div className="bg-neutral-800 min-h-screen font-inter">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true" 
      />

      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center justify-start max-w-7xl mx-auto" >
        
        <div
          className="relative transition-transform duration-300 hover:scale-105 m-2.5 p-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={isHovering ? photo2 : photo1}
            alt="Foto de perfil de Laura Santos"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide">
            Laura Santos
          </h1>
          
          <p className="mt-4 text-sm md:text-base lg:text-lg text-neutral-300 max-w-md">
            {descriptiveText}
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/laura-santos-costa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-transform duration-300 hover:scale-125"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://github.com/kyoulau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-transform duration-300 hover:scale-125"
            >
              <Github size={22} />
            </a>

            <a
              href="https://medium.com/@laucosan05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-transform duration-300 hover:scale-125"
            >
              <FaMedium size={22} />
            </a>

            <a
              href='https://open.spotify.com/user/laucurtemusica-br'
              target="_blank"
              rel="noopener noreferrer"
              className='text-white hover:text-purple-400 transition-transform duration-300 hover:scale-125'
            >
              <FaSpotify size={22} />
            </a>

            <a
              href="https://www.instagram.com/kyoulau/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-transform duration-300 hover:scale-125"
            >
              <FaInstagram size={22} />
            </a>

            <a 
              href="https://psychedelic-gazelle-22b.notion.site/Laura-Costa-2426d3b3d2158074ae03cdb0c100f462?pvs=143"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400 transition-transform duration-300 hover:scale-125">
                  CV
                </p>
              </a>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-8">
            <button
              onClick={() => setShowSkills(!showSkills)}
              className="px-6 py-3 bg-purple-800 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-75 transition-all duration-300 flex items-center justify-center mx-auto md:mx-0"
            >
              My Technical Skills
              <ChevronDown 
                size={20} 
                className={`ml-2 transition-transform duration-300 ${showSkills ? 'rotate-180' : ''}`} 
              />
            </button>

            <div className='flex items-center'>
              <Link to="/sobre"  className=" hover:text-purple-300 transition-colors duration-300"> About me</Link>
            </div>
          </div>

            <div 
            className={`mt-8 transition-all duration-500 ease-in-out overflow-hidden ${
              showSkills ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-4 bg-neutral-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-purple-400 mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-sm text-neutral-200">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>

          </div>

        </div>
        <section className="w-full mt-16 mb-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-10 font-serif">My Main Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Home;
