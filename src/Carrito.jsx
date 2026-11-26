import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { obtenerCompras } from './comprasStorage.js';
import './Carrito.css';

function Carrito() {
    const navigate = useNavigate();

    // Recuperar productos guardados
    const [productos, setProductos] = useState(() => {
        try {
            const guardados = JSON.parse(
                localStorage.getItem('carritoAshes') || '[]'
            );

            if (!Array.isArray(guardados)) return [];

            return guardados.map((producto) => ({
                ...producto,
                precio: Number(producto.precio) || 0,
                cantidad: Math.max(1, Number(producto.cantidad) || 1)
            }));
        } catch {
            return [];
        }
    });

    // Compras realizadas (simuladas)
    const [compras] = useState(() => obtenerCompras());

    // Guardar cambios
    const guardarCarrito = (nuevoCarrito) => {
        setProductos(nuevoCarrito);

        localStorage.setItem(
            'carritoAshes',
            JSON.stringify(nuevoCarrito)
        );
    };

    // Cambiar cantidad
    const cambiarCantidad = (id, talla, cambio) => {
        const nuevoCarrito = productos
            .map((producto) => {
                if (producto.id === id && producto.talla === talla) {
                    return {
                        ...producto,
                        cantidad: producto.cantidad + cambio
                    };
                }

                return producto;
            })
            .filter((producto) => producto.cantidad > 0);

        guardarCarrito(nuevoCarrito);
    };

    // Eliminar producto
    const eliminarProducto = (id, talla) => {
        const nuevoCarrito = productos.filter(
            (producto) =>
                !(producto.id === id && producto.talla === talla)
        );

        guardarCarrito(nuevoCarrito);
    };

    // Calcular subtotal
    const subtotal = productos.reduce(
        (acumulado, producto) =>
            acumulado + producto.precio * producto.cantidad,
        0
    );

    // Calcular envío
    const envio = productos.length > 0 ? 8000 : 0;

    // Calcular total
    const total = subtotal + envio;

    // Cantidad de productos
    const cantidadProductos = productos.reduce(
        (suma, producto) => suma + producto.cantidad,
        0
    );

    // Formato de precios
    const formatoPrecio = (precio) =>
        precio.toLocaleString('es-CO');

    // Obtener imagen
    const obtenerImagen = (id) => {
        const imagenes = {
            'camiseta-ashes': 'camiseta-ashes.png',
            'gorra-ashes': 'gorra-ashes.png',
            'pines-ashes': 'pines-ashes.png',
            'poster-ashes': 'poster-ashes.png'
        };

        return imagenes[id]
            ? `${import.meta.env.BASE_URL}images/${imagenes[id]}`
            : null;
    };

    // Acción del botón comprar
    const comprar = () => {
        if (productos.length === 0) {
            alert('Tu carrito está vacío.');
            return;
        }

        alert(
            '¡Gracias por tu interés en Ashes of Mind! La compra todavía no está habilitada.'
        );
    };

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

                <Link
                    className="cart-link"
                    to="/Carrito"
                    aria-label="Ir al carrito"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}images/cart.png`}
                        alt=""
                    />
                </Link>

            </header>

            {/* CONTENIDO DEL CARRITO */}
            <section className="cart-page">

                <h1 className="cart-title fuente-titulos">
                    CARRITO DE COMPRAS
                </h1>

                {productos.length === 0 ? (

                    <div className="cart-empty">

                        <p className="fuente-texto">
                            AGREGA PRODUCTOS A TU CARRITO
                        </p>

                        <Link
                            to="/merch"
                            className="cart-continue-button fuente-titulos"
                        >
                            EXPLORAR MERCH
                        </Link>

                    </div>

                ) : (

                    <div className="cart-content">

                        {/* PRODUCTOS */}
                        <div className="cart-products">

                            {productos.map((producto) => {
                                const imagen = obtenerImagen(producto.id);

                                return (
                                    <article
                                        className="cart-product"
                                        key={`${producto.id}-${producto.talla || 'unica'}`}
                                    >

                                        <div className="cart-product-image">

                                            {imagen && (
                                                <img
                                                    src={imagen}
                                                    alt={producto.nombre}
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            )}

                                        </div>

                                        <div className="cart-product-info">

                                            <h2 className="fuente-titulos">
                                                {producto.nombre}
                                            </h2>

                                            <p className="fuente-texto">
                                                {producto.descripcion}
                                            </p>

                                            {producto.talla && (
                                                <p className="cart-product-size fuente-texto">
                                                    Talla: {producto.talla}
                                                </p>
                                            )}

                                            <p className="cart-product-price fuente-texto">
                                                $ {formatoPrecio(producto.precio)} COP
                                            </p>

                                            {/* CANTIDAD */}
                                            <div className="cart-product-quantity">

                                                <button
                                                    type="button"
                                                    onClick={() => cambiarCantidad(
                                                        producto.id,
                                                        producto.talla,
                                                        -1
                                                    )}
                                                    aria-label="Disminuir cantidad"
                                                >
                                                    −
                                                </button>

                                                <span className="fuente-texto">
                                                    {producto.cantidad}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() => cambiarCantidad(
                                                        producto.id,
                                                        producto.talla,
                                                        1
                                                    )}
                                                    aria-label="Aumentar cantidad"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>

                                        {/* ELIMINAR */}
                                        <button
                                            type="button"
                                            className="cart-remove-button fuente-titulos"
                                            onClick={() => eliminarProducto(
                                                producto.id,
                                                producto.talla
                                            )}
                                        >
                                            ELIMINAR
                                        </button>

                                    </article>
                                );
                            })}

                        </div>

                        {/* RESUMEN DE COMPRA */}
                        <div className="cart-summary">

                            <div className="cart-summary-row">

                                <p className="fuente-texto">
                                    Productos ({cantidadProductos})
                                </p>

                                <p className="fuente-texto">
                                    $ {formatoPrecio(subtotal)} COP
                                </p>

                            </div>

                            <div className="cart-summary-row">

                                <p className="fuente-texto">
                                    Envío
                                </p>

                                <p className="fuente-texto">
                                    $ {formatoPrecio(envio)} COP
                                </p>

                            </div>

                            <div className="cart-summary-divider"></div>

                            <div className="cart-summary-row cart-summary-total">

                                <p className="fuente-texto">
                                    Total
                                </p>

                                <p className="fuente-texto">
                                    $ {formatoPrecio(total)} COP
                                </p>

                            </div>

                            <button
                                type="button"
                                className="cart-buy-button fuente-titulos"
                                onClick={() => {
                                    if (productos.length === 0) {
                                        alert('Tu carrito está vacío.');
                                        return;
                                    }

                                    navigate('/FinalizarCompra');
                                }}
                            >
                                COMPRAR
                            </button>

                        </div>

                    </div>

                )}

            </section>

            {/* MIS COMPRAS */}
            <section className="cart-page purchases-section">

                <h1 className="cart-title fuente-titulos">
                    MIS COMPRAS
                </h1>

                {compras.length === 0 ? (

                    <div className="cart-empty">

                        <p className="fuente-texto">
                            AÚN NO TIENES COMPRAS
                        </p>

                    </div>

                ) : (

                    <div className="purchases-list">

                        {compras.map((compra) => {
                            const primero = compra.productos?.[0];
                            const otros = (compra.productos?.length || 1) - 1;
                            const imagen = primero ? obtenerImagen(primero.id) : null;

                            const titulo = primero
                                ? `${primero.nombre}${otros > 0 ? ` y ${otros} más` : ''}`
                                : 'Compra';

                            const fecha = compra.fecha
                                ? new Date(compra.fecha).toLocaleDateString('es-CO', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })
                                : '';

                            return (
                                <article className="purchase-card" key={compra.id}>

                                    <div className="purchase-card-main">

                                        <div className="purchase-card-image">
                                            {imagen && (
                                                <img
                                                    src={imagen}
                                                    alt={primero.nombre}
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            )}
                                        </div>

                                        <div className="purchase-card-info">
                                            <h2 className="fuente-titulos">
                                                {titulo}
                                            </h2>

                                            <p className="fuente-texto">
                                                {fecha} · $ {formatoPrecio(compra.total)} COP
                                            </p>
                                        </div>

                                    </div>

                                    <Link
                                        to={`/Compras/${compra.id}`}
                                        className="cart-remove-button purchase-card-button fuente-titulos"
                                    >
                                        MÁS INFORMACIÓN
                                    </Link>

                                </article>
                            );
                        })}

                    </div>

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

                    <a
                        href="mailto:studiosdraugr@gmail.com"
                        aria-label="Correo electrónico"
                    >
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

export default Carrito;
