import {
  Paper,
  Typography,
  Box,
  Avatar,
  Skeleton,
  Alert,
  Button,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import useFetch from "../hooks/useFetch";
import { fetchTestimonials } from "../api";

function TestimonialSkeleton() {
  return (
    <div className="col-lg-6 col-md-10">
      <Paper
        elevation={0}
        sx={{ border: "1px solid #e8e4dc", borderRadius: "16px", p: 4 }}
      >
        <Skeleton variant="circular" width={44} height={44} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="80%" height={16} sx={{ mb: 3 }} />
        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
          <Skeleton variant="circular" width={46} height={46} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width="50%" height={16} />
            <Skeleton variant="text" width="70%" height={13} />
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default function Testimonials() {
  const { data: testimonials, loading, error } = useFetch(fetchTestimonials);

  return (
    <section
      style={{
        padding: "80px 0",
        background: "#fff",
        borderTop: "1px solid #e8e4dc",
      }}
    >
      <div className="container-xl">
        <div className="text-center mb-5">
          <span className="section-label d-block text-center">
            People &amp; Testimonials
          </span>
          <Typography
            className="playfair"
            variant="h2"
            sx={{
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            What Leaders Say
          </Typography>
        </div>

        {error && (
          <Box className="row justify-content-center mb-4">
            <Box className="col-lg-6 text-center">
              <Alert severity="error" sx={{ borderRadius: "10px", mb: 2 }}>
                {error}
              </Alert>
              <Button
                onClick={() => window.location.reload()}
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "#1a1a1a",
                  color: "#1a1a1a",
                  textTransform: "none",
                  borderRadius: "8px",
                }}
              >
                Retry
              </Button>
            </Box>
          </Box>
        )}

        <div className="row g-4 justify-content-center">
          {loading && [1, 2].map((i) => <TestimonialSkeleton key={i} />)}

          {!loading &&
            !error &&
            testimonials &&
            testimonials.map((t) => (
              <div key={t.id} className="col-lg-6 col-md-10">
                <Paper
                  elevation={0}
                  className="testi-card h-100"
                  sx={{
                    border: "1px solid #e8e4dc",
                    borderRadius: "16px",
                    p: 4,
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <FormatQuoteIcon
                      sx={{
                        fontSize: 48,
                        color: "#c8a96e",
                        mb: 1,
                        display: "block",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: 15,
                        color: "#444",
                        lineHeight: 1.9,
                        fontStyle: "italic",
                        mb: 3,
                      }}
                    >
                      {t.quote}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46,
                        background: "#1a1a1a",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#c8a96e",
                      }}
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}
                      >
                        {t.name}
                      </Typography>
                      <Typography sx={{ fontSize: 12, color: "#888", mt: 0.2 }}>
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
