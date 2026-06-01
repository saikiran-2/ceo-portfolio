import { Typography, Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NAV_LINKS } from "../data";

export default function Footer({ scrollTo }) {
  return (
    <footer
      style={{
        background: "#111",
        borderTop: "1px solid #222",
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <div className="container-xl">
        <div
          className="row align-items-start g-4 pb-4"
          style={{ borderBottom: "1px solid #222" }}
        >
          <div className="col-lg-4">
            <Typography
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                fontFamily: "'Playfair Display',serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#fff",
                cursor: "pointer",
                mb: 1.5,
                "&:hover": { color: "#c8a96e" },
                transition: "color 0.2s",
              }}
            >
              Alexander Vance
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                color: "#555",
                lineHeight: 1.7,
                maxWidth: 260,
              }}
            >
              Building high-growth companies, fostering transformational
              innovation, and creating long-term value for the global economy.
            </Typography>
          </div>

          <div className="col-lg-4">
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c8a96e",
                mb: 2,
              }}
            >
              Navigation
            </Typography>
            <div className="row g-1">
              {NAV_LINKS.map((link) => (
                <div key={link} className="col-6">
                  <Typography
                    onClick={() => scrollTo(link)}
                    sx={{
                      fontSize: 13,
                      color: "#666",
                      cursor: "pointer",
                      py: 0.4,
                      "&:hover": { color: "#c8a96e" },
                      transition: "color 0.2s",
                    }}
                  >
                    {link}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c8a96e",
                mb: 2,
              }}
            >
              Connect
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#666", mb: 0.8 }}>
              hello@alexandervance.com
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#666", mb: 2.5 }}>
              San Francisco · Dubai
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                {
                  icon: <LinkedInIcon sx={{ fontSize: 18 }} />,
                  label: "LinkedIn",
                },
                {
                  icon: <TwitterIcon sx={{ fontSize: 18 }} />,
                  label: "Twitter",
                },
                {
                  icon: <InstagramIcon sx={{ fontSize: 18 }} />,
                  label: "Instagram",
                },
              ].map((s) => (
                <IconButton
                  key={s.label}
                  aria-label={s.label}
                  size="small"
                  sx={{
                    width: 36,
                    height: 36,
                    background: "#1e1e1e",
                    color: "#666",
                    border: "1px solid #2a2a2a",
                    borderRadius: "8px",
                    "&:hover": {
                      background: "#c8a96e",
                      color: "#1a1a1a",
                      borderColor: "#c8a96e",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </div>
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: 12, color: "#444" }}>
            © {new Date().getFullYear()} Alexander Vance. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#444" }}>
            Built with React · Bootstrap · MUI
          </Typography>
        </Box>
      </div>
    </footer>
  );
}
