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

        </main>

    );
}

export default Merch;