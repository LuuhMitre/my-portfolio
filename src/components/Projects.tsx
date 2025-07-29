import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import TechIcon from './TechIcon';

const Projects = () => {
    return (
        <section id="projetos" className="section">
            <div className="container">
                <div className="content-block">
                    <h2 className="title is-2 has-text-centered mb-6">
                        Projetos
                    </h2>

                    {/* Projeto ordenado de forma decrescente */}
                    {[...projectsData].sort((a, b) => b.id - a.id).map((project) => (
                        <div key={project.id} className="columns is-vcentered mb-5 project-content-block is-multiline">
                            <div className="column is-6-desktop is-12-tablet has-text-centered">
                                <ProjectCard project={project} />
                            </div>
                            <div className="column is-6-desktop is-12-tablet">
                                <div className="content is-medium has-text-justified">
                                    <p className="title is-4">{project.title}</p>
                                    <p>{project.description}</p>
                                    <div style={{ display: 'flex', justifyContent: 'left', gap: '1rem', fontSize: '2em', margin: '20px 0' }}>
                                        {project.technologies.map((iconName) => (
                                            <TechIcon key={iconName} iconName={iconName} />
                                        ))}
                                    </div>
                                    <div className="buttons mt-3">
                                        {project.repoUrl && (
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="button is-primary"
                                            >
                                                Repositório
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="button is-primary"
                                            >
                                                Ver Online
                                            </a>
                                        )}
                                        {project.powerBiUrl && (
                                            <a
                                                href={project.powerBiUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="button is-primary"
                                            >
                                                Power BI
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;