import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Εισαγωγή του useTranslation για αλλαγή γλώσσας
import './Menu.css';

function Menu() {
  const { t, i18n } = useTranslation(); // Χρησιμοποιούμε το i18n και το t για να πάρουμε τις μεταφράσεις

  // Συνάρτηση για την αλλαγή της γλώσσας
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Αλλαγή γλώσσας
  };

  return (
    <nav className="nav-menu">
      <ul className="nav-list-menu">
        <li><Link className="nav-link-menu" to="/">{t('menuHome')}</Link></li>
        <li><Link className="nav-link-menu" to="/technicalStack">{t('menuTechnicalStack')}</Link></li>
        <li><Link className="nav-link-menu" to="/projects">{t('menuProjects')}</Link></li>
        <li><Link className="nav-link-menu" to="/skills">{t('menuSkills')}</Link></li>
      </ul>

      {/* Επιλογή Γλώσσας */}
      <div className="language-switcher-menu">
        <button onClick={() => handleLanguageChange('en')}>EN</button>
        <button onClick={() => handleLanguageChange('gr')}>GR</button>
      </div>

      <div className="social-icons-menu">
        <a className="social-link-menu" href="https://www.linkedin.com/in/katerina-mazi/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size="1.5em" />
        </a>
        <a className="social-link-menu" href="https://github.com/KaterinaMazi" target="_blank" rel="noopener noreferrer">
          <FaGithub size="1.5em" />
        </a>
        <a className="social-link-menu" href="mailto:katerinaaliki1989@gmail.com">
          <FaEnvelope size="1.5em" />
        </a>
      </div>
    </nav>
  );
}

export default Menu;
