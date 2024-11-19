
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects-data.json'; 

const Project = () => {
    const { id } = useParams(); // Récupération de l'id depuis l'URL
    const project = projectsData.find((project) => project.id === id); // Recherche du projet correspondant via l'id
  
    return (
        <main>
            <section>
                <div>
                <h1>{project.title}</h1> {/* Affiche le titre du projet */}
                {/* Ajoutez d'autres informations si nécessaire */}
                </div>
            </section>
          

        </main>
       
    );
  };
  
  export default Project;
