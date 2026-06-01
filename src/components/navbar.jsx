import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NAV_LINKS } from "../data";

export default function Navbar({ scrollTo, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // SAFE CLOSE (fixes aria-hidden + focus issue)
  const closeDrawer = (event) => {
    event?.currentTarget?.blur(); // blur clicked element if any
    document.activeElement?.blur(); // remove leftover focus
    setDrawerOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    scrollTo(link);
    closeDrawer();
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? "rgba(250,250,248,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #e8e4dc" : "none",
          transition: "all 0.3s ease",
          boxShadow: "none",
        }}
      >
        <div className="container-xl">
          <Toolbar
            disableGutters
            sx={{
              py: 0.5,
              justifyContent: "space-between",
              minHeight: "64px !important",
            }}
          >
            {/* Logo */}
            <Typography
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: 16, md: 19 },
                color: "#1a1a1a",
                cursor: "pointer",
                "&:hover": { color: "#c8a96e" },
              }}
            >
              Alexander Vance
            </Typography>

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Button
                  key={link}
                  onClick={() => handleNav(link)}
                  disableRipple
                  sx={{
                    borderRadius: "20px",
                    px: 2,
                    py: 0.8,
                    fontSize: 13,
                    fontWeight: 500,
                    textTransform: "none",
                    color: activeSection === link ? "#fff" : "#555",
                    background:
                      activeSection === link ? "#1a1a1a" : "transparent",
                    fontFamily: "'DM Sans', sans-serif",
                    "&:hover": {
                      background: "#1a1a1a",
                      color: "#fff",
                    },
                  }}
                >
                  {link}
                </Button>
              ))}
            </Box>

            {/* Desktop CTA */}
            <Button
              onClick={() => handleNav("Contact")}
              sx={{
                display: { xs: "none", md: "flex" },
                background: "#1a1a1a",
                color: "#fff",
                borderRadius: "10px",
                px: 2.5,
                py: 1,
                fontSize: 13,
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  background: "#c8a96e",
                  color: "#1a1a1a",
                },
              }}
            >
              Get in Touch
            </Button>

            {/* Mobile Menu */}
            <IconButton
              onClick={(e) => {
                e.currentTarget.blur();
                setDrawerOpen(true);
              }}
              sx={{ display: { xs: "flex", md: "none" }, color: "#1a1a1a" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </div>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        disableRestoreFocus
        slotProps={{
          paper: {
            sx: {
              width: 260,
              p: 3,
              background: "#fafaf8",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Alexander Vance
          </Typography>

          <IconButton onClick={closeDrawer} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <List disablePadding>
          {NAV_LINKS.map((link) => (
            <ListItem
              key={link}
              onClick={() => handleNav(link)}
              sx={{
                borderRadius: "8px",
                mb: 0.5,
                cursor: "pointer",
                background: activeSection === link ? "#1a1a1a" : "transparent",
                "&:hover": {
                  background: activeSection === link ? "#1a1a1a" : "#f0ede6",
                },
              }}
            >
              <ListItemText
                primary={link}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: 14,
                    fontWeight: 600,
                    color: activeSection === link ? "#fff" : "#333",
                    fontFamily: "'DM Sans', sans-serif",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Button
          fullWidth
          onClick={() => handleNav("Contact")}
          sx={{
            mt: 3,
            background: "#1a1a1a",
            color: "#fff",
            borderRadius: "10px",
            py: 1.4,
            fontSize: 14,
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              background: "#c8a96e",
              color: "#1a1a1a",
            },
          }}
        >
          Get in Touch
        </Button>
      </Drawer>
    </>
  );
}
