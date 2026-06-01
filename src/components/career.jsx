import { Typography, Chip, Box } from "@mui/material";
import { CAREER } from "../data";

export default function Career() {
  return (
    <section
      id="Career"
      style={{
        padding: "80px 0",
        background: "#fafaf8",
        borderTop: "1px solid #e8e4dc",
      }}
    >
      <div className="container-xl">
        <div className="mb-5 text-center">
          <span className="section-label">Career Milestones</span>
          <Typography
            className="playfair"
            variant="h2"
            sx={{
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            Journey
          </Typography>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {CAREER.map((item, i) => (
              <Box
                key={item.company}
                className="career-row"
                sx={{
                  display: "flex",
                  gap: { xs: "16px", md: "28px" },
                  py: 3.5,
                  px: 2,
                  borderBottom:
                    i < CAREER.length - 1 ? "1px solid #e8e4dc" : "none",
                  alignItems: "flex-start",
                }}
              >
                {/* Period */}
                <Box
                  sx={{ width: { xs: 80, md: 110 }, flexShrink: 0, pt: 0.4 }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#c8a96e",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.period}
                  </Typography>
                </Box>

                {/* Dot */}
                <Box
                  className="timeline-dot"
                  sx={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#c8a96e",
                    flexShrink: 0,
                    mt: 0.6,
                  }}
                />

                {/* Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: 700,
                      mb: 1,
                      color: "#1a1a1a",
                    }}
                  >
                    {item.company}
                  </Typography>
                  {item.tags.length > 0 && (
                    <Box
                      sx={{
                        mb: 1.2,
                        display: "flex",
                        gap: 0.8,
                        flexWrap: "wrap",
                      }}
                    >
                      {item.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: 11,
                            borderColor: "#e8e4dc",
                            color: "#666",
                            background: "#f5f2ec",
                          }}
                        />
                      ))}
                    </Box>
                  )}
                  <Typography
                    sx={{ fontSize: 14, color: "#555", lineHeight: 1.78 }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
