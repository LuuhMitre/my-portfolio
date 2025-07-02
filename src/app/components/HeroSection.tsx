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
                    <h1 className="title text-gradient-purple is-1">
                        LUANA MITRE
                    </h1>
                    <p></p>
                    <h1 className="title text-gradient-purple-dois is-1">
                        LUANA MITRE
                    </h1>
                    <p></p>
                    <h1 className="title text-gradient-purple-tres is-1">
                        LUANA MITRE
                    </h1>
                    <p></p>
                    <h1 className="title text-gradient-purple-quatro is-1">
                        LUANA MITRE
                    </h1>
                    <p></p>
                    <h1 className="title text-gradient-purple-cinco is-1">
                        LUANA MITRE
                    </h1>
                    <p></p>
                    <h1 className="title text-gradient-purple-seis is-1">
                        LUANA MITRE
                    </h1>
                    <p></p>
                    <h1 className="title text-gradient-purple-sete is-1">
                        LUANA MITRE
                    </h1>
                    <p></p>
                    <h1 className="title text-gradient-purple-oito is-1">
                        LUANA MITRE
                    </h1>

                    {/* Subtítulo com a profissão */}
                    <h2 className="subtitle is-3 has-text-grey-light">
                        Desenvolvedora Backend
                    </h2>

                    {/* Parágrafo de Resumo */}
                    <p className="is-size-5 has-text-weight-light has-text-justified" style={{ maxWidth: '650px', marginBottom: '2rem' }}>
                        Em transição de carreira, com 10 anos de experiência em Telecomunicações e atuando em gestão de entregas B2B, automação de processos e manipulação de dados.
                    </p>

                    {/* Botões de Ação */}
                    <div className="buttons">
                        <a href="#projetos" className="button is-link is-medium">
                            Ver Projetos
                        </a>
                        <a href="/Luana_Mitre_CV.pdf" className="button is-light is-medium" target="_blank" rel="noopener noreferrer">
                            Download CV
                        </a>
                    </div>

                    {/* Ícones de Redes Sociais */}
                    <div className="is-flex is-align-items-center mt-5">
                        <a href="https://www.linkedin.com/in/luana-mitre" target="_blank" rel="noopener noreferrer" className="mr-4 has-text-grey-light">
                            <span className="icon is-large">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </span>
                        </a>
                        <a href="https://github.com/LuuhMitre" target="_blank" rel="noopener noreferrer" className="has-text-grey-light">
                            <span className="icon is-large">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;