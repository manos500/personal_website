import { navLinks } from "../constants";
import {logo,logo2,close,menu} from '../assets';
import { useState } from "react";

const Navbar = () => {
 const[toggle,setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="logo" className="w-[90px] h-[80px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav,index) => (<li key={nav.id} className={`font-poppins cursor-pointer font-normal text-[16px] text-white  hover-underline-animation  ${index === navLinks.length-1 ? "mr-0" : "mr-10"} ${toggle ? "sm:hidden" : "flex"}`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>))}
      </ul>

      <div className={` justify-end items-center ${toggle ? 'flex' :'sm:hidden'} z-[6]`}>
        <img src={menu} alt="menu"  className={`${toggle ? 'hidden' : 'flex'} w-[28px] h-[28px] object-contain cursor-pointer`} onClick={() => setToggle((prev) => !prev)}/>
         <div className={`${toggle ? 'flex' : 'hidden'} p-6  bg-black-gradient absolute top-0 right-0  min-w-[200px]  sidebar flex-col`}>
          <div className=" w-[200px] justify-end items-end" >
            <img src={close} alt="close" className={`${toggle ? 'flex' : 'hidden'} w-[28px] h-[28px] object-contain cursor-pointer  hover:opacity-50`} onClick={() => setToggle((prev) => !prev) }/>
          </div> 
           <ul className='list-none flex flex-col justify-start my-12 items-start flex-1'>
          {navLinks.map((nav,index) => (<li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]  hover-underline-animation  ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>))}
      </ul>
         </div>
      </div>
     
    </nav>
  )
}

export default Navbar