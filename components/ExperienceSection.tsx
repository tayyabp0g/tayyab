"use client";

import { profileData } from "@/lib/data";
import { FaBriefcase, FaGraduationCap, FaHeart } from "react-icons/fa";

const typeIcons: Record<string, React.ReactNode> = {
  work: <FaBriefcase />,
  education: <FaGraduationCap />,
  volunteer: <FaHeart />,
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Work History</span>
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            My professional journey and academic background that shaped me into the developer I am today.
          </p>
        </div>

        <div className="timeline">
          {profileData.experience.map((exp, index) => (
            <div
              key={index}
              className="timeline-item animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot" />
              <div className="timeline-date">{exp.duration}</div>
              <div className="timeline-card">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <span style={{ color: "var(--color-primary)", fontSize: "1.1rem" }}>
                    {typeIcons[exp.type] || <FaBriefcase />}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(var(--color-primary-rgb), 0.1)",
                      color: "var(--color-primary)",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
