"use client";

import { profileData } from "@/lib/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <img
              src="/images/logo.jpg"
              alt={profileData.name}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "2px solid rgba(0,212,255,0.3)",
              }}
            />
            <span className="footer-brand-text">{profileData.name}</span>
          </div>

          {/* Links */}
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="footer-social">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profileData.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} {profileData.name}. All Rights Reserved.
          </div>
          <div className="footer-made-with">
            Made with <span><FaHeart style={{ display: "inline", verticalAlign: "middle" }} /></span> using Next.js & TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
}
