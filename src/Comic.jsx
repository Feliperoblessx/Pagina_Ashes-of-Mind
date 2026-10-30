import { Link, NavLink } from 'react-router-dom';
import './Comic.css';

function Comic() {
    return (
        <main>
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
                        Comic Before the Ashes
                    </p>

                    <h1 className="fuente-titulos">
                        Before the Ashes
                    </h1>

                    <p className="animacion-description fuente-texto">
                        Arthur Neuman, un detective retirado
                        decide investigar una serie de asesinatos
                        relacionados con un antiguo caso de
                        experimentos psicologicos.
                    </p>

                    <a
                        className="animacion-button fuente-titulos"
                        href="#animacion-video"
                    >
                        Leer Comic
                    </a>
                </div>
            </section>


            <section className="comic-sinopsis-section">
                <div className="comic-sinopsis-header">
                    <p className="fuente-texto">SINOPSIS</p>
                    <div className="comic-sinopsis-divider"></div>
                </div>

                <div className="comic-sinopsis-panel">
                    <h1 className="fuente-titulos">BEFORE THE ASHES</h1>

                    <div className="comic-sinopsis-columns">
                        <p className="fuente-texto">
                            En 1995, una serie de asesinatos sin responsable
                            aparente lleva al detective retirado Arthur
                            Neuman a relacionarlos con un antiguo caso
                            vinculado a los experimentos psicológicos de
                            Archibald Wagner. Su investigación lo conduce
                            al hospital psiquiátrico Grafenberg, donde
                            descubre que las víctimas tenían vínculos con la
                            institución y que algunos pacientes fueron
                            sometidos a una misteriosa terapia
                            experimental.
                        </p>

                        <p className="fuente-texto">
                            Entre los expedientes se encuentra a Marcus,
                            un antiguo paciente que revela haber vivido
                            experiencias extrañas durante su estancia en
                            el hospital. Mientras Neuman continúa
                            investigando, es asesinado por una figura
                            desconocida. Paralelamente, Marcus regresa a
                            Grafenberg después de sufrir un nuevo
                            episodio y, tras perder el conocimiento,
                            despierta dentro del hospital completamente
                            oscuro y abandonado, dando inicio a los
                            acontecimientos de Ashes of Mind.
                        </p>
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
                                    IMAGEN Marcus
                                </div>
                            </div>

                            <h3 className="fuente-titulos">Marcus</h3>
                            <p className="fuente-texto">Reservado e impulsivo, marcado por sus problemas para controlar la ira.</p>
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
                                    IMAGEN DE NINA
                                </div>
                            </div>

                            <h3 className="fuente-titulos">Nina</h3>
                            <p className="fuente-texto">
                                Empática, paciente y protectora, especialmente con Marcus.
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

export default Comic;