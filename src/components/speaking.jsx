import { Typography, Button, Box } from "@mui/material";
import { SPEAKING } from "../data";

export default function Speaking({ scrollTo }) {
  return (
    <section
      id="Speaking"
      style={{
        padding: "80px 0",
        background: "#fafaf8",
        borderTop: "1px solid #e8e4dc",
      }}
    >
      <div className="container-xl">
        <Box
          sx={{
            background: "#111",
            borderRadius: "20px",
            p: { xs: "40px 24px", md: "64px" },
          }}
        >
          <div className="row align-items-center g-5">
            
            <div className="col-lg-7">
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#c8a96e",
                  mb: 1,
                }}
              >
                Stage
              </Typography>
              <Typography
                className="playfair"
                sx={{
                  fontSize: { xs: 28, md: 38 },
                  fontWeight: 700,
                  color: "#fff",
                  mb: 4,
                }}
              >
                Keynote Speaking
              </Typography>

              {SPEAKING.map((item, i) => (
                <Box
                  key={item.title}
                  className="speaking-row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    py: 1.8,
                    px: 1.5,
                    borderBottom:
                      i < SPEAKING.length - 1 ? "1px solid #2a2a2a" : "none",
                  }}
                >
                  <Box
                    className="speaking-dot"
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#c8a96e",
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{ fontSize: 15, fontWeight: 600, color: "#fff" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "#666", mt: 0.3 }}>
                      {item.event}
                    </Typography>
                  </Box>
                </Box>
              ))}

              <Button
                variant="contained"
                onClick={() => scrollTo("Contact")}
                sx={{
                  mt: 4,
                  background: "#c8a96e",
                  color: "#1a1a1a",
                  borderRadius: "10px",
                  px: 4,
                  py: 1.5,
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "none",
                  fontFamily: "'DM Sans',sans-serif",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#fff",
                    color: "#1a1a1a",
                    boxShadow: "none",
                  },
                  transition: "all 0.25s",
                }}
              >
                Book a Speaking Slot
              </Button>
            </div>

            {/* Right TED visual */}
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  className="playfair"
                  sx={{
                    fontSize: { xs: 64, md: 88 },
                    fontWeight: 700,
                    color: "#c8a96e",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  TED
                </Typography>
                <Typography
                  sx={{
                    fontSize: 20,
                    color: "#333",
                    letterSpacing: "0.4em",
                    fontWeight: 600,
                    mt: 0.5,
                  }}
                >
                  ×WW
                </Typography>
              </Box>
            </div>
          </div>
        </Box>
      </div>
    </section>
  );
}
