import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Typography } from "@mui/material";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for larger screens
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "2rem 1rem"}, // Adjust padding for mobile
        background: "linear-gradient(135deg, #3e434f, #5b585c)",
        color: "#e5e7eb",
        boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.5)",
        borderRadius: "15px",
        border: "2px solid rgba(247, 52, 247, 0.4)",
        margin: "2rem auto",
        maxWidth: "1200px",
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "55%" }, // Full width on mobile
          padding: { xs: "1rem 0", md: "1.5rem" }, // Adjust padding for mobile
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#f734f7",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            margin: "2rem",
            textAlign: { xs: "center", md: "left" }, // Center text on mobile
          }}
        >
          {t("aboutTitle")}
        </Typography>
        <Typography
          variant="p"
          sx={{
            lineHeight: 1.8,
            color: "#d1d5db",
            textAlign: { xs: "center", md: "left" }, // Center text on mobile
          }}
        >
          {t("aboutParagraph")}
        </Typography>
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" }, // Center button on mobile
          }}
        >
          <Button
            variant="a"
            href="/KaterinaMazi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "#f734f7",
              color: "#ffffff",
              padding: "0.6rem 1.8rem",
              margin: "2rem",
              borderRadius: "12px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
              "&:hover": {
                backgroundColor: "#720b78",
                transform: "scale(1.05)",
              },
            }}
          >
            {t("cvButton")}
          </Button>
        </Box>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "40%", lg:"30%" }, // Full width on mobile
          textAlign: "center",
        }}
      >
        <img
          src="/laptop.png"
          alt="About Me"
          style={{
            borderRadius: "12px",
            width: "80%",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0px 8px 25px rgba(0, 0, 0, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.3)";
          }}
        />
      </Box>
    </Box>
  );
}

export default AboutMe;
