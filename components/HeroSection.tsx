"use client";

import { useState, useEffect, useCallback } from "react";
import { profileData } from "@/lib/data";
import { FaDownload, FaEnvelope, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = profileData.heroRoles[roleIndex];

  const typeEffect = useCallback(() => {
    if (!isDeleting) {
      if (displayed.length < currentRole.length) {
        setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % profileData.heroRoles.length);
      }
    }
  }, [displayed, isDeleting, currentRole, roleIndex]);

  useEffect(() => {
    const timer = setTimeout(typeEffect, 50);
    return () => clearTimeout(timer);
  }, [typeEffect]);

  return (
    <section id="home" className="hero">
      {/* Background Glows */}
      <div className="hero-bg-glow hero-bg-glow-1" />
      <div className="hero-bg-glow hero-bg-glow-2" />

      <div className="container">
        {/* Left Content */}
        <div className="hero-content animate-slide-left">
          <p className="hero-greeting">&lt; Hello World! /&gt;</p>
          <h1 className="hero-name">
            I&apos;m{" "}
            <span className="gradient-text">{profileData.name}</span>
          </h1>
          <div className="hero-role">
            {displayed}
            <span className="cursor" />
          </div>
          <p className="hero-description">{profileData.shortBio}</p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              <FaEnvelope /> Contact Me
            </a>
            <a href="/api/download" className="btn-outline">
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">{profileData.yearsOfExperience}+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div>
              <div className="hero-stat-number">{profileData.projectsCompleted}+</div>
              <div className="hero-stat-label">Projects Done</div>
            </div>
            <div>
              <div className="hero-stat-number">{profileData.technologiesUsed}+</div>
              <div className="hero-stat-label">Technologies</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper animate-slide-right delay-2">
          <div className="hero-image-container">
            <div className="hero-image-ring" />
            <img
              src="/images/hero-pic.png"
              alt={profileData.name}
              className="hero-image"
            />

            {/* Floating Badges */}
            <div className="hero-badge hero-badge-1">
              <SiNextdotjs /> Next.js
            </div>
            <div className="hero-badge hero-badge-2">
              <SiTypescript style={{ color: "#3178c6" }} /> TypeScript
            </div>
            <div className="hero-badge hero-badge-3">
              <SiPostgresql style={{ color: "#336791" }} /> PostgreSQL
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}
