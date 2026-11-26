
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { guardarCompra } from './comprasStorage.js';
import './finalizarcompra.css';

function FinalizarCompra() {
    const navigate = useNavigate();

    // Recuperar los productos del carrito
    const [productos] = useState(() => {
        try {
            const guardados = JSON.parse(
                localStorage.getItem('carritoAshes') || '[]'
            );

            return Array.isArray(guardados) ? guardados : [];
        } catch {
            return [];
        }
    });

    const [metodoPago, setMetodoPago] = useState('transferencia');

    const formatoPrecio = (precio) =>
        Number(precio || 0).toLocaleString('es-CO');

    const subtotal = productos.reduce(
        (suma, producto) =>
            suma + Number(producto.precio || 0) * Number(producto.cantidad || 1),
        0
    );

    const envio = productos.length > 0 ? 8000 : 0;
    const total = subtotal + envio;

    const etiquetasPago = {
        transferencia: 'PSE / NEQUI / BANCOLOMBIA',
        tarjeta: 'Tarjeta de crédito (simulación)'
    };

    const finalizarCompra = (event) => {
        event.preventDefault();

        if (productos.length === 0) {
            navigate('/merch');
            return;
        }

        const formulario = new FormData(event.currentTarget);
        const leer = (campo) => String(formulario.get(campo) || '').trim();

        // Por seguridad NO se guardan los datos de la tarjeta, solo el método elegido
        const datosCompra = {
            productos: productos.map((producto) => ({
                id: producto.id,
                nombre: producto.nombre,
                talla: producto.talla || null,
                precio: Number(producto.precio) || 0,
                cantidad: Number(producto.cantidad) || 1
            })),
            subtotal,
            envio,
            total,
            metodoPago: etiquetasPago[metodoPago],
            datos: {
                contacto: leer('contacto'),
                nombres: leer('nombres'),
                apellidos: leer('apellidos'),
                direccion: leer('direccion'),
                complemento: leer('complemento'),
                ciudad: leer('ciudad'),
                provincia: leer('provincia'),
                telefono: leer('telefono'),
                codigoPostal: leer('codigoPostal')
            }
        };

        const compra = guardarCompra(datosCompra);

        // Vaciar el carrito y mostrar la compra realizada
        localStorage.removeItem('carritoAshes');

        navigate(`/Compras/${compra.id}`);
    };

    return (
        <main className="checkout-page">

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

            <section className="checkout-container">

                <h1 className="checkout-title fuente-titulos">
                    FINALIZA TU COMPRA
                </h1>

                {productos.length === 0 ? (
                    <div className="checkout-empty">
                        <p className="fuente-texto">
                            No tienes productos para finalizar la compra.
                        </p>

                        <Link
                            to="/merch"
                            className="checkout-button fuente-titulos"
                        >
                            EXPLORAR MERCH
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* RESUMEN DE COMPRA */}
                        <section className="checkout-summary">

                            <div className="checkout-products">
                                {productos.map((producto) => {
                                    const imagenes = {
                                        'camiseta-ashes': 'camiseta-ashes.png',
                                        'gorra-ashes': 'gorra-ashes.png',
                                        'pines-ashes': 'pines-ashes.png',
                                        'poster-ashes': 'poster-ashes.png'
                                    };

                                    const imagen = imagenes[producto.id];

                                    return (
                                        <article
                                            className="checkout-product"
                                            key={`${producto.id}-${producto.talla || 'unica'}`}
                                        >
                                            <div className="checkout-product-image">
                                                {imagen && (
                                                    <img
                                                        src={`${import.meta.env.BASE_URL}images/${imagen}`}
                                                        alt={producto.nombre}
                                                    />
                                                )}
                                            </div>

                                            <div className="checkout-product-info">
                                                <h2 className="fuente-titulos">
                                                    {producto.nombre}
                                                </h2>

                                                {producto.talla && (
                                                    <p className="fuente-texto">
                                                        Talla: {producto.talla}
                                                    </p>
                                                )}

                                                <p className="fuente-texto">
                                                    Cantidad: {producto.cantidad}
                                                </p>

                                                <p className="fuente-texto">
                                                    $ {formatoPrecio(
                                                        producto.precio * producto.cantidad
                                                    )} COP
                                                </p>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>

                            <div className="checkout-total">
                                <h2 className="fuente-titulos">
                                    RESUMEN DE LA COMPRA
                                </h2>

                                <div className="checkout-total-row">
                                    <p className="fuente-texto">Productos</p>
                                    <p className="fuente-texto">
                                        $ {formatoPrecio(subtotal)} COP
                                    </p>
                                </div>

                                <div className="checkout-total-row">
                                    <p className="fuente-texto">Envío</p>
                                    <p className="fuente-texto">
                                        $ {formatoPrecio(envio)} COP
                                    </p>
                                </div>

                                <div className="checkout-divider"></div>

                                <div className="checkout-total-row checkout-final-total">
                                    <p className="fuente-texto">Total</p>
                                    <p className="fuente-texto">
                                        $ {formatoPrecio(total)} COP
                                    </p>
                                </div>

                                <a
                                    href="#datos-compra"
                                    className="checkout-button fuente-titulos"
                                >
                                    PAGAR Y FINALIZAR
                                </a>
                            </div>

                        </section>

                        {/* FORMULARIO */}
                        <form
                            className="checkout-form"
                            id="datos-compra"
                            onSubmit={finalizarCompra}
                        >
                            <div className="checkout-form-columns">

                                {/* CONTACTO Y ENTREGA */}
                                <div className="checkout-delivery">

                                    <h2 className="fuente-titulos">CONTACTO</h2>

                                    <input
                                        type="text"
                                        name="contacto"
                                        placeholder="Correo electrónico o teléfono"
                                        required
                                    />

                                    <h2 className="fuente-titulos">ENTREGA</h2>

                                    <input
                                        type="text"
                                        value="Colombia"
                                        readOnly
                                        aria-label="País"
                                    />

                                    <div className="checkout-input-row">
                                        <input type="text" name="nombres" placeholder="Nombres" required />
                                        <input type="text" name="apellidos" placeholder="Apellidos" required />
                                    </div>

                                    <input type="text" name="direccion" placeholder="Dirección" required />
                                    <input type="text" name="complemento" placeholder="Casa/apartamento" />

                                    <div className="checkout-input-row">
                                        <input type="text" name="ciudad" placeholder="Ciudad" required />
                                        <input type="text" name="provincia" placeholder="Provincia/estado" required />
                                    </div>

                                    <div className="checkout-input-row">
                                        <input type="tel" name="telefono" placeholder="Teléfono" required />
                                        <input type="text" name="codigoPostal" placeholder="Código postal" required />
                                    </div>

                                    <h2 className="fuente-titulos checkout-shipping-title">
                                        MÉTODO DE ENVÍO
                                    </h2>

                                    <div className="checkout-shipping-option">
                                        <span className="fuente-texto">
                                            Envío estándar
                                            <small>2 a 3 días hábiles</small>
                                        </span>

                                        <span className="fuente-texto">
                                            $ {formatoPrecio(envio)} COP
                                        </span>
                                    </div>

                                </div>

                                {/* PAGO */}
                                <div className="checkout-payment">

                                    <h2 className="fuente-titulos">PAGO</h2>

                                    <p className="checkout-payment-note fuente-texto">
                                        Pague
                                    </p>

                                    <div className="checkout-payment-options">

                                        <label className="checkout-payment-option">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="transferencia"
                                                checked={metodoPago === 'transferencia'}
                                                onChange={() => setMetodoPago('transferencia')}
                                            />
                                            <span className="fuente-texto">
                                                PSE / NEQUI / BANCOLOMBIA
                                            </span>
                                        </label>

                                        <label className="checkout-payment-option">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="tarjeta"
                                                checked={metodoPago === 'tarjeta'}
                                                onChange={() => setMetodoPago('tarjeta')}
                                            />
                                            <span className="fuente-texto">
                                                Tarjeta de crédito (simulación)
                                            </span>
                                        </label>

                                        {metodoPago === 'tarjeta' && (
                                            <div className="checkout-card-fields">
                                                <input
                                                    type="text"
                                                    placeholder="Número ficticio de tarjeta"
                                                    maxLength="19"
                                                />

                                                <div className="checkout-input-row">
                                                    <input
                                                        type="text"
                                                        placeholder="Vencimiento (MM/AA)"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Código de seguridad"
                                                        maxLength="4"
                                                    />
                                                </div>

                                                <input
                                                    type="text"
                                                    placeholder="Nombre del titular"
                                                />
                                            </div>
                                        )}

                                        {metodoPago === 'transferencia' && (
                                            <p className="checkout-transfer-info fuente-texto">
                                                Accede a tu plataforma elegida o paga con tarjeta (porfa)
                                            </p>
                                        )}

                                    </div>

                                </div>

                            </div>

                            <button
                                type="submit"
                                className="checkout-button checkout-submit fuente-titulos"
                            >
                                PAGAR Y FINALIZAR
                            </button>

                        </form>
                    </>
                )}

            </section>

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

export default FinalizarCompra;
