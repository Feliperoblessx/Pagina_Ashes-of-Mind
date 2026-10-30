import { Link, NavLink } from 'react-router-dom';
import './Estudio.css';

function Estudio() {
    return (
        <main>
            <header className="navbar">
                <Link className="brand" to="/#" aria-label="Inicio">
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

            <section className="estudio-hero">
                <div className="estudio-hero-overlay"></div>

                <div className="estudio-hero-content">
                    <h1 className="estudio-titulo">
                        DRAUGR STUDIOS
                    </h1>

                    <p className="estudio-descripcion">
                        Draugr Studios es un estudio creativo enfocado
                        en desarrollar universos narrativos que
                        conectan videojuegos, animación, cómics e
                        historias interactivas.
                    </p>

                    <a
                        className="estudio-hero-button"
                        href="#equipo"
                        onClick={(e) => {
                            e.preventDefault();

                            document.getElementById('equipo')?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });

                            window.history.replaceState(
                                null,
                                '',
                                window.location.pathname + window.location.search + '#equipo'
                            );
                        }}
                    >
                        EQUIPO DE TRABAJO
                        <span></span>
                    </a>


                </div>
            </section>

            <section className="estudio-vision">
                <div className="vision-header">
                    <p>VISIÓN</p>
                </div>

                <div className="vision-panel">
                    <h2>NUESTRA VISIÓN</h2>

                    <p>
                        Crear experiencias interactivas centradas en la
                        narrativa, la psicología y la inmersión, capaces
                        de conectar emocionalmente con los jugadores a
                        través de historias significativas.
                    </p>
                </div>
            </section>

            <section className="estudio-vision">
                <div className="vision-header">
                    <p>MISIÓN</p>
                </div>

                <div className="vision-panel">
                    <h2>NUESTRA MISIÓN</h2>

                    <p>
                        Ser un estudio de videojuegos
                        indie reconocido dentro de la
                        industria por crear experiencias
                        narrativas psicologicas únicas,
                        inmersivas y emocionalmente
                        profundas, que generan una conexión
                        significativa con los jugadores.
                    </p>
                </div>
            </section>

            <section id="equipo" className="estudio-equipo">

                <div className="equipo-header">
                    <p>NUESTRO EQUIPO</p>
                </div>

                <div className="equipo-panel">

                    <h2>EQUIPO DE TRABAJO</h2>

                    <div className="equipo-grid">

                        {/* INTEGRANTE 1 */}
                        <article className="equipo-card">
                            <img
                                className="equipo-foto"
                                src={`${import.meta.env.BASE_URL}images/felipe.png`}
                                alt="Fotografía de Felipe Robles"
                            />

                            <h3>FELIPE ROBLES</h3>
                            <p className="equipo-cargo">Programador</p>

                            <img
                                className="equipo-logo"
                                src={`${import.meta.env.BASE_URL}images/logo-felipe.png`}
                                alt="Logo de Felipe Robles"
                            />
                        </article>

                        {/* INTEGRANTE 2 */}
                        <article className="equipo-card">
                            <img
                                className="equipo-foto"
                                src={`${import.meta.env.BASE_URL}images/david.png`}
                                alt="Fotografía de David González"
                            />

                            <h3>DAVID GONZALEZ</h3>
                            <p className="equipo-cargo">Diseñador</p>

                            <img
                                className="equipo-logo"
                                src={`${import.meta.env.BASE_URL}images/logo-david.png`}
                                alt="Logo de David González"
                            />
                        </article>

                        {/* INTEGRANTE 3 */}
                        <article className="equipo-card">
                            <img
                                className="equipo-foto"
                                src={`${import.meta.env.BASE_URL}images/daniel.png`}
                                alt="Fotografía de Daniel Sainca"
                            />

                            <h3>DANIEL SAINEA</h3>
                            <p className="equipo-cargo">Artista</p>

                            <img
                                className="equipo-logo"
                                src={`${import.meta.env.BASE_URL}images/logo-daniel.png`}
                                alt="Logo de Daniel Sainca"
                            />
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

export default Estudio;