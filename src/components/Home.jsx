import React from 'react';
import './Home.css';
import Accordion from './Accordion';
import Footer from './Footer';
import frontendimg from './frontendimg.png';
import backendimg from './backendimg.png';
import competitiveprogrammerimg from './competitiveimg.png';
import htmlimg from './html-5.png';
import cssimg from './css-3.png';
import jsimg from './js.png';
import sqlimg from './sql-server.png';
import nodeimg from './nodejs.png';
import reactimg from './structure.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Home() {
  return (
    <>
    <div className='hero'>
      
    </div>
      <div id='about'>
      <div className='aboutme'>
        <h4>About me</h4>
        <h2>Introduction.</h2>
        <p>Hello, I am Maria Torrealba, a dedicated coding apprentice and aspiring front-end software engineer. My journey has been extremely rewarding, allowing me to take ownerhsip of projects and experience rapid professional growth through continuous learning. My curiosity for exploring new technologies has led me to diverse projects, including E-commerce project and creating engaging web apps and full-stack applications in team settings. Each project presents a unique opportunity for me to expand my technical repertoire and push the boundaries of innovation. Let's connect and explore opportunities to collaborate on exciting ventures together!</p>
      </div>
      </div>
      <div className='threecard-container'>
        <div className='card'>
        <img className="card-img" src={frontendimg} alt="Front End Programming"/>
            <h4>Front end programmer</h4>
        </div>
        <div className='card'>
        <img className="card-img" src={backendimg} alt="Back End Programming"/>
            <h4>Back end programmer</h4>
        </div>
        <div className='card'>
        <img className="card-img" src={competitiveprogrammerimg} alt="Competitive Programmer"/>
            <h4>Competitive programmer</h4>
        </div>
      </div>
      <div id='skills'>
      <div className='skillssection'>
        <h4>My skills</h4>
        <h2>Tech Stack.</h2>
        <h4>Technical Languages</h4>
        <img src={htmlimg} alt="HTML"></img>
        <img src={cssimg} alt="CSS"></img>
        <img src={jsimg} alt="JavaScript"></img>
        <img src={sqlimg} alt="SQL"></img>
        <img src={nodeimg} alt="Node.js"></img>
        <img src={reactimg} alt="React"></img>
      </div>
      </div>
      <div id='projects'>
      <div className='projectssection'>
        <h4>What I have made.</h4>
        <h2>Websites</h2>
        <div className="accordion">
      <Accordion title="Code for Justice" content="Nonprofit organization wesbite designed to help people experiencing homelessness in the city of Charlotte North Carolina and for volunteers to see how they can help."
      linkUrl="https://bridge-to-home.vercel.app/" />
      <Accordion title="E-commerce" content="E-commerce website about Cold Pressed Juices, with more than 15 flavors and a working filter by price or type." linkUrl="https://plantss.onrender.com"/>
      <Accordion title="Hope Hacks" content="Hackaton made in a group setting to target poor dieting and nutrition in U.S households. Provides healthy recipes with a list of ingredients and nutrition facts."
      linkUrl="https://nutrilife-t06p.onrender.com/home.html"
      />
      <Accordion title="Portfolio" content="My portfolio wesbite"
      linkUrl=""
      />
    </div>
      </div>
      </div>
      <div className='contactme'>
      <h2>Get in touch</h2>
      <div className='socialicons'>
        <a href="https://www.linkedin.com/in/mariafernandatorrealbagarcia/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='socialicon'/>
        </a>
        <a href="https://github.com/mmaferrrr" target="_blank" rel="noopener noreferrer">
          <FaGithub className='socialicon'/>
        </a>
        <a href="mailto:mmaferrrr@outlook.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineMailOutline className='socialicon'/>
        </a>
        <button className='resumebutton'><a href="Maria-F-Resume.pdf" download target="_blank" rel="noopener noreferrer">
      Download My Resume
    </a>
    </button>
      </div>
    </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
