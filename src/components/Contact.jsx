import styles from "../style" 

const Contact = () => {
  return (
     <section className={`flex md:flex-row flex-col sm:py-8 py-8 bg-black-gradient rounded-3xl ${styles.flexStart} mt-10`}>
        <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins ss:text-[32px] text-[22px]  ss:leading-[50px] leading-[35px] sidebar text-gradient_blue">Get in touch 
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-4 mb-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe placeat quia quo, enim delectus nostrum molestiae beatae porro consequatur quibusdam. Dignissimos laudantium quia, eveniet aliquam exercitationem itaque quam cumque!</p>
        </div>
        <div className={`flex flex-col sm:px-16 px-6`}> 
        <h1 className="flex-1 font-poppins ss:text-[32px] text-[22px]  ss:leading-[50px] leading-[35px] sidebar text-gradient_blue">Contact me
            </h1>
          <div className={`flex-1 contact_box `}>
            
            <input type="text" id="firstname" name="firstname" className="contact_input text-[12px] sm:text-[16px]"  placeholder="FirstName"></input>
            <input type="text" id="lastname" name="lastname" className="contact_input text-[12px] sm:text-[16px]"  placeholder="LastName"></input>
            <input type="number" id="phone" name="phone" className="contact_input text-[12px] sm:text-[16px]" size="120px" placeholder="Phone"></input>
            <input type="email" id="email" name="email" className="contact_input text-[12px] sm:text-[16px]"  placeholder="Email"></input>
          </div>
         <textarea name="comment" id="comment" placeholder="Message" className="contact_textArea text-[12px] sm:text-[16px]" rows="7"></textarea>
         </div>
    </section >
  )
}

export default Contact