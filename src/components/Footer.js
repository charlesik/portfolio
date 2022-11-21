import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer(){
    const year= new Date().getFullYear()
    return(
        <div className="text-center text-gray-500">
            
            <a href="https://github.com/charlesik" ><FontAwesomeIcon icon={faGithub}/> </a>
          <a href="https://www.linkedin.com/in/ikechukwu-ilo-820879218"><FontAwesomeIcon icon={faLinkedin}/> </a>
          <p>&copy; {year} Charles Ilo </p>
        </div>
    )
}
export default Footer;