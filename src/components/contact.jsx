import { useRef, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Alert,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import { EMAILJS_ENDPOINT } from "../api";

// Replace with your EmailJS credentials
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontFamily: "'DM Sans',sans-serif",
    fontSize: 14,
    background: "#fafaf8",
    "& fieldset": { borderColor: "#e8e4dc", borderWidth: "1.5px" },
    "&:hover fieldset": { borderColor: "#1a1a1a" },
    "&.Mui-focused fieldset": { borderColor: "#1a1a1a", borderWidth: "1.5px" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'DM Sans',sans-serif",
    fontSize: 13,
    color: "#aaa",
    "&.Mui-focused": { color: "#1a1a1a" },
  },
  "& .MuiFormHelperText-root": {
    fontFamily: "'DM Sans',sans-serif",
    fontSize: 11,
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    msg: "",
    severity: "success",
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validate: (v) => {
      const e = {};
      if (!v.name) e.name = "Name is required";
      if (!v.email) e.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(v.email)) e.email = "Invalid email address";
      if (!v.message) e.message = "Message is required";
      return e;
    },
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        //Axios POST to EmailJS REST API
        await axios.post(
          EMAILJS_ENDPOINT,
          {
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: {
              from_name: values.name,
              from_email: values.email,
              subject: values.subject || "(no subject)",
              message: values.message,
            },
          },
          { headers: { "Content-Type": "application/json" } },
        );
        setSnack({
          open: true,
          msg: `Message sent! Thanks, ${values.name}.`,
          severity: "success",
        });
        resetForm();
      } catch (err) {
        console.log("FULL ERROR:", err);
        console.log("RESPONSE:", err.response);
        console.log("DATA:", err.response?.data);

        setSnack({
          open: true,
          msg: JSON.stringify(err.response?.data || err.message),
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section
      id="Contact"
      style={{
        padding: "80px 0",
        background: "#fafaf8",
        borderTop: "1px solid #e8e4dc",
      }}
    >
      <div className="container-xl">
        <div className="row g-5 align-items-start">
          <div className="col-lg-4">
            <span className="section-label">Let's Connect</span>
            <Typography
              className="playfair"
              variant="h2"
              sx={{
                fontSize: "clamp(26px,3.5vw,40px)",
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              sx={{ fontSize: 15, color: "#555", lineHeight: 1.85, mb: 4 }}
            >
              Whether you are looking to partner on a venture, explore
              investment opportunities, or book a keynote — I'd love to hear
              from you.
            </Typography>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
            >
              {[
                {
                  icon: <EmailIcon sx={{ fontSize: 20, color: "#c8a96e" }} />,
                  text: "hello@alexandervance.com",
                },
                {
                  icon: (
                    <LocationOnIcon sx={{ fontSize: 20, color: "#c8a96e" }} />
                  ),
                  text: "San Francisco · Dubai",
                },
              ].map((row) => (
                <Box
                  key={row.text}
                  sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                >
                  {row.icon}
                  <Typography sx={{ fontSize: 14, color: "#555" }}>
                    {row.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                {
                  icon: <LinkedInIcon />,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
                {
                  icon: <TwitterIcon />,
                  label: "Twitter",
                  href: "https://twitter.com",
                },
                {
                  icon: <InstagramIcon />,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
              ].map((s) => (
                <IconButton
                  key={s.label}
                  aria-label={s.label}
                  onClick={() => window.open(s.href, "_blank")}
                  sx={{
                    width: 42,
                    height: 42,
                    background: "#1a1a1a",
                    color: "#fff",
                    borderRadius: "50%",
                    "&:hover": {
                      background: "#c8a96e",
                      color: "#1a1a1a",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </div>

          <div className="col-lg-8">
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #e8e4dc",
                borderRadius: "16px",
                p: { xs: 3, md: 4.5 },
                background: "#fff",
              }}
            >
              <form onSubmit={formik.handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      sx={fieldSx}
                    />
                  </div>

                  <div className="col-md-6">
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      sx={fieldSx}
                    />
                  </div>

                  <div className="col-12">
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      placeholder="Partnership · Speaking · Investment"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      sx={fieldSx}
                    />
                  </div>

                  <div className="col-12">
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      label="Message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.message && Boolean(formik.errors.message)
                      }
                      helperText={
                        formik.touched.message && formik.errors.message
                      }
                      sx={{ ...fieldSx, "& textarea": { resize: "vertical" } }}
                    />
                  </div>

                  <div className="col-12">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={loading}
                      endIcon={
                        loading ? (
                          <CircularProgress size={16} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      sx={{
                        background: "#1a1a1a",
                        color: "#fff",
                        borderRadius: "10px",
                        py: 1.8,
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: "none",
                        fontFamily: "'DM Sans',sans-serif",
                        boxShadow: "none",
                        "&:hover": {
                          background: "#c8a96e",
                          color: "#1a1a1a",
                          boxShadow: "none",
                        },
                        "&.Mui-disabled": { background: "#ddd", color: "#999" },
                        transition: "all 0.25s",
                      }}
                    >
                      {loading ? "Sending…" : "Send Message"}
                    </Button>
                  </div>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      </div>

      <Snackbar
        open={snack.open}
        autoHideDuration={4500}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snack.severity}
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          sx={{ borderRadius: "10px", fontFamily: "'DM Sans',sans-serif" }}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </section>
  );
}
