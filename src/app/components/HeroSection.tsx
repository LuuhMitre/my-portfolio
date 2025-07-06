// src/app/components/HeroSection.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
    return (
        // A seção hero do Bulma, configurada para ocupar a tela inteira
        <section className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">

                    {/* Título Principal */}
                    <h1 className="title text-gradient-purple-quatro is-1">
                        LUANA MITRE
                    </h1>

                    {/* Subtítulo com a profissão */}
                    <h2 className="subtitle is-3 has-text-grey-light">
                        Desenvolvedora Backend
                    </h2>

                    {/* Parágrafo de Resumo */}
                    <p className="is-size-5 has-text-weight-light has-text-justified" style={{ maxWidth: '650px', marginBottom: '2rem' }}>
                        Estou em transição de carreira para a área de TI, com foco em Desenvolvimento Backend (Java/Python) e Análise de Dados. Especialista em automação de processos e na criação de dashboards com SQL e Power BI para gerar insights de negócio.
                    </p>

                    {/* Botões de Ação */}

                    <div className="is-flex is-align-items-center">
                        <a href="https://www.linkedin.com/in/luana-mitre" target="_blank" rel="noopener noreferrer" className="mr-4 has-text-grey-light">
                            <span className="icon is-large">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </span>
                        </a>
                        <a href="https://github.com/LuuhMitre" target="_blank" rel="noopener noreferrer" className="mr-4 has-text-grey-light">
                            <span className="icon is-large">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </span>
                        </a>
                        <a href="/Luana_Mitre_CV.pdf" className="button is-light is-medium" target="_blank" rel="noopener noreferrer">
                            Download CV
                        </a>
                    </div>
                    <br></br>
                    <div className="buttons mb-5">
                        <a href="#projetos" className="button is-link is-medium">
                            Ver Projetos <span className="tag is-warning is-small ml-2">Em Construção</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;