import projImg1 from "../projectshots/fyurr.jpg";
import projImg2 from "../projectshots/coffeeshop.png";
import projImg3 from "../projectshots/foodcafe.png";
import projImg4 from "../projectshots/hermes.png";
import projImg5 from "../projectshots/lawfirm.png";
import projImg6 from "../projectshots/trivia.gif";







function Projects(){
    const projects = [
        {
          title: "Fyurr",
          description: "Artist & Venue Booking  ",
          imgUrl: projImg1,
        },
        {
          title: "Coffeeshop",
          description: "Fullstack API",
          imgUrl: projImg2,
        },
        {
          title: "Food Cafe",
          description: "Restaurant Mockup",
          imgUrl: projImg3,
        },
        {
          title: "Hermes Delivery",
          description: "Courier Services",
          imgUrl: projImg4,
        },
        {
          title: "Law Firm",
          description: "Advocacy mock up",
          imgUrl: projImg5,
        },
        {
            title: "Food Cafe",
            description: "Restaurant Mockup",
            imgUrl: projImg3,
          },
          {
            title: "Hermes Delivery",
            description: "Courier Services",
            imgUrl: projImg4,
          },
          {
            title: "Law Firm",
            description: "Advocacy mock up",
            imgUrl: projImg5,
          },
        {
          title: "Trivia API",
          description: "Game",
          imgUrl: projImg6,
        },
      ];
      const projectList = projects.map((project)=>{
        return <div className="w-80  bg-white text-black h-96 rounded-lg m-10">
            <div><img className=" h-72 rounded-t-lg" src={project.imgUrl}/></div>
            <div className="pl-7">
                <p>{project.title}</p>
                <p>{project.description}</p>
            </div>
            </div>
      })
      return(
        <div className="mt-8">
        <p className=" ml-12 text-gray-500">- PROJECTS</p>
        <h1 className="text-pur text-4xl mb-10 ml-12">Featured Works</h1>
        <div className="projects flex flex-wrap justify-around overflow-scroll ">
        {projectList}
        </div>
        
      </div>
      )
}

export default Projects;