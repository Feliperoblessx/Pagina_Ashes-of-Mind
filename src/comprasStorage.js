// Utilidades para guardar y leer las compras simuladas (localStorage)

const CLAVE_COMPRAS = 'comprasAshes';

const IMAGENES = {
    'camiseta-ashes': 'camiseta-ashes.png',
    'gorra-ashes': 'gorra-ashes.png',
    'pines-ashes': 'pines-ashes.png',
    'poster-ashes': 'poster-ashes.png'
};

export function obtenerImagenProducto(id) {
    return IMAGENES[id]
        ? `${import.meta.env.BASE_URL}images/${IMAGENES[id]}`
        : null;
}

export function formatoPrecio(precio) {
    return Number(precio || 0).toLocaleString('es-CO');
}

// Devuelve todas las compras (la más reciente primero)
export function obtenerCompras() {
    try {
        const guardadas = JSON.parse(
            localStorage.getItem(CLAVE_COMPRAS) || '[]'
        );

        return Array.isArray(guardadas) ? guardadas : [];
    } catch {
        return [];
    }
}

// Guarda una compra nueva al inicio de la lista y la devuelve (con id y fecha)
export function guardarCompra(datosCompra) {
    const compra = {
        ...datosCompra,
        id: `compra-${Date.now()}`,
        fecha: new Date().toISOString()
    };

    const compras = obtenerCompras();

    compras.unshift(compra);

    localStorage.setItem(CLAVE_COMPRAS, JSON.stringify(compras));

    return compra;
}
