import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import {
    obtenerCompras,
    obtenerImagenProducto,
    formatoPrecio
} from './comprasStorage.js';
import './Compras.css';

function Compras() {
    const navigate = useNavigate();
    const { id } = useParams();

    // Si no llega un id, se muestra la compra más reciente
    const compras = obtenerCompras();
    const compra = id
        ? compras.find((item) => item.id === id)
        : compras[0];

    const productos = compra?.productos || [];
    const datos = compra?.datos || {};

    // Dirección completa en una sola línea
    const direccion = [
        datos.direccion,
        datos.complemento,
        datos.ciudad,
        datos.provincia,
        datos.codigoPostal
    ]
        .filter(Boolean)
        .join(', ');

    const fecha = compra?.fecha
        ? new Date(compra.fecha).toLocaleDateString('es-CO', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        : '';

    // Abre Gmail en una pestaña nueva con destinatario, asunto y mensaje ya escritos
    const asunto = `Ayuda con mi compra ${compra?.id || ''}`.trim();
    const cuerpo = compra
        ? `Hola Draugr Studio, necesito ayuda con mi compra (${compra.id}).\n\n`
        : 'Hola Draugr Studio, necesito ayuda.\n\n';

    const enlaceAyuda =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=studiosdraugr@gmail.com` +
        `&su=${encodeURIComponent(asunto)}` +
        `&body=${encodeURIComponent(cuerpo)}`;

    return (
        <main className="purchase-page">

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

            {!compra ? (

                <section className="purchase-container">
                    <h1 className="purchase-title fuente-titulos">
                        TUS PRODUCTOS
                    </h1>

                    <div className="purchase-empty">
                        <p className="fuente-texto">
                            {id
                                ? 'No encontramos esta compra.'
                                : 'Aún no tienes compras.'}
                        </p>

                        <Link
                            to="/Carrito"
                            className="purchase-button fuente-titulos"
                        >
                            VOLVER
                        </Link>
                    </div>
                </section>

            ) : (
                <>
                    {/* TUS PRODUCTOS + RESUMEN */}
                    <section className="purchase-container">

                        <h1 className="purchase-title fuente-titulos">
                            TUS PRODUCTOS
                        </h1>

                        <div className="purchase-layout">

                            <div className="purchase-products">
                                {productos.map((producto) => {
                                    const imagen = obtenerImagenProducto(producto.id);

                                    return (
                                        <article
                                            className="purchase-product"
                                            key={`${producto.id}-${producto.talla || 'unica'}`}
                                        >
                                            <div className="purchase-product-image">
                                                {imagen && (
                                                    <img
                                                        src={imagen}
                                                        alt={producto.nombre}
                                                    />
                                                )}
                                            </div>

                                            <div className="purchase-product-info">
                                                <h2 className="fuente-titulos">
                                                    {producto.nombre}
                                                </h2>

                                                <p className="fuente-texto">
                                                    {producto.talla
                                                        ? `Talla: ${producto.talla} · `
                                                        : ''}
                                                    Cantidad: {producto.cantidad}
                                                </p>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>

                            <aside className="purchase-summary">
                                <h2 className="fuente-titulos">
                                    RESUMEN DE LA COMPRA
                                </h2>

                                <div className="purchase-summary-row">
                                    <p className="fuente-texto">Productos</p>
                                    <p className="fuente-texto">
                                        $ {formatoPrecio(compra.subtotal)} COP
                                    </p>
                                </div>

                                <div className="purchase-summary-row">
                                    <p className="fuente-texto">Envío</p>
                                    <p className="fuente-texto">
                                        $ {formatoPrecio(compra.envio)} COP
                                    </p>
                                </div>

                                <div className="purchase-summary-divider"></div>

                                <div className="purchase-summary-row purchase-summary-total">
                                    <p className="fuente-texto">Total</p>
                                    <p className="fuente-texto">
                                        $ {formatoPrecio(compra.total)} COP
                                    </p>
                                </div>
                            </aside>

                        </div>
                    </section>

                    {/* DETALLES DE LA COMPRA */}
                    <section className="purchase-container purchase-details-container">

                        <h2 className="purchase-details-title fuente-titulos">
                            DETALLES DE LA COMPRA
                        </h2>

                        <div className="purchase-details">

                            <div className="purchase-details-row">
                                <span className="purchase-details-label fuente-texto">
                                    Dirección
                                </span>
                                <span className="fuente-texto">
                                    {direccion || 'Sin dirección'}
                                </span>
                            </div>

                            <div className="purchase-details-row">
                                <span className="purchase-details-label fuente-texto">
                                    Productos comprados
                                </span>
                                <ul className="purchase-details-list fuente-texto">
                                    {productos.map((producto) => (
                                        <li key={`${producto.id}-${producto.talla || 'unica'}`}>
                                            {producto.cantidad} × {producto.nombre}
                                            {producto.talla ? ` (Talla ${producto.talla})` : ''}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="purchase-details-row">
                                <span className="purchase-details-label fuente-texto">
                                    Método de pago
                                </span>
                                <span className="fuente-texto">
                                    {compra.metodoPago}
                                </span>
                            </div>

                            {(datos.nombres || datos.contacto || fecha) && (
                                <div className="purchase-details-row">
                                    <span className="purchase-details-label fuente-texto">
                                        Datos del comprador
                                    </span>
                                    <span className="fuente-texto">
                                        {[
                                            `${datos.nombres || ''} ${datos.apellidos || ''}`.trim(),
                                            datos.contacto,
                                            datos.telefono,
                                            fecha
                                        ]
                                            .filter(Boolean)
                                            .join(' · ')}
                                    </span>
                                </div>
                            )}

                            <a
                                className="purchase-help fuente-texto"
                                href={enlaceAyuda}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ¿Necesitas ayuda?
                            </a>

                        </div>

                        <button
                            type="button"
                            className="purchase-button fuente-titulos"
                            onClick={() => navigate('/Carrito')}
                        >
                            VOLVER
                        </button>

                    </section>
                </>
            )}

            {/* FOOTER */}
            <footer className="footer" id="draugr">
                <img
                    className="footer-logo"
                    src={`${import.meta.env.BASE_URL}images/Logo.png`}
                    alt="Draugr Studio"
                />

                <p className="footer-slogan">
                    Cada historia es una puerta hacia lo desconocido
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

                <p className="copyright fuente-texto">
                    © 2026 Draugr Studio. Todos los derechos reservados.
                </p>
            </footer>

        </main>
    );
}

export default Compras;
