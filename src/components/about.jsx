import { Typography, Divider } from "@mui/material";

export default function About() {
  return (
    <section
      style={{
        background: "#fff",
        borderTop: "1px solid #e8e4dc",
        borderBottom: "1px solid #e8e4dc",
      }}
    >
      <div className="container-xl py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <span className="section-label d-block text-center">About</span>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 19 },
                lineHeight: 1.9,
                color: "#444",
                fontStyle: "italic",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Alexander bridges the gap between corporate growth at scale and
              startup agility. With over a decade of high-stakes leadership, his
              work consistently produces breakthroughs that drive exponential
              growth and create long-term global value.
            </Typography>
            <Divider
              sx={{
                mt: 4,
                mx: "auto",
                width: 60,
                borderWidth: 2,
                borderColor: "#c8a96e",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
