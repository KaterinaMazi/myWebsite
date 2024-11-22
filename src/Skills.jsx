import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegLightbulb, FaUsers, FaChalkboardTeacher, FaClock, FaGraduationCap } from 'react-icons/fa';
import { SiJavascript, SiReact, SiMysql, SiGit, SiDjango } from 'react-icons/si';
import './Skills.css';

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="container-skills"> 

      {/* Technical Skills Section */}
      <div className="section-skills">
        <h2 className="section-title-skills">{t("technicalSkillsTitle")}</h2>
        <div className="cards-container-skills">
          <div className="card-skills">
            <SiJavascript className="icon-skills" style={{ color: "#F7DF1E" }} />
            <h3>{t("languages")}</h3>
            <p className="card-paragraph-skills">{t("languagesDescription")}</p>
          </div>

          <div className="card-skills">
            <SiReact className="icon-skills" style={{ color: "#61DAFB" }} />
            <h3>{t("frameworks")}</h3>
            <p className="card-paragraph-skills">{t("frameworksDescription")}</p>
          </div>

          <div className="card-skills">
            <SiMysql className="icon-skills" style={{ color: "#71acd9" }} />
            <h3>{t("databases")}</h3>
            <p className="card-paragraph-skills">{t("databasesDescription")}</p>
          </div>

          <div className="card-skills">
            <SiGit className="icon-skills" style={{ color: "#F05032" }} />
            <h3>{t("tools")}</h3>
            <p className="card-paragraph-skills">{t("toolsDesc")}</p>
          </div>

          <div className="card-skills">
            <SiDjango className="icon-skills" style={{ color: "#135c40" }} />
            <h3>{t("other")}</h3>
            <p className="card-paragraph-skills">{t("otherDescription")}</p>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="section-skills">
        <h2 className="section-title-skills">{t("softSkillsTitle")}</h2>
        <div className="cards-container-skills">
          <div className="card-skills">
            <FaRegLightbulb className="icon-skills" style={{ color: "#FFD700" }} />
            <h3>{t("problemSolving")}</h3>
            <p className="card-paragraph-skills">{t("problemSolvingDescription")}</p>
          </div>

          <div className="card-skills">
            <FaUsers className="icon-skills" style={{ color: "#1E90FF" }} />
            <h3>{t("communication")}</h3>
            <p className="card-paragraph-skills">{t("communicationDescription")}</p>
          </div>

          <div className="card-skills">
            <FaChalkboardTeacher className="icon-skills" style={{ color: "#FF6347" }} />
            <h3>{t("teamCollaboration")}</h3>
            <p className="card-paragraph-skills">{t("teamCollaborationDescription")}</p>
          </div>

          <div className="card-skills">
            <FaClock className="icon-skills" style={{ color: "#4682B4" }} />
            <h3>{t("adaptability")}</h3>
            <p className="card-paragraph-skills">{t("adaptabilityDescription")}</p>
          </div>

          <div className="card-skills">
            <FaClock className="icon-skills" style={{ color: "#32CD32" }} />
            <h3>{t("timeManagement")}</h3>
            <p className="card-paragraph-skills">{t("timeManagementDescription")}</p>
          </div>

          <div className="card-skills">
            <FaGraduationCap className="icon-skills" style={{ color: "#6A5ACD" }} />
            <h3>{t("continuousLearning")}</h3>
            <p className="card-paragraph-skills">{t("continuousLearningDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
