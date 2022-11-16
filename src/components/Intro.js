import head from "../projectshots/110.png";

function Intro(){
    return(
        <div className="flex lg:mx-12 justify-between lg:text-left text-center   mt-14">
        <div className="lg:w-1/2  lg:pr-32">
          <p className="text-gray-500 ">-HI THERE I'M</p>
          <h2 className="text-5xl lg:text-6xl mb-4">
            Charles <span className="text-pur">Ilo</span>
          </h2>
          <p className="text-center lg:text-left">
            Creative front-end developer with more than +2 years of experience
            in enterprise companies and startups. Proficient in Html, Tailwind
            Css, Javascript and React.
          </p>
        </div>
        <div className="w-1/2 pl-44 hidden lg:block ">
            <img src={head} className='h-80'/>
        </div>
      </div>
    )
}

export default Intro;