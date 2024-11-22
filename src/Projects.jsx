import React from 'react';
import { useTranslation } from 'react-i18next';
import './projects.css';

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="container-projects">
      <div className="section-projects">
        <h2 className="section-title-projects bullet-point">{t("projectsTitle")}</h2>

        <div className="cards-container-projects">
          <div className="card-projects">
            <div className="left-section-projects">
              {/* Left Section: Description */}
              <div className="description-projects">
                <p>{t("ourEventDescription")}</p>
              </div>

              {/* Backend Section */}
              <div className="description-projects">
                <h4 dangerouslySetInnerHTML={{ __html: t("backendSectionTitle") }}></h4>
                <p dangerouslySetInnerHTML={{ __html: t("backendFeatures") }}></p>
              </div>

              {/* Frontend Section */}
              <div className="description-projects">
                <h4 dangerouslySetInnerHTML={{ __html: t("frontendSectionTitle") }}></h4>
                <p dangerouslySetInnerHTML={{ __html: t("frontendFeatures") }}></p>
              </div>

              {/* Admin Panel Section */}
              <div className="description-projects">
                <p>{t("adminPanelDescription")}</p>
              </div>
            </div>

            <div className="right-section-projects">
              <div className="icon-section-projects">
                <a
                  href="https://github.com/KaterinaMazi/OurEvents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-projects"
                >
                  <div className="icon-with-text">
                    <div className="icon-projects">💻</div>
                    <span>{t("viewCode")}</span>
                  </div>
                </a>

                <a
                  href="https://our-events.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-projects"
                >
                  <div className="icon-with-text">
                    <div className="icon-projects">🌐</div>
                    <span>{t("viewLiveSite")}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
