import "./App.css";
import technologies from "./data/technologies";
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
            {technologies.map((technology) => (
  <article className="technology-card" key={technology.id}>
    <span className="card-number">
      {String(technology.id).padStart(2, "0")}
    </span>

    <div>
      <p className="card-status">{technology.status}</p>
      <h3>{technology.name}</h3>
      <p>{technology.description}</p>
    </div>

    <span className="card-arrow">→</span>
  </article>
))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;