import styles from './Projects.styles.module.css';
//Projekt
import solarSystem from '../../assets/solar.system.png'

//
import ProjectCard from '../../common/ProjectCard';
//Projects komponenten som visar lista över projekt
function Projects() {
  return (
    <section id="projects" className={styles.container}>{/*sektion som innehåller alla projekt*/}
        <h1 className='sectionTitle'>Projects</h1>{/*rubrik för projektsektionen*/}
        <div className={styles.projectsContainer}>{/*container för alla projekt*/}

          <ProjectCard src={solarSystem} //källa för bilden till projektet
          link={"https://github.com/miltonlindh/Solaris"}//länk till projekt
          h3="Solaris"//namnet på projektet
          p="School Project"//beskrivning av vad det är för sorts projekt
          />

        </div>
    </section>
 );
}

export default Projects