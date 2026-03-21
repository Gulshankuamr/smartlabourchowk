// Footer.jsx
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "../styles//Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Demo", href: "/demo" },
    { name: "Contact", href: "/contact" },
  ];

  const solutions = [
    { name: "School Management", href: "/solutions/school" },
    { name: "College Management", href: "/solutions/college" },
    { name: "Coaching Institute", href: "/solutions/coaching" },
    { name: "Pre-School", href: "/solutions/preschool" },
    { name: "University", href: "/solutions/university" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "https://facebook.com" },
    { name: "Twitter", icon: "🐦", href: "https://twitter.com" },
    { name: "LinkedIn", icon: "🔗", href: "https://linkedin.com" },
    { name: "Instagram", icon: "📸", href: "https://instagram.com" },
    { name: "YouTube", icon: "▶️", href: "https://youtube.com" },
  ];

  // Back to top button visibility
  useEffect(() => {
    const backToTopButton = document.querySelector('.back-to-top');
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton?.classList.add('visible');
      } else {
        backToTopButton?.classList.remove('visible');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="aura-footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-column company-column">
            <div className="footer-logo">
              <div className="logo-icon">🏫</div>
              <span className="logo-text">School<span className="logo-highlight">ERP</span></span>
            </div>
            <p className="footer-description">
              Revolutionizing education management with cutting-edge technology solutions for schools, colleges, and educational institutions worldwide.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:info@schoolknot.com">info@schoolknot.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+18001234567">+1 (800) 123-4567</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Education Street, Silicon Valley, CA 94025</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="link-arrow">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-column">
            <h3 className="footer-title">Solutions</h3>
            <ul className="footer-links">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link href={solution.href}>
                    <span className="link-arrow">→</span>
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal Combined */}
          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link href={resource.href}>
                    <span className="link-arrow">→</span>
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
        
          </div>
        </div>
      </div>

      {/* About Us Section with Social Icons */}
     

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-wrapper">
            <div className="copyright">
              <p>© {currentYear} School ERP. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

    
    </footer>
  );
}