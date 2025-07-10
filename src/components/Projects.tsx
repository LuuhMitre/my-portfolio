const Projects = () => {
    return (
        <section id="projetos" className="section">
            <div className="container">
                {/* Reutilizando nosso bloco com efeito de vidro */}
                <div className="content-block">
                    <h2 className="title is-2 has-text-centered mb-5">
                        Projetos
                    </h2>

                    <div className="has-text-centered">
                        <p className="is-size-4">
                            {/* Emoji de alerta/construção */}
                            ⚠️ Em construção! 🚧
                        </p>
                        <p className="is-size-5 mt-3">
                            Esta seção está sendo preparada. Volte em breve para ver meus trabalhos!
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;