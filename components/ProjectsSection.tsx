"use client";

import { useState } from "react";
import { profileData } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import Image from "next/image";

type FilterType = "all" | "ai" | "web";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects =
    filter === "all"
      ? profileData.projects
      : filter === "ai"
      ? profileData.projects.filter((p) => p.featured)
      : profileData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Some of the projects I&apos;ve built to sharpen my skills and solve
            real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          {(
            [
              { key: "all", label: "All Projects" },
              { key: "ai", label: "🧠 AI / ML" },
              { key: "web", label: "🌐 Web Dev" },
            ] as { key: FilterType; label: string }[]
          ).map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              style={{
                padding: "8px 20px",
                borderRadius: "var(--radius-full)",
                border:
                  filter === btn.key
                    ? "none"
                    : "1px solid rgba(255,255,255,0.15)",
                background:
                  filter === btn.key
                    ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                    : "rgba(255,255,255,0.05)",
                color: filter === btn.key ? "#fff" : "var(--color-text-secondary)",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "0.5px",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="project-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Project Image */}
              <div className="project-image" style={{ position: "relative" }}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, rgba(168,85,247,0.2), rgba(10,10,15,0.9))`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                      color: "rgba(255,255,255,0.15)",
                      fontWeight: 900,
                    }}
                  >
                    {`0${index + 1}`}
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                      color: "#fff",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      zIndex: 3,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      boxShadow: "0 2px 8px rgba(245,158,11,0.4)",
                    }}
                  >
                    <FaStar /> AI/ML
                  </div>
                )}

                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-overlay-btn"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay-btn"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc" style={{ 
                  textAlign: "justify", 
                  minHeight: "140px",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  {project.description}
                </p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color =
                        "var(--color-text-secondary)";
                    }}
                  >
                    <FaGithub /> Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 14px",
                        borderRadius: "var(--radius-full)",
                        background:
                          "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                        color: "#fff",
                        fontSize: "0.8rem",
                        textDecoration: "none",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 10px rgba(168,85,247,0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 15px rgba(168,85,247,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 10px rgba(168,85,247,0.3)";
                      }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
