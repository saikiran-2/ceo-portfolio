import { Box, Typography, Button } from "@mui/material";
import { STATS } from "../data";

import "../App.css";

export default function Hero({ scrollTo }) {
  return (
    <section id="About" className="hero-section">
      <div className="container-xl">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="hero-tagline">
              CEO · Investor · Strategic Advisor
            </span>

            <Typography variant="h1" className="hero-name">
              Alexander
              <br />
              Vance
            </Typography>

            <p className="hero-description">
              Building high-growth companies, driving innovation, and creating
              sustainable long-term value through visionary leadership and
              strategic execution.
            </p>

            <div className="row g-3 mb-4 hero-stats-row">
              {STATS.map((s) => (
                <div key={s.label} className="col-auto">
                  <div className="hero-stat-card">
                    <span className="hero-stat-value">{s.value}</span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <Box
              className="hero-ctas"
              sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}
            >
              <Button
                className="hero-btn-primary"
                variant="contained"
                onClick={() => scrollTo("Ventures")}
              >
                View Portfolio
              </Button>
              <Button
                className="hero-btn-outline"
                variant="outlined"
                onClick={() => scrollTo("Contact")}
              >
                Enquire
              </Button>
            </Box>
          </div>

          <div className="col-lg-5 d-flex justify-content-center">
            <div className="hero-photo-wrapper">
              <div className="hero-card-float">
                <div className="hero-photo-card">
                  <img
                    src="/images/ceo.png"
                    alt="Alexander Vance"
                    className="hero-photo-img"
                  />

                  <div className="hero-photo-fade" />

                  <div className="hero-badge">
                    <div className="hero-badge-icon" />
                    <div className="hero-badge-text">
                      <span className="hero-badge-title">Top 100 CEOs</span>
                      <span className="hero-badge-sub">
                        Global Recognition 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
