import head from "../projectshots/110.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Intro(){
    return(
        <div className="flex lg:mx-12 justify-between lg:text-left text-center   mt-14">
        <div className="lg:w-1/2  lg:pr-32">
          <p className="text-gray-500 ">-HI THERE I'M</p>
          <h2 className="text-5xl lg:text-6xl mb-4">
            Charles <span className="text-pur">Ilo</span>
          </h2>
          <p className="text-center lg:text-left">
            Creative front-end developer with more than 3 years of experience
            in enterprise companies and startups. Proficient in Html, Tailwind
            Css, Javascript and React.
          </p><br/>
          <a href="https://github.com/charlesik"><FontAwesomeIcon icon={faGithub}/> </a>
          <a href="https://www.linkedin.com/in/ikechukwu-ilo-820879218"><FontAwesomeIcon icon={faLinkedin}/> </a>
        </div>
        <div className="w-1/2 pl-44 hidden lg:block ">
            <img src={head} className='h-80'/>
        </div>
      </div>
    )
}

export default Intro;