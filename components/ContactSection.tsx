"use client";

import { useState, FormEvent } from "react";
import { profileData } from "@/lib/data";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
  FaLinkedin, FaPaperPlane
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        {/* Contact Info */}
        <div className="contact-info animate-slide-left">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-description">
            Have a project in mind or want to collaborate? Feel free to reach out —
            I&apos;d love to hear from you!
          </p>

          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaEnvelope /></div>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">{profileData.email}</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaPhone /></div>
              <div>
                <div className="contact-info-label">Phone</div>
                <div className="contact-info-value">{profileData.phone}</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaMapMarkerAlt /></div>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-value">{profileData.location}</div>
              </div>
            </div>
          </div>

          <div className="contact-social">
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

        {/* Contact Form */}
        <div className="contact-form-wrapper animate-slide-right delay-2">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-input"
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {status === "success" && (
              <div className="form-message success">
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-message error">
                ❌ Something went wrong. Please try again or email directly.
              </div>
            )}

            <button
              type="submit"
              className="form-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
