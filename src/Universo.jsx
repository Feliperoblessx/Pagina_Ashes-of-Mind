import { Link, NavLink } from 'react-router-dom';
import './Universo.css';

function Universo() {
    return (
        <main className="universo-page">
            <header className="navbar">
                <Link className="brand" to="/" aria-label="Inicio">
                    <img
                        className="brand-logo"
                        src={`${import.meta.env.BASE_URL}images/Logo.png`}
                        alt="Draugr Studio"
                    />
                </Link>

                <nav className="nav-links" aria-label="Navegación principal">
                    <NavLink to="/" end>INICIO</NavLink>
                    <NavLink to="/universo">UNIVERSO</NavLink>
                    <NavLink to="/estudio">ESTUDIO</NavLink>
                    <NavLink to="/merch">MERCH</NavLink>
                </nav>

                <a className="cart-link" href="#merch" aria-label="Ver merchandising">
                    <img src={`${import.meta.env.BASE_URL}images/cart.png`} alt="" />
                </a>
            </header>

            <section className="universo-hero">
                <div className="universo-hero-content">
                    <p className="universo-eyebrow fuente-texto">
                        EXPLORA ASHES OF MIND
                    </p>

                    <h1 className="fuente-titulos">
                        UNIVERSO TRANSMEDIA
                    </h1>

                    <p className="universo-description fuente-texto">
                        La historia de Ashes of Mind se expande
                        <br />
                        en diferentes formatos, revelando nuevas
                        <br />
                        perspectivas, personajes y verdades
                    </p>
                </div>
            </section>


            <section className="teaser-section">
                <div className="teaser-header">
                    <p className="teaser-eyebrow fuente-texto">
                        TEASER TRAILER
                    </p>
                    <div className="teaser-divider"></div>
                </div>

                <div className="teaser-panel">
                    <div className="teaser-content">
                        <h2 className="fuente-titulos">
                            TEASER TRAILER
                            <br />
                            ASHES OF MIND
                        </h2>

                        <p className="teaser-description fuente-texto">
                            Descubre el teaser oficial de Ashes of Mind
                            <br />
                            y sumérgete en una historia donde memoria
                            <br />
                            y realidad comienzan a confundirse
                        </p>

                        <a
                            className="teaser-button fuente-titulos"
                            href="https://youtu.be/xlH8TP3dKN8"
                        >
                            TEASER TRAILER
                        </a>
                    </div>

                    <div className="teaser-image-container">
                        <img
                            className="teaser-image"
                            src={`${import.meta.env.BASE_URL}images/imagen-Ashes.png`}
                            alt="Escena del teaser trailer de Ashes of Mind"
                        />
                    </div>
                </div>
            </section>

            <section className="teaser-section">
                <div className="teaser-header">
                    <p className="teaser-eyebrow fuente-texto">
                        ANIMACIÓN 2D
                    </p>
                    <div className="teaser-divider"></div>
                </div>

                <div className="teaser-panel">
                    <div className="teaser-content">
                        <h2 className="fuente-titulos">
                            Animación 2D
                            <br />
                            El Mounstro
                        </h2>

                        <p className="teaser-description fuente-texto">
                            Una serie de pistas, una criatura desconocida y un
                            <br />
                            detective dispuesto a descubrir la verdad...
                            <br />
                            Conoce el primer fragmento del universo
                            <br />
                            Ashes of Mind.
                        </p>

                        <Link
                            className="historia-button fuente-titulos"
                            to="/Animacion2d"
                        >
                            Ver Animación 2D
                        </Link>
                    </div>

                    <div className="teaser-image-container">
                        <img
                            className="teaser-image"
                            src={`${import.meta.env.BASE_URL}images/Mounstro.png`}
                            alt="Escena del teaser trailer de Ashes of Mind"
                        />
                    </div>
                </div>
            </section>

            <section className="teaser-section">
                <div className="teaser-header">
                    <p className="teaser-eyebrow fuente-texto">
                        COMIC
                    </p>
                    <div className="teaser-divider"></div>
                </div>

                <div className="teaser-panel">
                    <div className="teaser-content">
                        <h2 className="fuente-titulos">
                            Before the Ashes
                        </h2>

                        <p className="teaser-description fuente-texto">
                            Antes de que Marcus entrara en su propia mente,
                            <br />
                            un detective vuelve de su retiro para investigar
                            <br />
                            acontecimientos que el pensaba que ya estaban
                            <br />
                            Resueltos.
                        </p>

                        <Link
                            className="historia-button fuente-titulos"
                            to="/Comic"
                        >
                            Leer Comic
                        </Link>
                    </div>

                    <div className="teaser-image-container">
                        <img
                            className="teaser-image"
                            src={`${import.meta.env.BASE_URL}images/Mounstro.png`}
                            alt="Escena del teaser trailer de Ashes of Mind"
                        />
                    </div>
                </div>
            </section>


            <section className="historia-section">
                <div className="historia-header">
                    <p className="historia-eyebrow fuente-texto">
                        HISTORIA INTERACTIVA
                    </p>
                    <div className="historia-divider"></div>
                </div>

                <div className="historia-panel">
                    <div className="historia-content">
                        <h2 className="fuente-titulos">BEFORE THE ASHES</h2>

                        <p className="fuente-texto">
                            Explora una historia interactiva que revela
                            nuevos detalles sobre el universo de Ashes of
                            Mind. Investiga escenarios, encuentra pistas y
                            toma decisiones mientras descubres
                            acontecimientos que ayudan a comprender lo que
                            ocurrió antes y detrás de la historia principal.
                        </p>

                       <Link
                            className="historia-button fuente-titulos"
                            to="/HistoriaInteractiva"
                        >
                            HISTORIA INTERACTIVA
                        </Link>
                    </div>

                    <div className="historia-visual">
                        <div className="historia-circle">
                            <span className="historia-question fuente-titulos">?</span>
                        </div>

                        <div className="historia-tag historia-tag-age fuente-texto">
                            <span>AGE:</span> UNKNOWN
                        </div>

                        <div className="historia-tag historia-tag-murder fuente-texto">
                            <span>MURDER:</span> ????????????
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer" id="draugr">
                <img
                    className="footer-logo"
                    src={`${import.meta.env.BASE_URL}images/Logo.png`}
                    alt="Draugr Studio"
                />

                <p className="footer-slogan">
                    ci
                </p>

                <nav className="footer-socials" aria-label="Redes sociales">
                    <a href="#instagram" aria-label="Instagram">
                        <img src={`${import.meta.env.BASE_URL}images/instagram.png`} alt="" />
                    </a>

                    <a href="https://www.youtube.com/@DraugrStudios2026" aria-label="YouTube">
                        <img src={`${import.meta.env.BASE_URL}images/youtube.png`} alt="" />
                    </a>

                    <a href="mailto:contacto@draugrstudio.com" aria-label="Correo electrónico">
                        <img src={`${import.meta.env.BASE_URL}images/gmail.png`} alt="" />
                    </a>

                    <a href="#tiktok" aria-label="TikTok">
                        <img src={`${import.meta.env.BASE_URL}images/tiktok.png`} alt="" />
                    </a>

                    <a href="#discord" aria-label="Discord">
                        <img src={`${import.meta.env.BASE_URL}images/discord.png`} alt="" />
                    </a>
                </nav>

                <div className="footer-divider"></div>

                <p className="copyright">
                    © 2026 Draugr Studio. Todos los derechos reservados.
                </p>
            </footer>
        </main>

    );
}

export default Universo;
