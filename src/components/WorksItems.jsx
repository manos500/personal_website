import React from 'react'
import { right_arrow } from '../assets'
 

const WorksItems = ({item}) => {
  return (
    <div className='work_card ' key={item.id}>
        <img src={item.image} alt="" className='md:h-[140px] md:w-[250px] lg:h-[180px] lg:w-[350px] sm:h-[130px] sm:w-[240px] h-[100px] w-[200px]'/>
        <h3 className="font-poppins font-semibold xs:text-[18px] text-[12px] text-white xs:leading-[18px] leading-[13px] w-full ">{item.title}</h3>
        <a href="#" className="work_button">
            Demo <img src={right_arrow} alt="right_arrow"  className="w-[17px] h-[17px] object-contain mt-1 ml-1  work_button_icon"/>
        </a>
    </div>
  )
}

export default WorksItems