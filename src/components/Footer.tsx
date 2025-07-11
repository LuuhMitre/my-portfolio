import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer footer-content-block has-text-white">
            <div className="container">
                <div className="content has-text-centered">
                    <div className="is-flex is-align-items-center">
                        <a href="https://www.linkedin.com/in/luana-mitre" target="_blank" rel="noopener noreferrer" className="mr-4 ">
                            <span className="icon is-large">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </span>
                        </a>
                        <a href="https://github.com/LuuhMitre" target="_blank" rel="noopener noreferrer" className="mr-4 ">
                            <span className="icon is-large">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </span>
                        </a>
                        <a href="documents/Luana_Mitre_CV.pdf" className="button is-primary" target="_blank" rel="noopener noreferrer">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;