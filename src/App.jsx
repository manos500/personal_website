import {
  Career, Navbar, Hero, Footer, Contact,Projects
} from './components';

import styles from './style';

function App() {
  return (

    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}   bg-gray-gradient w-full fixed_position box_shadow rounded-lg `}>

        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} mt-20 sm:mb-40 min-h-[600px]`}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-4 w-full  box_shadow rounded-lg h-[5px]`} />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Career />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
