import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark">✦</span>
          <span>CAR TECHNOLOGY GRAVEYARD</span>
        </div>

        <div className="nav-links">
          <a href="#technologies">Technologies</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">AUTOMOTIVE ARCHIVE / 001</p>

            <h1>
              TECHNOLOGIES
              <br />
              <span>THAT DISAPPEARED.</span>
            </h1>

            <p className="hero-description">
              Explore the engineering ideas, mechanical systems, and
              automotive technologies that once shaped the road — and
              eventually vanished.
            </p>

            <button className="explore-button">
              Explore the Graveyard
              <span>→</span>
            </button>
          </div>

          <div className="hero-decoration">
            <div className="circle circle-large"></div>
            <div className="circle circle-medium"></div>
            <div className="circle circle-small"></div>
            <span className="decoration-text">EST. 2026</span>
          </div>
        </section>

        <section className="featured" id="technologies">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE ARCHIVE</p>
              <h2>Featured Technologies</h2>
            </div>

            <span className="archive-count">04 / 100+</span>
          </div>

          <div className="technology-grid">
            <article className="technology-card">
              <span className="card-number">01</span>
              <div>
                <p className="card-status">EXTINCT</p>
                <h3>Pop-Up Headlights</h3>
                <p>
                  Retractable headlights that became an icon of automotive
                  design.
                </p>
              </div>
              <span className="card-arrow">↗</span>
            </article>

            <article className="technology-card">
              <span className="card-number">02</span>
              <div>
                <p className="card-status">ENDANGERED</p>
                <h3>Rotary Engines</h3>
                <p>
                  A radically different approach to creating combustion power.
                </p>
              </div>
              <span className="card-arrow">↗</span>
            </article>

            <article className="technology-card">
              <span className="card-number">03</span>
              <div>
                <p className="card-status">RARE</p>
                <h3>Hydraulic Steering</h3>
                <p>
                  Mechanical assistance that once defined the feel of the road.
                </p>
              </div>
              <span className="card-arrow">↗</span>
            </article>

            <article className="technology-card">
              <span className="card-number">04</span>
              <div>
                <p className="card-status">DISAPPEARING</p>
                <h3>Manual Gearboxes</h3>
                <p>
                  The driver's direct connection to the machinery beneath.
                </p>
              </div>
              <span className="card-arrow">↗</span>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;