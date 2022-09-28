import {Navbar} from "./components";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import styles from "./style";



const App = () => (
     <div className="bg-primary w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter} box_shadow_b`}>
      <div className={`${styles.boxWidth} `}>
       <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`${styles.boxWidth} `}>
          <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} box_shadow_t`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>

    </div>
);

export default App;