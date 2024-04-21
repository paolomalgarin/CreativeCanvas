// ------------------------- IMPORT -------------------------
//stile
import './Projects.css'
//componenti
import Navbar from '../../components/Navbar/Navbar'
import Cursor from '../../components/Cursor/Cursor'
import ProjectHero from "../../components/ProjectHero/ProjectHero"


// ------------------------- FUNZIONE -------------------------
function Projects() {

  return (
    <>
      <Navbar />
      <Cursor />
      <ProjectHero />
    </>
  )
}

export default Projects
