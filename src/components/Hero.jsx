import styles from "../style" 
import {logo3, navigator_black, navigator_white} from '../assets';
import { useState,useEffect } from "react";



const Hero = () => { 

  const[toggle2,setToggle2] = useState(true);
  const toRotate = ["Hi, I'm Manos","Hi, I'm Manos"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

    useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }





  return (
    <section className={`flex md:flex-row flex-col sm:py-40 py-20 `}>
      
      
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
       
                
        
          
          <h1 className="flex-1 font-poppins ss:text-[72px] text-[52px]  ss:leading-[100px] leading-[75px] sidebar text-gradient_blue"><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span>
          </h1>
      
        </div>
         <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
           I'm a 22 year old computer enthusiast.I'm currently studying Computer Science in Pireus, Greece,and running a Youtube channel called ???, where I show off my programming related content.
        </p>
         <a href="#clients" onMouseLeave = {() => setToggle2((prev) => !prev)} className={`py-4 px-6  font-medium text-[18px] button_style flex flex-row z-[6] font-poppins`}  onMouseEnter = {() => setToggle2((prev) => !prev)} >
            Contact me 
            
              <img src={toggle2 ? navigator_white : navigator_black} alt="navigator" className="w-[20px] h-[20px] object-contain mt-1 ml-2" />
             
        </a>
      </div >
       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 mr-10 relative   md:pt-0 pt-20`} >
        <img src={logo3} alt="billing" className=" z-[5]  home_img"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
       
         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
           <div className="absolute top-80 " id="career"/>
      </div >

    </section>
    
  )
  }
  
export default Hero