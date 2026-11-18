
import { Link, NavLink } from 'react-router-dom';
import './Estudio.css';

function Estudio() {
    return (
        <main>
            {/* NAVBAR */}
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

                <Link className="cart-link" to="/Carrito" aria-label="Ir al carrito">
                    <img
                        src={`${import.meta.env.BASE_URL}images/cart.png`}
                        alt=""
                    />
                </Link>
            </header>


<section className="estudio-hero">
    <img
        className="estudio-hero-logo"
        src={`${import.meta.env.BASE_URL}images/logo-estudio.png`}
        alt="Logo de Draugr Studio"
    />

    <div className="estudio-hero-overlay"></div>

    <div className="estudio-hero-content">
        <h1 className="estudio-titulo fuente-titulos">
            DRAUGR STUDIOS
        </h1>

        <p className="estudio-descripcion fuente-texto">
            Draugr Studios es un estudio creativo enfocado
            en desarrollar universos narrativos que
            conectan videojuegos, animación, cómics e
            historias interactivas.
        </p>

        <a
            className="estudio-hero-button fuente-titulos"
            href="#equipo"
            onClick={(e) => {
                e.preventDefault();

                document.getElementById('equipo')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }}
        >
            EQUIPO DE TRABAJO
            <span></span>
        </a>
    </div>
</section>


            

            {/* VISIÓN */}
            <section className="estudio-vision">
                <div className="vision-header">
                    <p className="fuente-texto">VISIÓN</p>
                </div>

                <div className="vision-panel">
                    <h2 className="fuente-titulos">NUESTRA VISIÓN</h2>

                    <p className="fuente-texto">
                        Crear experiencias interactivas centradas en la
                        narrativa, la psicología y la inmersión, capaces
                        de conectar emocionalmente con los jugadores a
                        través de historias significativas.
                    </p>
                </div>
            </section>

            {/* MISIÓN */}
            <section className="estudio-vision">
                <div className="vision-header">
                    <p className="fuente-texto">MISIÓN</p>
                </div>

                <div className="vision-panel">
                    <h2 className="fuente-titulos">NUESTRA MISIÓN</h2>

                    <p className="fuente-texto">
                        Ser un estudio de videojuegos indie reconocido
                        dentro de la industria por crear experiencias
                        narrativas psicológicas únicas, inmersivas y
                        emocionalmente profundas, que generan una conexión
                        significativa con los jugadores.
                    </p>
                </div>
            </section>

            {/* EQUIPO */}
            <section id="equipo" className="estudio-equipo">
                <div className="equipo-header">
                    <p className="fuente-texto">NUESTRO EQUIPO</p>
                </div>

                <div className="equipo-panel">
                    <h2 className="fuente-titulos">EQUIPO DE TRABAJO</h2>

                    <div className="equipo-grid">

                        {/* INTEGRANTE 1 */}
                        <article className="equipo-card">
                            <img
                                className="equipo-foto"
                                src={`${import.meta.env.BASE_URL}images/felipe.jpg`}
                                alt="Fotografía de Felipe Robles"
                            />

                            <h3 className="fuente-titulos">FELIPE ROBLES</h3>
                            <p className="equipo-cargo fuente-texto">Programador</p>

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
                                src={`${import.meta.env.BASE_URL}images/david.jpg`}
                                alt="Fotografía de David González"
                            />

                            <h3 className="fuente-titulos">DAVID GONZALEZ</h3>
                            <p className="equipo-cargo fuente-texto">Diseñador</p>

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
                                src={`${import.meta.env.BASE_URL}images/daniel.jpg`}
                                alt="Fotografía de Daniel Sainca"
                            />

                            <h3 className="fuente-titulos">DANIEL SAINEA</h3>
                            <p className="equipo-cargo fuente-texto">Artista</p>

                            <img
                                className="equipo-logo"
                                src={`${import.meta.env.BASE_URL}images/logo-daniel.png`}
                                alt="Logo de Daniel Sainca"
                            />
                        </article>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
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
                        <img
                            src={`${import.meta.env.BASE_URL}images/instagram.png`}
                            alt=""
                        />
                    </a>

                    <a
                        href="https://www.youtube.com/@DraugrStudios2026"
                        aria-label="YouTube"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}images/youtube.png`}
                            alt=""
                        />
                    </a>

                    <a href="mailto:contacto@draugrstudio.com" aria-label="Correo electrónico">
                        <img
                            src={`${import.meta.env.BASE_URL}images/gmail.png`}
                            alt=""
                        />
                    </a>

                    <a href="#tiktok" aria-label="TikTok">
                        <img
                            src={`${import.meta.env.BASE_URL}images/tiktok.png`}
                            alt=""
                        />
                    </a>

                    <a href="#discord" aria-label="Discord">
                        <img
                            src={`${import.meta.env.BASE_URL}images/discord.png`}
                            alt=""
                        />
                    </a>
                </nav>

                <div className="footer-divider"></div>

                <p className="copyright fuente-texto">
                    © 2026 Draugr Studio. Todos los derechos reservados.
                </p>
            </footer>
        </main>
    );
}

export default Estudio;
