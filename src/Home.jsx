import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Home.css";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="home-container-home">
      <motion.div
        className="text-section-home"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <motion.h1
          className="title-home"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        >
          <span className="intro-text-home">{t("intro")}</span>{" "}
          <span className="name-text-home">{t("name")}</span>
        </motion.h1>

        <div className="info-container-home">
          <motion.p
            className="info-text-home"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          >
            {t("role")}
          </motion.p>
          <a
            href="https://www.credly.com/badges/c60fe4b7-bfa2-4082-a37d-42c25731e54a"
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link-home"
          >
            <img
              src="/full-stack-python-developer-certification (2).png"
              alt="Certification Badge"
              className="certification-image-home"
            />
          </a>
        </div>

        <motion.div
          className="button-container-home"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1.5,
          }}
        >
          <Link to="/about" className="button-home">
            {t("aboutMeButton")}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="image-section-home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      >
        <img
          className="image-home"
          src="/IMG_3733.png"
          alt="Katerina Mazi"
        />
      </motion.div>
    </div>
  );
}

export default Home;
