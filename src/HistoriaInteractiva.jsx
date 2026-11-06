import { Link, NavLink } from 'react-router-dom';
import './HistoriaInteractiva.css';

function HistoriaInteractiva() {
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

            <section className="historia-hero">

                {/* IMAGEN DE FONDO */}
                <img
                    className="historia-hero-image"
                    src={`${import.meta.env.BASE_URL}images/historia-hero.png`}
                    alt="Escenario de la historia interactiva"
                />

                <div className="historia-hero-overlay"></div>

                {/* CONTENIDO DEL ENCABEZADO */}
                <div className="historia-hero-content">

                    <p className="historia-eyebrow fuente-texto">
                        HISTORIA INTERACTIVA
                    </p>

                    <h1 className="fuente-titulos">
                        EL DESCENSO A LA LOCURA
                    </h1>

                    <p className="historia-description fuente-texto">
                        Lo que comienza como una búsqueda de
                        respuestas pronto se convierte en un viaje
                        hacia los rincones más oscuros de su pasado.
                        Entre documentos olvidados, experimentos
                        clandestinos y recuerdos fragmentados.
                    </p>

                    <a
                        className="historia-hero-button fuente-titulos"
                        href="#historia"
                    >
                        LEER HISTORIA
                    </a>
                </div>
            </section>

            <section className="historia-sinopsis">
                <div className="historia-sinopsis-header">
                    <p className="fuente-texto">SINOPSIS</p>
                </div>
                <div className="historia-sinopsis-panel">
                    <h2 className="fuente-titulos">
                        EL DESCENSO A LA LOCURA
                    </h2>
                    <div className="historia-sinopsis-columns">
                        <p className="fuente-texto">
                            Alemania, 1980. Tras recibir una misteriosa
                            carta que afirma que su padre, Friedrich Keller,
                            nunca murió, Elias emprende una investigación
                            para descubrir la verdad detrás de su
                            desaparición. Sus pistas lo conducen hasta una
                            antigua instalación médica donde descubre los
                            experimentos psicológicos dirigidos por
                            Archibald Wagner y el oscuro pasado de su
                            familia.
                        </p>
                        <div className="historia-sinopsis-right">
                            <p className="fuente-texto">
                                Sin embargo, cuanto más se acerca a la verdad,
                                más comienza a perder el control de su propia
                                mente. Una presencia desconocida empieza a
                                manifestarse a través de voces, recuerdos y
                                extrañas alteraciones de la realidad,
                                aprovechándose de sus traumas y sentimientos
                                de culpa.
                            </p>
                            <p className="fuente-texto">
                                Ahora, Elias deberá enfrentarse a los secretos de
                                su pasado y descubrir qué se esconde detrás de
                                aquella presencia antes de perder por completo
                                aquello que lo hace ser él mismo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="historia-personajes">
                <div className="personajes-header">
                    <p className="fuente-texto">PERSONAJES</p>
                </div>
                <div className="personajes-panel">
                    <h2 className="fuente-titulos">PERSONAJES</h2>
                    <div className="historia-personajes-grid">
                        <article className="historia-personaje-card">
                            <div className="historia-personaje-image">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/elias-keller.png`}
                                />
                            </div>
                            <h3 className="fuente-titulos">ELIAS KELLER</h3>
                            <p className="fuente-texto">
                                Un hombre que busca descubrir la verdad sobre su padre.
                            </p>
                        </article>
                        <article className="historia-personaje-card">
                            <div className="historia-personaje-image">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/friedrich-keller.png`}
                                />
                            </div>
                            <h3 className="fuente-titulos">FRIEDRICH KELLER</h3>
                            <p className="fuente-texto">
                                Padre de Elias y antiguo sujeto experimental.
                            </p>
                        </article>
                        <article className="historia-personaje-card">
                            <div className="historia-personaje-image">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/la-entidad.png`}
                                />
                            </div>
                            <h3 className="fuente-titulos">LA ENTIDAD</h3>
                            <p className="fuente-texto">
                                ????
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

export default HistoriaInteractiva;