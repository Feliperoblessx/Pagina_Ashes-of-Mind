import { useState } from 'react';
import './App.css'

function App() {
  const [sending, setSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const categoryNames = {
      bug: 'Bug / Error',
      execution: 'Problemas al ejecutar',
      performance: 'Problemas de rendimiento',
      complaint: 'Queja',
      suggestion: 'Sugerencia',
    };

    const categoria = categoryNames[formData.get('category')];
    const descripcion = String(formData.get('description') || '').trim();

    if (!categoria || !descripcion || descripcion.length > 5000) {
      setFeedbackMessage('Revisa la categoría y el comentario.');
      return;
    }

    setSending(true);
    setFeedbackMessage('');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwPE9jt5TeoKKE2b7F5zlt7khgs6NEm-bbEzlwj0_JrtrCffkhx1n1_XCsCU6PD0kjq/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          categoria,
          descripcion,
        }),
      });

      setFeedbackMessage('Comentario enviado con éxito.');
      form.reset();
    } catch (error) {
      console.error('Error al enviar el reporte:', error);
      setFeedbackMessage(
        'No se pudo enviar el reporte. Inténtalo de nuevo.'
      );
    } finally {
      setSending(false);
    }
  };
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}images/Logo.png`}
            alt="Draugr Studio"
          />
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#inicio">INICIO</a>
          <a href="#universo">UNIVERSO</a>
          <a href="#draugr">ESTUDIO</a>
          <a href="#merch">MERCH</a>
        </nav>

        <a className="cart-link" href="#merch" aria-label="Ver merchandising">
          <img src={`${import.meta.env.BASE_URL}images/cart.png`} alt="" />
        </a>
      </header>



      <section className="hero" id="inicio">
        <div className="hero-content">

          <img
            className="hero-logo"
            src={`${import.meta.env.BASE_URL}images/ashes-logo.png`}
            alt="Ashes of Mind"
          />

          <p className="hero-description fuente-texto ">
            ¿Qué queda de nosotros cuando
            <br></br>
            la mente deja de ser nuestra?
          </p>

          <div className="hero-buttons">
            <a className="button button-primary fuente-titulos" href="#universo">
              <span className="button-text">ENTRAR AL UNIVERSO</span>
              <img
                className="button-icon"
                src={`${import.meta.env.BASE_URL}images/button-icon.png`}
                alt=""
              />
            </a>

            <a className="button button-secondary" href="#build">
              <span className="play-icon">
                <span className="play-triangle"></span>
              </span>
              <span className="trailer-text">JUEGA ASHES OF MIND</span>
            </a>

          </div>
        </div>

      </section>

      <section className="game-section" id="videojuego">
        <div className="game-panel">
          <div className="game-intro">
            <img
              className="hero-logo"
              src={`${import.meta.env.BASE_URL}images/ashes-logo.png`}
              alt="Ashes of Mind"
            />

            <p className="game-description">
              Ashes of Mind es una experiencia de terror
              psicológico en primera persona, donde la
              realidad y la mente se desdibujan.
            </p>

            <a className="game-trailer-button" href="https://youtu.be/xlH8TP3dKN8">
              <span>VER TRÁILER</span>
              <img
                className="game-trailer-icon"
                src={`${import.meta.env.BASE_URL}images/button-icon.png`}
                alt=""
              />
            </a>

          </div>

          <div className="game-highlights">
            <article className="game-highlight">
              <div className="game-image-placeholder">
                <span>imagen epica 1</span>
              </div>
              <div className="game-highlight-text">
                <h3>CONCEPTO</h3>
                <p>
                  Una historia sobre la memoria, la culpa
                  y lo que intentamos olvidar.
                </p>
              </div>
            </article>

            <article className="game-highlight">
              <div className="game-image-placeholder">
                <span>imagen epica 2</span>
              </div>
              <div className="game-highlight-text">
                <h3>EXPERIENCIA</h3>
                <p>
                  Gestiona tu cordura y enfrenta aquello
                  que te acecha en la oscuridad.
                </p>
              </div>
            </article>

            <article className="game-highlight">
              <div className="game-image-placeholder">
                <span>imagen epica 3</span>
              </div>
              <div className="game-highlight-text">
                <h3>LAS AMENAZAS</h3>
                <p>
                  No estás solo. Algo te observa...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>


      <section className="gallery-section" id="galeria-3d">
        <div className="gallery-header">
          <h2>GALERÍA 3D</h2>

          <div className="gallery-divider"></div>

          <div className="gallery-controls">
            <button type="button" aria-label="Modelo anterior">
              ‹
            </button>
            <button type="button" aria-label="Modelo siguiente">
              ›
            </button>
          </div>
        </div>

        <div className="gallery-model-card">
          <div className="model-viewer-placeholder">
            <div className="model-placeholder-message">
              <span className="model-placeholder-label">
                Modelo 3D del personaje
              </span>
              <p>Modelo epico del personaje</p>
            </div>

            <div className="model-tools">
              <span>↻ GIRAR</span>
              <span>⌕ ZOOM</span>

            </div>
          </div>
          <div className="model-info">
            <p className="model-category">Enemigos</p>
            <h3>FRENESI</h3>
            <p>
              Frenesi es un personaje que se llama frenesi
            </p>
          </div>
        </div>
      </section>

      <section className="feedback-section" id="build">

        <div className="feedback-panel">
          <div className="build-column">

            <h2 className="feedback-main-title">
              PRUEBA EL JUEGO
            </h2>

            <p className="build-intro">
              Sé de los primeros en experimentar Ashes of Mind
              y ayúdanos a mejorar el juego.
            </p>

            <div className="download-card">

              <div className="download-description">
                <div className="download-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path
                      d="M24 5V30M14 21L24 31L34 21M8 34V41H40V34"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3>BUILD ASHES OF MIND</h3>
                  <p>
                    Accede a la versión temprana del juego
                  </p>
                </div>
              </div>

              <a
                className="download-button"
                href="https://github.com/Alein0/AshesOfMind/releases/download/V0.2/AshesOfMind.V0.2.zip"
              >
                <span className="download-button-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2V15M6.5 9.5L12 15L17.5 9.5M4 17V22H20V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>DESCARGAR BUILD</span>
              </a>

            </div>
          </div>

          <div className="feedback-column">

            <div className="bug-card">

              <h2 className="feedback-title">
                ¿ENCONTRASTE UN BUG O TIENES UNA SUGERENCIA?
              </h2>

              <p className="feedback-subtitle">
                Tu opinión nos ayuda a crear una mejor experiencia.
              </p>

              <form className="bug-form" onSubmit={handleSubmit}>
                <label
                  className="visually-hidden"
                  htmlFor="bug-description"
                >
                  Describe el problema
                </label>

                <textarea
                  id="bug-description"
                  name="description"
                  placeholder="Escribe aquí tu bug, sugerencia o comentario..."
                  required
                />

                <label
                  className="bug-select-label"
                  htmlFor="bug-category"
                >
                  TIPO DE COMENTARIO
                </label>

                <select
                  id="bug-category"
                  name="category"
                  defaultValue="bug"
                  required
                >
                  <option value="bug">Bug / Error</option>
                  <option value="execution">
                    Problemas al ejecutar
                  </option>
                  <option value="performance">
                    Problemas de rendimiento
                  </option>
                  <option value="complaint">Queja</option>
                  <option value="suggestion">Sugerencia</option>
                </select>

                <button
                  className="feedback-submit-button"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? 'ENVIANDO...' : 'ENVIAR COMENTARIO'}
                </button>

                {feedbackMessage && (
                  <p role="status">{feedbackMessage}</p>
                )}
              </form>

            </div>

            <div className="survey-card">

              <div className="survey-copy">
                <h3>ENCUESTA DE FEEDBACK - UI/UX</h3>

                <p>
                  Cuéntanos cómo te ha parecido los controles, interfaces y
                  botones del juego para mejorar la experiencia de usuario.
                </p>
              </div>

              <a
                className="survey-button"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdtJzTVJzbCghjB6Cg-4SmKqbkjmNlL9s_5_b8qCamOdztICw/viewform?usp=publish-editor"
              >
                <span>IR A LA ENCUESTA</span>
                <span className="survey-arrow" aria-hidden="true">
                  ›
                </span>
              </a>

            </div>

            <div className="survey-card">

              <div className="survey-copy">
                <h3>ENCUESTA DE EXPERIENCIA</h3>

                <p>
                  Cuéntanos cómo te ha funcionado el juego en esta breve encuesta.
                </p>
              </div>

              <a
                className="survey-button"
                href="https://docs.google.com/forms/d/e/1FAIpQLScChD-cC67Cvvu125EsSKWfVErf_3Uy4r9snnKEEswEWj9Smw/viewform?usp=publish-editor"
              >
                <span>IR A LA ENCUESTA</span>
                <span className="survey-arrow" aria-hidden="true">
                  ›
                </span>
              </a>

            </div>

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
  )
}

export default App
