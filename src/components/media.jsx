import { Paper, Typography, Box, Skeleton, Alert, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useFetch from "../hooks/useFetch";
import { fetchMedia } from "../api";

function MediaSkeleton() {
  return (
    <div className="col-lg-4 col-md-6">
      <Paper
        elevation={0}
        sx={{ border: "1px solid #e8e4dc", borderRadius: "12px", p: 3 }}
      >
        <Skeleton variant="text" width="45%" height={13} sx={{ mb: 1.5 }} />
        <Skeleton variant="text" width="100%" height={18} />
        <Skeleton variant="text" width="90%" height={18} />
        <Skeleton variant="text" width="70%" height={18} sx={{ mb: 2 }} />
        <Skeleton variant="circular" width={22} height={22} />
      </Paper>
    </div>
  );
}

export default function Media() {
  const { data: articles, loading, error } = useFetch(fetchMedia);

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
            Media Features &amp; Consulting
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
            Featured In
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
          {loading && [1, 2, 3].map((i) => <MediaSkeleton key={i} />)}

          {!loading &&
            !error &&
            articles &&
            articles.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <Paper
                  elevation={0}
                  className="media-hover h-100"
                  sx={{
                    border: "1px solid #e8e4dc",
                    borderRadius: "12px",
                    p: 3,
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    item.url !== "#" && window.open(item.url, "_blank")
                  }
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#c8a96e",
                        mb: 1.5,
                      }}
                    >
                      {item.source} · {item.date}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 600,
                        lineHeight: 1.6,
                        color: "#1a1a1a",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <ArrowForwardIcon
                    className="media-arrow"
                    sx={{ mt: 2.5, fontSize: 20 }}
                  />
                </Paper>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
