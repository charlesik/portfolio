import projImg1 from "../projectshots/fyurr.jpg";
import projImg2 from "../projectshots/coffeeshop.png";
import projImg3 from "../projectshots/foodcafe.png";
import projImg4 from "../projectshots/hermes.png";
import projImg5 from "../projectshots/lawfirm.png";
import projImg6 from "../projectshots/trivia.gif";
import projImg7 from "../projectshots/techfirm.png";
import projImg8 from "../projectshots/NGO.png";
import projImg9 from "../projectshots/OAP.png";
import projImg10 from "../projectshots/form.png";
import projImg11 from "../projectshots/waves.png";
import projImg12 from "../projectshots/movies.png";
import projImg13 from "../projectshots/gojek.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLink } from '@fortawesome/free-solid-svg-icons'





function Projects(){
    const projects = [
      {
        title: "Waves DAO",
        description: "Crypto Medium",
        imgUrl: projImg11,
        link: 'https://wave-daos.vercel.app/',
        tech: 'Next JS'
      },
      {
        title: "TestApp",
        description: "Movies Data",
        imgUrl: projImg12,
        link: 'https://charelestestapp.netlify.app/',
        tech: 'Next JS'
      },
      {
        title: "Hermes Delivery",
        description: "Courier Services",
        imgUrl: projImg4,
        link: 'https://hermesdemo.netlify.app/',
        tech: 'JavaScript'
      },
      {
        title: "Gojek",
        description: "Online Services",
        imgUrl: projImg13,
        link: 'https://gojek-wine.vercel.app/',
        tech: 'React'
      },
        {
          title: "VulcanTech NG",
          description: "Mockup For StartUp",
          imgUrl: projImg7,
          link: 'https://vulcantechng.netlify.app/',
          tech: 'JavaScript'
        },
        {
          title: "Registration Form",
          description: "React Form",
          imgUrl: projImg10,
          link: 'https://mysignupduru.netlify.app/',
          tech: 'React'
        },
        {
          title: "Food Cafe",
          description: "Restaurant Mockup",
          imgUrl: projImg3,
          link: 'https://github.com/charlesik/food-cafe-react-js-.git',
          tech: 'React'
        },
        {
          title: "Law Firm",
          description: "Advocacy mock up",
          imgUrl: projImg5,
          link: 'https://whispertask.netlify.app/',
          tech: 'Javascript'
        },
        {
          title: "Natasha Ilo Foundation",
          description: "Non-Profit Organisation",
          imgUrl: projImg8,
          link: 'https://natashailofoundation.org',
          tech: 'Wordpress'
        },
        {
          title: "Ada Oji River",
          description: "On Air Personality",
          imgUrl: projImg9,
          link: 'https://adaojiriver.org',
          tech: 'Wordpress'
        },
        {
          title: "Fyurr",
          description: "Artist & Venue Booking  ",
          imgUrl: projImg1,
          link: 'https://github.com/charlesik/fyyur-project.git',
          tech: 'React, Flask'
        },
        {
          title: "Coffeeshop",
          description: "Fullstack API",
          imgUrl: projImg2,
          link: 'https://github.com/charlesik/Coffee-Shop-Fullstack-API.git',
          tech: 'React, Flask'
        },
        {
          title: "Trivia API",
          description: "Game",
          imgUrl: projImg6,
          link: 'https://github.com/charlesik/Trivia-API.git',
          tech: 'React, Flask'
        },
      ];
      const projectList = projects.map((project,index)=>{
        return <div className=" w-80  bg-white text-black h-96 rounded-lg m-5 lg:m-10" key={index}>
            <div><img className=" h-72 rounded-t-lg" src={project.imgUrl}/></div>
            <div className="pl-3 pt-2 text-left">
                <p className="font-bold text-lg">{project.title}</p>
                <p>{project.description}</p>
                <div className="flex "> 
                <p className="border w-24 text-gray-400 rounded-sm mr-2">{project.tech}</p>
                <a href={project.link} className="text-gray-400"><FontAwesomeIcon icon={faLink}/> </a>
                </div>
            </div>
            </div>
      })
      return(
        <div className="mt-8 text-center lg:text-left">
        <p className=" lg:ml-12 text-gray-500">- PROJECTS</p>
        <h1 className="text-pur text-4xl lg:mb-10 lg:ml-12">Featured Works</h1>
        <div className="  projects flex flex-wrap justify-around overflow-scroll ">
        {projectList}
        </div>
        
      </div>
      )
}

export default Projects;