
import { socialMedia } from '../constants'

const Footer = () => 
  (
    <div className='w-full flex md:flex-row flex-col items-center justify-between pt-6  mb-[14px]  box_shadow_t ' id="clients">
        <p className='font-poppins font-normal text-[16px] leading-[20px]  text-center text-white'>
        Copyright © 2022 Manos, All Rights Reserved.
      </p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social,index) => (
            <a href={`${social.link}`} target="_blank"> <img key={social.id} src={social.icon} alt="social_media" className={`w-[27px] h-[27px] object-contain cursor-pointer hover:opacity-70 ${index !== socialMedia.length ? "mr-6" : "mr-0"} `} /></a>

        ))}
      </div>
    </div>
  )


export default Footer