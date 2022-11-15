import head from "../projectshots/110.png";

function Intro(){
    return(
        <div className="flex mx-12 justify-between  mt-14">
        <div className="w-1/2  pr-32">
          <p className="text-gray-500">-HI THERE I'M</p>
          <h2 className="text-6xl mb-4">
            Charles <span className="text-pur">Ilo</span>
          </h2>
          <p>
            Creative front-end developer with more than +2 years of experience
            in enterprise companies and startups. Proficient in Html, Tailwind
            Css, Javascript and React.
          </p>
        </div>
        <div className="w-1/2  pl-44 ">
            <img src={head} className='h-80'/>
        </div>
      </div>
    )
}

export default Intro;