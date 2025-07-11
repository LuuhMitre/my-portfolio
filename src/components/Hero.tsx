// src/app/components/HeroSection.tsx
import Image from 'next/image';

const Hero = () => {
    return (
        // A seção hero do Bulma, configurada para ocupar a tela inteira
        <section className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="content-block">
                        {/* Utilizando colunas para alinhar o texto e a imagem lado a lado */}
                        <div className="columns is-vcentered is-multiline">
                            {/* Coluna 1 - coluna de texto */}
                            <div className="column is-6-desktop is-12-tablet">

                                <h1 className="title text-gradient is-1">
                                    LUANA MITRE
                                </h1>
                                <h2 className="subtitle is-3 has-text-light">
                                    Desenvolvedora Full Stack.
                                </h2>
                                {/* Parágrafo de Resumo */}
                                <p className="is-size-5 has-text-justified">
                                    Desenvolvedora Full Stack e Analista de Dados. Especialista em automação de processos e na criação de dashboards com SQL e Power BI para gerar insights de negócio.
                                </p>

                            </div>
                            {/* Coluna 2 - Imagem */}
                            <div className="column is-6-desktop is-12-tablet has-text-centered">
                                <Image
                                    src="/images/profile.jpg" alt={"Foto de Luana Mitre"}
                                    width={300}
                                    height={300}
                                    style={{ borderRadius: '50%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;