import React from 'react';
import { useTranslation } from 'react-i18next';
import './TechnicalStack.css';

function TechnicalStack() {
  const { t } = useTranslation();

  return (
    <div className="container-technicalStack">
      <div className="card-technicalStack">
        <h3>{t("backendTitle")}</h3>
        <div className="logo-container-technicalStack">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" className="logo-technicalStack" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL Logo" className="logo-technicalStack" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" alt="Django Logo" className="logo-technicalStack" />
        </div>
        <p>{t("backendDescription")}</p>
      </div>

      <div className="card-technicalStack">
        <h3>{t("frontendTitle")}</h3>
        <div className="logo-container-technicalStack">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" className="logo-technicalStack" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo" className="logo-technicalStack" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo" className="logo-technicalStack" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" className="logo-technicalStack" />
        </div>
        <p>{t("frontendDescription")}</p>
      </div>

      <div className="card-technicalStack">
        <h3>{t("toolsTitle")}</h3>
        <div className="logo-container-technicalStack">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git Logo" className="logo-technicalStack" />
          <img src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="GitHub Logo" className="logo-technicalStack" />
        </div>
        <p>{t("toolsDescription")}</p>
      </div>
    </div>
  );
}

export default TechnicalStack;
