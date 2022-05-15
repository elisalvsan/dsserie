import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsserie-nav-content">
                    <h1>DS/SERIE</h1>
                    <a href="https://github.com/elisalvsan" target="_blank" rel="noreferrer">
                        <div className="dsserie-contact-container">
                            <GithubIcon />
                            <p className="dsserie-contact-link">/elisalvsan</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
