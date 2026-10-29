import { Link, NavLink } from 'react-router-dom';
import './Animacion2d.css';

function Animacion2d() {
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


            <section className="animacion-hero">
                {/*imagenepica*/}
                {/*
  <img
    className="animacion-hero-background"
    src={`${import.meta.env.BASE_URL}images/animacion-monstruo.png`}
    alt=""
  />
  */}

                <div className="animacion-hero-overlay"></div>

                <div className="animacion-hero-content">
                    <p className="animacion-eyebrow fuente-texto">
                        ANIMACIÓN 2D
                    </p>

                    <h1 className="fuente-titulos">
                        EL MONSTRUO
                    </h1>

                    <p className="animacion-description fuente-texto">
                        Hay historias que comienzan mucho antes
                        de que alguien esté preparado para
                        descubrirlas. Entre pistas, silencios y
                        preguntas sin respuesta, algo parece estar
                        esperando a ser encontrado.
                    </p>

                    <a
                        className="animacion-button fuente-titulos"
                        href="#animacion-video"
                    >
                        VER EL MONSTRUO
                    </a>
                </div>
            </section>


            <section className="sinopsis-section">
                <div className="sinopsis-header">
                    <p className="sinopsis-eyebrow fuente-texto">SINOPSIS</p>
                    <div className="sinopsis-divider"></div>
                </div>

                <div className="sinopsis-panel">
                    <div className="sinopsis-content">
                        <h2 className="fuente-titulos">EL MONSTRUO</h2>

                        <p className="fuente-texto">
                            En la sombría Alemania, una serie de brutales
                            asesinatos siembra el terror entre los habitantes
                            de la ciudad. Los crímenes, perpetrados por
                            despiadados grupos criminales, desafían a la
                            justicia. Un detective interesado en el caso se
                            sumerge para hallar el detonante de la situación
                            guiándolo a un posible sospechoso. Pero pronto
                            se dará cuenta de algo aún más siniestro que se
                            esconde entre las sombras, un monstruo al que
                            el detective tendrá que enfrentar.
                        </p>
                    </div>

                    <div className="sinopsis-image-container">
                        {/*imagen*/}
                        {/*<img className="sinopsis-image"
                            src={`${import.meta.env.BASE_URL}images/sinopsis-monstruo.png`}
                            alt="Escena de la animación 2D El Monstruo" />
                         */}

                        <div className="sinopsis-image-placeholder fuente-texto">
                            IMAGEN DE LA ANIMACIÓN
                        </div>
                    </div>
                </div>
            </section>


            <section className="personajes-section">
                <div className="personajes-header">
                    <p className="personajes-eyebrow fuente-texto">
                        PERSONAJES
                    </p>
                    <div className="personajes-divider"></div>
                </div>

                <div className="personajes-panel">
                    <h2 className="fuente-titulos">PERSONAJES</h2>

                    <div className="personajes-grid">
                        {/* PERSONAJE 1 */}
                        <article className="personaje-card">
                            <div className="personaje-image-container">
                                {/* Cuando tengas el archivo, reemplaza el bloque inferior por el img */}
                                {/*
          <img
            className="personaje-image"
            src={`${import.meta.env.BASE_URL}images/monstruo.png`}
            alt="El Monstruo"
          />
          */}
                                <div className="personaje-image-placeholder fuente-texto">
                                    IMAGEN DEL MONSTRUO
                                </div>
                            </div>

                            <h3 className="fuente-titulos">EL MONSTRUO</h3>
                            <p className="fuente-texto">????????</p>
                        </article>

                        {/* PERSONAJE 2 */}
                        <article className="personaje-card">
                            <div className="personaje-image-container">
                                {/*
          <img
            className="personaje-image"
            src={`${import.meta.env.BASE_URL}images/arthur-neuman.png`}
            alt="Arthur Neuman"
          />
          */}
                                <div className="personaje-image-placeholder fuente-texto">
                                    IMAGEN DE ARTHUR
                                </div>
                            </div>

                            <h3 className="fuente-titulos">ARTHUR NEUMAN</h3>
                            <p className="fuente-texto">
                                Detective experimentado, observador y determinado.
                            </p>
                        </article>

                        {/* PERSONAJE 3 */}
                        <article className="personaje-card">
                            <div className="personaje-image-container">
                                {/*
          <img
            className="personaje-image"
            src={`${import.meta.env.BASE_URL}images/doctor-wagner.png`}
            alt="Doctor Wagner"
          />
          */}
                                <div className="personaje-image-placeholder fuente-texto">
                                    IMAGEN DEL DOCTOR
                                </div>
                            </div>

                            <h3 className="fuente-titulos">DOCTOR WAGNER</h3>
                            <p className="fuente-texto">
                                Psiquiatra reconocido y experimentado.
                            </p>
                        </article>
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
export default Animacion2d;