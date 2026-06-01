import { Paper, Typography, Skeleton, Box, Alert, Button } from "@mui/material";
import useFetch from "../hooks/useFetch";
import { fetchAwards } from "../api";

function AwardSkeleton() {
  return (
    <div className="col-lg-4 col-md-6">
      <Paper
        elevation={0}
        sx={{ border: "1px solid #e8e4dc", borderRadius: "14px", p: 3.5 }}
      >
        <Skeleton variant="circular" width={36} height={36} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="60%" height={14} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="80%" height={22} sx={{ mb: 1.5 }} />
        <Skeleton
          variant="rectangular"
          height={60}
          sx={{ borderRadius: "6px" }}
        />
      </Paper>
    </div>
  );
}

export default function Awards() {
  const { data: awards, loading, error } = useFetch(fetchAwards);

  return (
    <section id="Awards" style={{ padding: "80px 0", background: "#fafaf8" }}>
      <div className="container-xl">
        <div className="text-center mb-5">
          <span className="section-label d-block text-center">Recognition</span>
          <Typography
            className="playfair"
            variant="h2"
            sx={{
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            Global Distinctions
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

        <div className="row g-4">
          {loading && [1, 2, 3].map((i) => <AwardSkeleton key={i} />)}

          {!loading &&
            !error &&
            awards &&
            awards.map((award) => (
              <div key={award.id} className="col-lg-4 col-md-6">
                <Paper
                  elevation={0}
                  className="award-hover h-100"
                  sx={{
                    border: "1px solid #e8e4dc",
                    borderRadius: "14px",
                    p: 3.5,
                    background: "#fff",
                  }}
                >
                  <Typography sx={{ fontSize: 32, mb: 2, lineHeight: 1 }}>
                    {award.icon}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#c8a96e",
                      mb: 1,
                    }}
                  >
                    {award.org} · {award.year}
                  </Typography>
                  <Typography
                    className="playfair"
                    sx={{
                      fontSize: 20,
                      fontWeight: 700,
                      mb: 1.5,
                      color: "#1a1a1a",
                    }}
                  >
                    {award.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, color: "#666", lineHeight: 1.75 }}
                  >
                    {award.desc}
                  </Typography>
                </Paper>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
