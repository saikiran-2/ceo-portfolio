import { Paper, Typography, Chip } from "@mui/material";
import { VENTURES } from "../data";

export default function Ventures() {
  return (
    <section
      id="Ventures"
      style={{
        padding: "80px 0",
        background: "#fff",
        borderTop: "1px solid #e8e4dc",
      }}
    >
      <div className="container-xl">
        <div className="mb-5 text-center">
          <span className="section-label">Portfolio</span>
          <Typography
            className="playfair"
            variant="h2"
            sx={{
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            Current Ventures
          </Typography>
        </div>

        <div className="row g-4">
          {VENTURES.map((v) => (
            <div key={v.name} className="col-lg-4 col-md-6">
              <Paper
                elevation={0}
                className="card-dark-hover h-100"
                sx={{
                  border: "1px solid #e8e4dc",
                  borderRadius: "14px",
                  p: 3.5,
                  background: "#fff",
                  cursor: "default",
                }}
              >
                <Chip
                  label={v.type}
                  size="small"
                  variant="outlined"
                  sx={{
                    mb: 2.5,
                    fontSize: 11,
                    fontWeight: 600,
                    borderColor: "#e8e4dc",
                    color: "#666",
                    background: "#f5f2ec",
                  }}
                />
                <Typography
                  className="playfair venture-name"
                  sx={{
                    fontSize: 22,
                    fontWeight: 700,
                    mb: 0.8,
                    color: "#1a1a1a",
                  }}
                >
                  {v.name}
                </Typography>
                <Typography
                  className="venture-role"
                  sx={{
                    fontSize: 13,
                    color: "#888",
                    fontWeight: 600,
                    mb: 1.5,
                    letterSpacing: "0.04em",
                    transition: "color 0.35s",
                  }}
                >
                  {v.role}
                </Typography>
                <Typography
                  className="venture-desc"
                  sx={{
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.75,
                    transition: "color 0.35s",
                  }}
                >
                  {v.desc}
                </Typography>
              </Paper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
