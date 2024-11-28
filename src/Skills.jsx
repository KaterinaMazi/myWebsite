import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { FaRegLightbulb, FaUsers, FaChalkboardTeacher, FaClock, FaGraduationCap, FaNetworkWired } from "react-icons/fa";
import { SiJavascript, SiReact, SiMysql, SiGit } from "react-icons/si";

function Skills() {
  const { t } = useTranslation();

  const containerStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 3,
    marginBottom: 4,
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  };

  const titleStyles = {
    color: "#f734f7",
    marginBottom: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  };

  const cardStyles = {
    background: "linear-gradient(135deg, #3e434f, #5b585c)",
    borderRadius: "12px",
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
    padding: "3rem",
    textAlign: "center",
    color: "#f0f0f0",
    width: "300px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.5)",
    },
  };

  const iconStyles = (color) => ({
    fontSize: "60px",
    color: color,
    marginBottom: "15px", 
  });

  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <Typography variant="h3" sx={titleStyles}>{t("technicalSkillsTitle")}</Typography>
      <Box sx={containerStyles}>
        <Box sx={cardStyles}>
          <SiJavascript style={iconStyles("#F7DF1E")} />
          <Typography variant="h3">
            {t("languages")}
          </Typography>
          <Typography variant="body2">{t("languagesDescription")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <SiReact style={iconStyles("#61DAFB")} />
          <Typography variant="h3">
            {t("frameworks")}
          </Typography>
          <Typography variant="body2">{t("frameworksDescription")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <SiMysql style={iconStyles("#71acd9")} />
          <Typography variant="h3">
            {t("databases")}
          </Typography>
          <Typography variant="body2">{t("databasesDescription")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <SiGit style={iconStyles("#F05032")} />
          <Typography variant="h3">
            {t("tools")}
          </Typography>
          <Typography variant="body2">{t("toolsDesc")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <FaNetworkWired style={iconStyles("#9fcfc3")} />
          <Typography variant="h3">
            {t("other")}
          </Typography>
          <Typography variant="body2">{t("otherDescription")}</Typography>
        </Box>
      </Box>

      {/* Soft Skills Section */}
      <Typography variant="h3" sx={titleStyles}>{t("softSkillsTitle")}</Typography>
      <Box sx={containerStyles}>
        <Box sx={cardStyles}>
          <FaRegLightbulb style={iconStyles("#FFD700")} />
          <Typography variant="h3">
            {t("problemSolving")}
          </Typography>
          <Typography variant="body2">{t("problemSolvingDescription")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <FaUsers style={iconStyles("#1E90FF")} />
          <Typography variant="h3">
            {t("communication")}
          </Typography>
          <Typography variant="body2">{t("communicationDescription")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <FaChalkboardTeacher style={iconStyles("#FF6347")} />
          <Typography variant="h3">
            {t("teamCollaboration")}
          </Typography>
          <Typography variant="body2">{t("teamCollaborationDescription")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <FaClock style={iconStyles("#4682B4")} />
          <Typography variant="h3">
            {t("adaptability")}
          </Typography>
          <Typography variant="body2">{t("adaptabilityDescription")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <FaClock style={iconStyles("#32CD32")} />
          <Typography variant="h3">
            {t("timeManagement")}
          </Typography>
          <Typography variant="body2">{t("timeManagementDescription")}</Typography>
        </Box>

        <Box sx={cardStyles}>
          <FaGraduationCap style={iconStyles("#6A5ACD")} />
          <Typography variant="h3">
            {t("continuousLearning")}
          </Typography>
          <Typography variant="body2">{t("continuousLearningDescription")}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
