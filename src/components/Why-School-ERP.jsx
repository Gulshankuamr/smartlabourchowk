"use client";
import React from "react";
import "../styles/WhySchoolERP.css";

export default function WhySchoolERP() {
  const features = [
    {
      id: 1,
      icon: "🚀",
      title: "Streamlined Operations",
      description: "Automate administrative tasks, reduce manual work, and optimize workflows with our comprehensive ERP solution.",
      benefits: ["85% faster processing", "70% less paperwork", "Real-time updates"],
      color: "#3b82f6"
    },
    {
      id: 2,
      icon: "📊",
      title: "Data-Driven Insights",
      description: "Make informed decisions with powerful analytics and real-time reporting dashboards for better outcomes.",
      benefits: ["Advanced analytics", "Predictive insights", "Custom reports"],
      color: "#8b5cf6"
    },
    {
      id: 3,
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with encrypted data storage and secure access controls for peace of mind.",
      benefits: ["Bank-level security", "Auto backups", "24/7 monitoring"],
      color: "#10b981"
    },
    {
      id: 4,
      icon: "🌐",
      title: "Cloud-Based Access",
      description: "Access your institution data anytime, anywhere with our cloud-first architecture and mobile apps.",
      benefits: ["Anywhere access", "Mobile ready", "99.9% uptime"],
      color: "#f59e0b"
    },
    {
      id: 5,
      icon: "🎓",
      title: "Enhanced Learning",
      description: "Empower teachers and students with modern tools that improve engagement and learning outcomes.",
      benefits: ["Interactive tools", "Progress tracking", "Personalized learning"],
      color: "#ef4444"
    },
    {
      id: 6,
      icon: "💰",
      title: "Cost Effective",
      description: "Reduce operational costs with integrated solutions that eliminate multiple software subscriptions.",
      benefits: ["30% cost reduction", "No hidden fees", "Scalable pricing"],
      color: "#06b6d4"
    }
  ];

  const stats = [
    { value: "500+", label: "Educational Institutions", icon: "🏫" },
    { value: "50k+", label: "Active Teachers", icon: "👨‍🏫" },
    { value: "1M+", label: "Students Enrolled", icon: "👨‍🎓" },
    { value: "99.9%", label: "Uptime Guarantee", icon: "⚡" }
  ];

  return (
    <div className="why-schoolerp">
      {/* Header Section */}
      <div className="erp-header">
        <div className="header-container">
          <span className="badge">Why Choose Us</span>
          <h2 className="header-title">
            Why connectSkool<span className="highlight"></span>?
          </h2>
          <p className="header-description">
            Discover the advantages that make us the preferred choice for educational institutions worldwide
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-section">
        <div className="features-container">
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${feature.color}20, transparent 70%)` }}></div>
                <div className="feature-icon" style={{ background: `${feature.color}15` }}>
                  <span style={{ color: feature.color }}>{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-benefits">
                  {feature.benefits.map((benefit, idx) => (
                    <span key={idx} className="benefit-tag">
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
                <button className="learn-more-btn">
                  Learn More
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Institution?</h3>
            <p className="cta-description">
              Join hundreds of educational institutions already using connetSkool to streamline their operations
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">Start Free Trial</button>
              <button className="cta-secondary">Request Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}