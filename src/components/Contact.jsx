import styles from '../style';
import Axios from "axios";
import { useState } from 'react';
import { email } from '../assets';

function Contact() {

  const [FirstName,setFirstName] = useState("")
  const [LastName,setLastName] = useState("")
  const [Country,setCountry] = useState("")
  const [Email,setEmail] = useState("")
  const [Comments,setComments] = useState("")

  const submit_contacts = () => {
    console.log(FirstName)
    
      Axios.post("http://localhost:3001/create", {
      FirstName: FirstName,
      LastName: LastName,
      Country: Country,
      Email: Email,
      Comments: Comments,
      }).then(() => {
        console.log("success!");
      });
  };



  return (
    <section className={`flex md:flex-row flex-col sm:py-8 py-8 bg-discount-gradient rounded-3xl ${styles.flexStart} mt-20 mb-10`}>
      
      <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 px-6`}>
        <h1 className="flex-1 font-poppins ss:text-[32px] text-[22px]  ss:leading-[50px] leading-[35px] sidebar text-gradient_blue">
          How to contact me?
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-4 mb-5`}>You can contact me directly from here or via email!</p>
        <div className='justify-center items-center m-auto '>
         
          <a href=""> <img src={email} alt="email" className='object-contain hover:opacity-80'/></a>
        </div>
        
      </div>
      <div className="flex flex-col sm:px-16 px-6">
        <h1 className="flex-1 font-poppins ss:text-[32px] text-[22px]  ss:leading-[50px] leading-[35px] sidebar text-gradient_blue">
          Contact me
        </h1>
        <div className="flex-1 contact_box ">

          <input type="text" id="firstname" name="firstname" className="contact_input text-[12px] sm:text-[16px]" placeholder="FirstName" onChange={(event) => {setFirstName(event.target.value)}}/>
          <input type="text" id="lastname" name="lastname" className="contact_input text-[12px] sm:text-[16px]" placeholder="LastName" onChange={(event) => {setLastName(event.target.value)}}/>
          <input type="text" id="region" name="region" className="contact_input text-[12px] sm:text-[16px]" size="120px" placeholder="Region" onChange={(event) => {setCountry(event.target.value)}}/>
          <input type="email" id="email" name="email" className="contact_input text-[12px] sm:text-[16px]" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
        </div>
        <textarea name="comment" id="comment" placeholder="Comments" className="contact_textArea text-[12px] sm:text-[16px]" rows="7" onChange={(event) => {setComments(event.target.value)}}/>
        <button className="submit_contact_btn" onClick={submit_contacts}>Submit</button>
      </div>
    </section>
  );
}

export default Contact;
