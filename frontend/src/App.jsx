import { useEffect, useState } from "react";
import "./App.css";
import technologies from "./data/technologies";

function App() {
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  useEffect(() => {
    if (selectedTechnology) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTechnology]);

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

            <span className="archive-count">
              {String(technologies.length).padStart(2, "0")} / 100+
            </span>
          </div>

          <div className="technology-grid">
            {technologies.map((technology) => (
              <article
                className="technology-card"
                key={technology.id}
                onClick={() => setSelectedTechnology(technology)}
              >
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

          {selectedTechnology && (
            <div className="technology-detail">
              <button
                className="detail-close"
                onClick={() => setSelectedTechnology(null)}
              >
                ×
              </button>
<div
 className="detail-content">

              <p className="eyebrow">
                {selectedTechnology.status}
              </p>

              <h2>{selectedTechnology.name}</h2>

              <p className="detail-description">
                {selectedTechnology.description}
              </p>

              <div className="detail-info">
                <div>
                  <span>ID</span>
                  <strong>
                    {String(selectedTechnology.id).padStart(2, "0")}
                  </strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>{selectedTechnology.status}</strong>
                </div>

                <div>
                  <span>CATEGORY</span>
                  <strong>{selectedTechnology.category}</strong>
                </div>

                <div>
                  <span>ERA</span>
                  <strong>{selectedTechnology.era}</strong>
                </div>
              </div>

              {selectedTechnology.howItWorked && (
                <div className="detail-section">
                  <h3>HOW IT WORKED</h3>
                  <p>{selectedTechnology.howItWorked}</p>
                </div>
              )}

              {selectedTechnology.whyItDisappeared && (
                <div className="detail-section">
                  <h3>WHY IT DISAPPEARED</h3>
                  <p>{selectedTechnology.whyItDisappeared}</p>
                </div>
              )}

              {selectedTechnology.advantages?.length > 0 && (
                <div className="detail-section">
                  <h3>ADVANTAGES</h3>

                  <ul>
                    {selectedTechnology.advantages.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedTechnology.disadvantages?.length > 0 && (
                <div className="detail-section">
                  <h3>DISADVANTAGES</h3>

                  <ul>
                    {selectedTechnology.disadvantages.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedTechnology.examples?.length > 0 && (
                <div className="detail-section">
                  <h3>EXAMPLES</h3>

                  <ul>
                    {selectedTechnology.examples.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedTechnology.legacy && (
                <div className="detail-section">
                  <h3>LEGACY</h3>
                  <p>{selectedTechnology.legacy}</p>
                </div>
              )}
            </div>
            </div>
          )}
        </section>
      </main>

      <footer className="creator-footer">
        <span>RESEARCHED • DESIGNED • ENGINEERED BY</span>
        <strong>enam78-arch</strong>
        <span>EST. 2026</span>
      </footer>
    </div>
  
  );
}

export default App;