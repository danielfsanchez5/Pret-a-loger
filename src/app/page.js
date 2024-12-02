import styles from "./page.module.css";
import Topbar from "./topbar";
import Project from "./project/page";
import Problem from "./problem/page";
import Pictures from "./pictures/page";
import About from "./about/page";
import Contact from "./contact/page";
import Tech from "./tech/page";
import Downbar from "./downbar";

// Open the main page

function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.section}>
        <Project />
      </div>
      <div className={styles.section}>
        <div>
          <h2>Solution</h2>
          <p>This is where the solution text goes.</p>
        </div>
      </div>
      <div className={styles.section}>
        <Pictures />
      </div>
      <div className={styles.section}>
        <Contact />
      </div>
    </div>
    
  );
}

export default Home;

