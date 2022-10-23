import styles from "../style";

import Works from "./Works";







const Projects = () => {
  return (
     
     <section className="work section sm:my-20 my-10 sm:pb-20 " id="projects">
      
      <div className="flex flex-col justify-between items-center "><h2 className="flex-1 font-poppins ss:text-[60px] text-[40px]  ss:leading-[100px] leading-[75px] sidebar text-gradient_blue md:mb-20 ">Projects</h2>
      
      
      <span className="section_subtitle">Most recent works</span>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 mr-10 relative   md:pt-0 pt-20`} >
       
       
         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[80%] h-[90%] right-20 bottom-20 blue__gradient" />
      </div >
      <Works/>
      
      
     </section>
   
  )
}

export default Projects