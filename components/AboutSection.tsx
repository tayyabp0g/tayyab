"use client";

import { profileData } from "@/lib/data";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap,
  FaDownload, FaBriefcase,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container">
        {/* Image Side */}
        <div className="about-image-side animate-slide-left">
          <div className="about-image-frame">
            <img src="/images/about-pic.jpg" alt={profileData.name} />
          </div>
          <div className="about-experience-badge">
            <div className="number">{profileData.yearsOfExperience}+</div>
            <div className="text">Years<br />Exp.</div>
          </div>
        </div>

        {/* Content */}
        <div className="about-content animate-slide-right delay-2">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate <span className="gradient-text">Full Stack Developer</span>
          </h2>
          <p className="about-text">{profileData.bio}</p>

          {/* Info Grid */}
          <div className="about-info-grid">
            <div className="about-info-item">
              <span className="about-info-icon"><FaEnvelope /></span>
              <div>
                <div className="about-info-label">Email</div>
                <div className="about-info-value">{profileData.email}</div>
              </div>
            </div>  
            <div className="about-info-item">
              <span className="about-info-icon"><FaPhone /></span>
              <div>
                <div className="about-info-label">Phone</div>
                <div className="about-info-value">{profileData.phone}</div>
              </div>
            </div>
            <div className="about-info-item">
              <span className="about-info-icon"><FaMapMarkerAlt /></span>
              <div>
                <div className="about-info-label">Location</div>
                <div className="about-info-value">{profileData.location}</div>
              </div>
            </div>
            <div className="about-info-item">
              <span className="about-info-icon"><FaGraduationCap /></span>
              <div>
                <div className="about-info-label">Education</div>
                <div className="about-info-value">{profileData.degree}</div>
              </div>
            </div>
            <div className="about-info-item">
              <span className="about-info-icon"><FaBriefcase /></span>
              <div>
                <div className="about-info-label">Experience</div>
                <div className="about-info-value">{profileData.yearsOfExperience}+ Years</div>
              </div>
            </div>
            <div className="about-info-item">
              <span className="about-info-icon"><FaGraduationCap /></span>
              <div>
                <div className="about-info-label">University</div>
                <div className="about-info-value">{profileData.university}</div>
              </div>
            </div>
          </div>

          <div className="about-buttons">
            <a href="/api/download" className="btn-primary">
              <FaDownload /> Download CV
            </a>
            <a href="#contact" className="btn-outline">
              <FaEnvelope /> Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
