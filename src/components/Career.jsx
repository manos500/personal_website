import { briefcase, calendar, graduation_cap,} from "../assets"
import styles from "../style"


const Career = () => {

  return (
    <section className={`flex flex-col sm:py-15 py-5 mt-4 sm:mb-20 sm:pb-20`} >
       
       <div className='absolute z-[1] -left-1/2 top-0 w-[60%] h-[15%] rounded-full white__gradient'/>     
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[60%] h-[15%] rounded-full pink__gradient'/>
      <div className={`${styles.flexCenter} m-auto`}>
        <h1 className="flex-1 font-poppins ss:text-[60px] text-[40px]  ss:leading-[100px] leading-[75px] sidebar text-gradient_blue ">Education</h1>
      </div>
      <div className={`${styles.flexCenter} ${styles.marginY}`}>
              <div className="career_content ">
                <div className="career_data">
                  <div >
                    <h3 className="font-poppins font-semibold xs:text-[20px] text-[16px] text-white xs:leading-[20px] leading-[15px] w-full">Master in English </h3>
                    <span className="font-poppins font-normal text-dimWhite text-[15px] leading-[15px]">C2 (ECPE)-University of Michigan</span>
                    <div className="flex flex-row">
                      <img src={calendar} alt="calendar" className={`w-[23px] h-[23px] object-contain `}/>
                      <span className="font-poppins font-normal gray_text  text-[15px] leading-[25px] ml-2">2013-2019</span>
                    </div>
                  </div>

                  <div>
                    <span className="career_rounder ml-1"></span>
                    <span className="career_line ml-1"></span>
                  </div>
                   <div className="w-full"></div>
              </div>
              <div className="career_data ">
                <div className="w-full "></div>

                <div>
                  <span className="career_rounder absolute mt-5 z-[3]"></span>
                  <span className="career_line mt-5 mr-2 z-[1]"></span>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold xs:text-[20px] text-[16px] text-white xs:leading-[20px] leading-[15px] w-full mt-5">Master in Frace</h3>
                  <span className="font-poppins font-normal text-dimWhite text-[15px] leading-[15px]">B2 (DELF)-Ministere de l'Education Nationale</span>
                  <div className="flex flex-row">
                    <img src={calendar} alt="calendar" className={`w-[23px] h-[23px] object-contain `}/>
                     <span className="font-poppins font-normal gray_text  text-[15px] leading-[25px] ml-2">2015-2019</span>
                  </div>
                </div>
               
              </div>
              <div className="career_data">
                <div>
                  <h3 className="font-poppins font-semibold xs:text-[20px] text-[16px] text-white xs:leading-[20px] leading-[15px] w-full mt-5">Computer Science</h3>
                  <span className="font-poppins font-normal text-dimWhite text-[15px] leading-[15px]">Pireus - University</span>
                  <div className="flex flex-row">
                    <img src={calendar} alt="calendar" className={`w-[23px] h-[23px] object-contain `}/>
                    <span className="font-poppins font-normal gray_text text-[15px] leading-[25px] ml-2 ">2021-now</span>
                  </div>
                </div>

                <div>
                  <span className="career_rounder ml-1 mt-5 z-[3]" id="projects"></span>
                  
                </div>
              </div>
              </div>
              
              </div>
    </section>
  )
}

export default Career