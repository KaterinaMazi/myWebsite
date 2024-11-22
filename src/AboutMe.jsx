import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="about-container-aboutMe">
      <div className="text-section-aboutMe">
        <h2 className="title-aboutMe">{t("aboutTitle")}</h2>
        <p className="paragraph-aboutMe">
          {t("aboutParagraph")}
        </p>
        <a className="cv-button-aboutMe" href="/KaterinaMazi_CV.pdf" target="_blank" rel="noopener noreferrer">
          {t("cvButton")}
        </a>
      </div>
      <div className="image-section-aboutMe">
        <img className="image-aboutMe" src="/laptop.png" alt="About Me" />
      </div>
    </div>
  );
}

export default AboutMe;
