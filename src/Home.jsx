import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";

function Home() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column", lg: "row", xl: "row" }, // Στήλη για μικρές οθόνες και γραμμή για μεγαλύτερες
        justifyContent: { xs: "flex-start", md: "flex-start", lg: "center" }, // Στοίχιση στο κέντρο
        alignItems: "center", // Στοίχιση στο κέντρο
        height: "100vh", // Καταλαμβάνει όλο το ύψος της οθόνης
        padding: "2rem",
        gap: { xs: "2rem", md: "10rem" }, // Αποστάσεις μεταξύ των στοιχείων
        marginTop: { xs: '2rem', md: "2rem", lg: "0" },
        zIndex: 1,
      }}
    >
      {/* Text and Button Section */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          height: { xs: "50%", md: "100%" }, // Στις μικρές οθόνες να καταλαμβάνει το μισό ύψος
          marginBlockEnd: "8rem"
        }}
      >
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            fontSize: "2.2rem",
            fontWeight: 520,
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          <span
            style={{
              fontSize: "2rem",
              color: "#bdbbbb",
              marginBottom: "0.5rem",
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'  
            }}
          >
            {t("intro")}
          </span>{" "}
          <span
            style={{
              fontSize: "3rem",
              color: "#f734f7",
              marginBottom: "1rem",
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'  
            }}
          >
            {t("name")}
          </span>
        </motion.h1>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'  
          }}
        >
          <motion.p
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              fontSize: "1.25rem",
              color: "#bdbbbb",
            }}
          >
            {t("role")}
          </motion.p>
          <a
            href="https://www.credly.com/badges/c60fe4b7-bfa2-4082-a37d-42c25731e54a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
            }}
          >
            <img
              src="/full-stack-python-developer-certification (2).png"
              alt="Certification Badge"
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "4px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                marginBottom:"1rem",
              }}
            />
          </a>
        </Box>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                padding: "0.5rem 1.5rem",
                backgroundColor: "#f734f7",
                color: "#ffffff",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: 500,
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  backgroundColor: "#720b78",
                },
              }}
            >
              {t("aboutMeButton")}
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "50%", md: "100%" }, // Στις μικρές οθόνες να καταλαμβάνει το μισό ύψος
        }}
      >
        <img
          src="/IMG_3733.png"
          alt="Katerina Mazi"
          style={{
            borderRadius: "10%",
            width: "100%", // Μεγαλύτερη εικόνα στις μικρές οθόνες
            maxWidth: "300px",
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.8))",
          }}
        />
      </motion.div>
    </Box>
  );
}

export default Home;
