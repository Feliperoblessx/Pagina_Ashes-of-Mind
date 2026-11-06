import { Link, NavLink } from 'react-router-dom';
import './Merch.css';

function Merch() {
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

            <section className="merch-hero">
                <img
                    className="merch-background"
                    src={`${import.meta.env.BASE_URL}images/merch-fondo.png`}
                    alt="Colección de productos Draugr Studios"
                />
                <div className="merch-overlay"></div>
                <div className="merch-hero-content">
                    <p className="merch-eyebrow fuente-texto">
                        EXPLORA NUESTRA MERCH OFICIAL
                    </p>
                    <h1 className="fuente-titulos">
                        MERCH OFICIAL
                    </h1>
                    <p className="merch-description fuente-texto">
                        Descubre nuestra colección de merchandising
                        inspirada en Ashes of Mind y demuestra tu
                        conexión con este universo a donde vayas.
                    </p>
                    <a
                        href="#catalogo"
                        className="merch-hero-button fuente-titulos"
                    >
                        CATÁLOGO
                    </a>
                </div>
            </section>




            <section className="merch-catalog" id="catalogo">
                <nav className="merch-categories" aria-label="Categorías de merchandising">
                    <a className="merch-category active" href="#camisetas">
                        CAMISETAS
                    </a>
                    <a className="merch-category" href="#accesorios">
                        ACCESORIOS
                    </a>
                    <a className="merch-category" href="#posters">
                        POSTERS
                    </a>
                    <a className="merch-category" href="#juegos-mesa">
                        JUEGOS DE MESA
                    </a>
                    <a className="merch-category" href="#pines">
                        PINES
                    </a>
                </nav>
                <section className="merch-product" id="camisetas">

                    <div className="merch-product-info">

                        <h2 className="fuente-titulos">
                            CAMISETA ASHES
                            <br />
                            OF MIND
                        </h2>

                        <p className="merch-product-description fuente-texto">
                            Camiseta caracterizada con el nombre del juego
                        </p>

                        <div className="merch-sizes">
                            <span className="merch-size-label">Talla</span>
                            <span className="merch-size">S</span>
                            <span className="merch-size">M</span>
                            <span className="merch-size">L</span>
                            <span className="merch-size">XL</span>
                        </div>

                        <p className="merch-price fuente-texto">
                            $ 50.000 COP
                        </p>

                        <button
                            type="button"
                            className="merch-add-button fuente-titulos"
                        >
                            AGREGAR AL CARRITO
                        </button>

                    </div>
                    <div className="merch-product-image">

                        {/*
        <img
          src={`${import.meta.env.BASE_URL}images/camiseta-ashes.png`}
          alt="Camiseta Ashes of Mind"
        />
      */}
                    </div>

                </section>

                <section className="merch-product" id="accesorios">

                    <div className="merch-product-info">

                        <h2 className="fuente-titulos">
                            GORRA ASHES OF
                            <br />
                            MIND
                        </h2>

                        <div className="merch-sizes">
                            <span className="merch-size-label">Talla</span>
                            <span className="merch-size">S</span>
                            <span className="merch-size">M</span>
                            <span className="merch-size">L</span>
                            <span className="merch-size">XL</span>
                        </div>

                        <p className="merch-product-description fuente-texto">
                            Gorra negra caracterizada con el nombre del juego
                        </p>

                        <p className="merch-price fuente-texto">
                            $ 25.000 COP
                        </p>

                        <button
                            type="button"
                            className="merch-add-button fuente-titulos"
                        >
                            AGREGAR AL CARRITO
                        </button>

                    </div>

                    <div className="merch-product-image">

                        {/*
      <img
        src={`${import.meta.env.BASE_URL}images/gorra-ashes.png`}
        alt="Gorra Ashes of Mind"
      />
    */}
                    </div>

                </section>

                <section className="merch-product" id="accesorios">

                    <div className="merch-product-info">

                        <h2 className="fuente-titulos">
                            PINES ASHES OF
                            <br />
                            MIND
                        </h2>

                        <div className="merch-sizes">
                            <span className="merch-size-label">Talla</span>
                            <span className="merch-size">S</span>
                            <span className="merch-size">M</span>
                            <span className="merch-size">L</span>
                            <span className="merch-size">XL</span>
                        </div>

                        <p className="merch-product-description fuente-texto">
                            Pines caracterizados con temáticas del juego
                        </p>

                        <p className="merch-price fuente-texto">
                            $ 10.000 COP
                        </p>

                        <button
                            type="button"
                            className="merch-add-button fuente-titulos"
                        >
                            AGREGAR AL CARRITO
                        </button>

                    </div>
                    <div className="merch-product-image">

                        {/*
      <img
        src={`${import.meta.env.BASE_URL}images/gorra-ashes.png`}
        alt="Gorra Ashes of Mind"
      />
    */}

                    </div>

                </section>

                <section className="merch-product" id="accesorios">

                    <div className="merch-product-info">

                        <h2 className="fuente-titulos">
                            POSTER ASHES OF
                            <br />
                            MIND
                        </h2>
                        <p className="merch-product-description fuente-texto">
                            Poster caracterizado con temática del juego
                        </p>

                        <p className="merch-price fuente-texto">
                            $ 30.000 COP
                        </p>

                        <button
                            type="button"
                            className="merch-add-button fuente-titulos"
                        >
                            AGREGAR AL CARRITO
                        </button>

                    </div>
                    <div className="merch-product-image">

                        {/*
      <img
        src={`${import.meta.env.BASE_URL}images/gorra-ashes.png`}
        alt="Gorra Ashes of Mind"
      />
    */}
                    </div>
                </section>
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

export default Merch;