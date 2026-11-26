

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Merch.css';

function Merch() {
    // Recuperar las tallas guardadas
    const [tallasSeleccionadas, setTallasSeleccionadas] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('ashes-tallas') || '{}');
        } catch {
            return {};
        }
    });

    // Guardar la talla seleccionada
    const seleccionarTalla = (productoId, talla) => {
        const nuevasTallas = {
            ...tallasSeleccionadas,
            [productoId]: talla
        };

        setTallasSeleccionadas(nuevasTallas);
        localStorage.setItem('ashes-tallas', JSON.stringify(nuevasTallas));
    };

    // Agregar producto al carrito
    const agregarAlCarrito = (producto) => {
        const talla = producto.tieneTalla
            ? tallasSeleccionadas[producto.id]
            : null;

        if (producto.tieneTalla && !talla) {
            alert('Por favor, selecciona una talla antes de agregar el producto.');
            return;
        }

        let carritoActual = [];

        try {
            carritoActual = JSON.parse(
                localStorage.getItem('carritoAshes') || '[]'
            );

            if (!Array.isArray(carritoActual)) {
                carritoActual = [];
            }
        } catch {
            carritoActual = [];
        }

        // Buscar el mismo producto con la misma talla
        const productoExistente = carritoActual.find(
            (item) => item.id === producto.id && item.talla === talla
        );

        if (productoExistente) {
            productoExistente.cantidad = (Number(productoExistente.cantidad) || 1) + 1;
        } else {
            carritoActual.push({
                id: producto.id,
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                precio: producto.precio,
                talla,
                cantidad: 1
            });
        }

        localStorage.setItem('carritoAshes', JSON.stringify(carritoActual));

        alert('¡Producto agregado al carrito!');
    };

    const irASeccion = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const navegarSeccion = (e, id) => {
        e.preventDefault();
        irASeccion(id);
    };

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

                <Link className="cart-link" to="/Carrito" aria-label="Ir al carrito">
                    <img
                        src={`${import.meta.env.BASE_URL}images/cart.png`}
                        alt=""
                    />
                </Link>
            </header>

            {/* HERO */}
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

                    <h1 className="fuente-titulos">MERCH OFICIAL</h1>

                    <p className="merch-description fuente-texto">
                        Descubre nuestra colección de merchandising
                        inspirada en Ashes of Mind y demuestra tu
                        conexión con este universo a donde vayas.
                    </p>

                    <button
                        type="button"
                        className="merch-hero-button fuente-titulos"
                        onClick={() => irASeccion('catalogo')}
                    >
                        CATÁLOGO
                    </button>
                </div>
            </section>

            {/* CATÁLOGO */}
            <section className="merch-catalog" id="catalogo">
                <nav className="merch-categories" aria-label="Categorías de merchandising">
                    <Link
                        className="merch-category active"
                        to="/merch"
                        onClick={(e) => navegarSeccion(e, 'camisetas')}
                    >
                        CAMISETAS
                    </Link>

                    <Link
                        className="merch-category"
                        to="/merch"
                        onClick={(e) => navegarSeccion(e, 'accesorios')}
                    >
                        ACCESORIOS
                    </Link>

                    <Link
                        className="merch-category"
                        to="/merch"
                        onClick={(e) => navegarSeccion(e, 'posters')}
                    >
                        POSTERS
                    </Link>

                    <Link
                        className="merch-category"
                        to="/merch"
                        onClick={(e) => navegarSeccion(e, 'juegos-mesa')}
                    >
                        JUEGOS DE MESA
                    </Link>

                    <Link
                        className="merch-category"
                        to="/merch"
                        onClick={(e) => navegarSeccion(e, 'pines')}
                    >
                        PINES
                    </Link>
                </nav>

                {/* CAMISETA */}
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

                            {['S', 'M', 'L', 'XL'].map((talla) => (
                                <button
                                    key={talla}
                                    type="button"
                                    className={`merch-size ${
                                        tallasSeleccionadas['camiseta-ashes'] === talla
                                            ? 'selected'
                                            : ''
                                    }`}
                                    aria-pressed={
                                        tallasSeleccionadas['camiseta-ashes'] === talla
                                    }
                                    onClick={() => seleccionarTalla('camiseta-ashes', talla)}
                                >
                                    {talla}
                                </button>
                            ))}
                        </div>

                        <p className="merch-price fuente-texto">
                            $ 50.000 COP
                        </p>

                        <button
                            type="button"
                            className="merch-add-button fuente-titulos"
                            onClick={() => agregarAlCarrito({
                                id: 'camiseta-ashes',
                                nombre: 'CAMISETA ASHES OF MIND',
                                descripcion: 'Camiseta caracterizada con el nombre del juego',
                                precio: 50000,
                                tieneTalla: true
                            })}
                        >
                            AGREGAR AL CARRITO
                        </button>
                    </div>

                    <div className="merch-product-image">
                        <img
                            src={`${import.meta.env.BASE_URL}images/camiseta-ashes.png`}
                            alt="Camiseta Ashes of Mind"
                        />
                    </div>
                </section>

                {/* GORRA */}
                <section className="merch-product" id="accesorios">
                    <div className="merch-product-info">
                        <h2 className="fuente-titulos">
                            GORRA ASHES OF
                            <br />
                            MIND
                        </h2>

                        <div className="merch-sizes">
                            <span className="merch-size-label">Talla</span>

                            {['S', 'M', 'L', 'XL'].map((talla) => (
                                <button
                                    key={talla}
                                    type="button"
                                    className={`merch-size ${
                                        tallasSeleccionadas['gorra-ashes'] === talla
                                            ? 'selected'
                                            : ''
                                    }`}
                                    aria-pressed={
                                        tallasSeleccionadas['gorra-ashes'] === talla
                                    }
                                    onClick={() => seleccionarTalla('gorra-ashes', talla)}
                                >
                                    {talla}
                                </button>
                            ))}
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
                            onClick={() => agregarAlCarrito({
                                id: 'gorra-ashes',
                                nombre: 'GORRA ASHES OF MIND',
                                descripcion: 'Gorra negra caracterizada con el nombre del juego',
                                precio: 25000,
                                tieneTalla: true
                            })}
                        >
                            AGREGAR AL CARRITO
                        </button>
                    </div>

                    <div className="merch-product-image">
                        <img
                            src={`${import.meta.env.BASE_URL}images/gorra-ashes.png`}
                            alt="Gorra Ashes of Mind"
                        />
                    </div>
                </section>

                {/* PINES */}
                <section className="merch-product" id="pines">
                    <div className="merch-product-info">
                        <h2 className="fuente-titulos">
                            PINES ASHES OF
                            <br />
                            MIND
                        </h2>

                        <p className="merch-product-description fuente-texto">
                            Pines caracterizados con temáticas del juego
                        </p>

                        <p className="merch-price fuente-texto">
                            $ 10.000 COP
                        </p>

                        <button
                            type="button"
                            className="merch-add-button fuente-titulos"
                            onClick={() => agregarAlCarrito({
                                id: 'pines-ashes',
                                nombre: 'PINES ASHES OF MIND',
                                descripcion: 'Pines caracterizados con temáticas del juego',
                                precio: 10000,
                                tieneTalla: false
                            })}
                        >
                            AGREGAR AL CARRITO
                        </button>
                    </div>

                    <div className="merch-product-image">
                        <img
                            src={`${import.meta.env.BASE_URL}images/pines-ashes.png`}
                            alt="Pines Ashes of Mind"
                        />
                    </div>
                </section>

                {/* POSTER */}
                <section className="merch-product" id="posters">
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
                            onClick={() => agregarAlCarrito({
                                id: 'poster-ashes',
                                nombre: 'POSTER ASHES OF MIND',
                                descripcion: 'Poster caracterizado con temática del juego',
                                precio: 30000,
                                tieneTalla: false
                            })}
                        >
                            AGREGAR AL CARRITO
                        </button>
                    </div>

                    <div className="merch-product-image">
                        {/*
                        <img
                            src={`${import.meta.env.BASE_URL}images/poster-ashes.png`}
                            alt="Poster Ashes of Mind"
                        />
                        */}
                    </div>
                </section>
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

                <p className="copyright">
                    © 2026 Draugr Studio. Todos los derechos reservados.
                </p>
            </footer>
        </main>
    );
}

export default Merch;


