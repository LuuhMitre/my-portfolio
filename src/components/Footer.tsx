import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer has-background-dark has-text-white">
            <div className="container">
                <div className="content has-text-centered">
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
                </div>
            </div>
        </footer>
    );
}

export default Footer;