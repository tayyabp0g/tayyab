"use client";

import { useEffect, useRef, useState } from "react";
import { profileData } from "@/lib/data";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaPhp, FaNodeJs, FaPython, FaGitAlt, FaSearch,
  FaNetworkWired, FaCode, FaDatabase, FaCogs, FaBrain,
  FaDesktop, FaFileWord, FaTools, FaServer
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiPostgresql, SiMysql, SiCplusplus,
  SiMicrosoftexcel, SiMicrosoftpowerpoint,
} from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  html5: <FaHtml5 color="#e44d26" />,
  css3: <FaCss3Alt color="#1572b6" />,
  javascript: <FaJs color="#f7df1e" />,
  typescript: <SiTypescript color="#3178c6" />,
  react: <FaReact color="#61dafb" />,
  nextjs: <SiNextdotjs color="#ffffff" />,
  bootstrap: <FaBootstrap color="#7952b3" />,
  nodejs: <FaNodeJs color="#68a063" />,
  python: <FaPython color="#3776ab" />,
  php: <FaPhp color="#8993be" />,
  postgresql: <SiPostgresql color="#336791" />,
  mysql: <SiMysql color="#00758f" />,
  git: <FaGitAlt color="#f05032" />,
  cplusplus: <SiCplusplus color="#00599c" />,
  seo: <FaSearch color="#00d4ff" />,
  networking: <FaNetworkWired color="#7c3aed" />,
  it_ops: <FaDesktop color="#10b981" />,
  office: <FaFileWord color="#2b7cd3" />,
};

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <FaCode />,
  backend: <FaCogs />,
  database: <FaDatabase />,
  tools: <FaCogs />,
  ai: <FaBrain />,
  it_ops: <FaServer />,
  office: <FaFileWord />,
  soft_skills: <FaBrain />,
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & Others",
  ai: "AI & Machine Learning",
  it_ops: "IT & System Operations",
  office: "Office & Productivity Tools",
  soft_skills: "Soft Skills",
};

export default function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span className="section-label">My Skills</span>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            A comprehensive set of tools and technologies I use to build modern, 
            scalable, and beautiful web applications.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(profileData.skills).map(([category, skills], catIdx) => (
            <div
              key={category}
              className={`skill-category ${visible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${catIdx * 0.15}s` }}
            >
              <div className="skill-category-icon">
                {categoryIcons[category]}
              </div>
              <div className="skill-category-title">{categoryLabels[category]}</div>
              <div className="skill-items">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item-icon">
                      {iconMap[skill.icon] || <FaCode />}
                    </div>
                    <div className="skill-item-info">
                      <div className="skill-item-name">{skill.name}</div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: visible ? `${skill.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
