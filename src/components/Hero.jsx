import styles from "../style" 
import {logo3, navigator_black, navigator_white} from '../assets';
import { useState } from "react";

const Hero = () => { 
  const[toggle2,setToggle2] = useState(false)
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] sidebar text-gradient">Hi, I'am Manos 
          </h1>
        
        
        </div>
         <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
         <button type="button" onMouseLeave = {() => setToggle2((prev) => !prev)} className={`py-4 px-6  font-medium text-[18px] button_style flex flex-row z-[6] font-poppins`}  onMouseEnter = {() => setToggle2((prev) => !prev)} >
            Contact me 
              <img src={toggle2 ? navigator_white : navigator_black} alt="navigator" className="w-[20px] h-[20px] object-contain mt-1 ml-2" />
            
        </button>
      </div>
       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 mr-10 relative`}>
        <img src={logo3} alt="billing" className="w-[230px] h-[220px] relative z-[5] box-shadow"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

    </section>
    
  )

  }
export default Hero