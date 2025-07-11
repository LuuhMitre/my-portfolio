import Image from 'next/image';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="card" style={{ height: '100%' }}>
            <div className="card-image">
                <figure className="image is-4by3">
                    {/* O componente Image do Next.js otimiza o carregamento das imagens */}
                    <Image
                        src={project.imageUrl}
                        alt={`Imagem do projeto ${project.title}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </figure>
            </div>
        </div>
    );
};

export default ProjectCard;