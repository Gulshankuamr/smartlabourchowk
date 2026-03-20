"use client";
import React from "react";
import "../../styles/HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Setup",
      description: "Create your account and set up your institution profile in just a few minutes. Our onboarding team guides you through initial configuration.",
      icon: "📝",
      duration: "15 minutes"
    },
    {
      number: "02",
      title: "Configure & Customize",
      description: "Tailor the system according to your institution's needs. Set up academic years, fee structures, user roles, and permissions.",
      icon: "⚙️",
      duration: "1-2 hours"
    },
    {
      number: "03",
      title: "Import Your Data",
      description: "Easily migrate existing student records, teacher information, and historical data using our bulk upload tools.",
      icon: "📊",
      duration: "2-3 hours"
    },
    {
      number: "04",
      title: "Train Your Team",
      description: "Access comprehensive training materials and schedule live sessions to get your staff comfortable with the system.",
      icon: "🎓",
      duration: "1 day"
    },
    {
      number: "05",
      title: "Go Live",
      description: "Launch your ERP system with confidence. Our team ensures smooth transition with real-time monitoring and support.",
      icon: "🚀",
      duration: "Ready to go"
    },
    {
      number: "06",
      title: "Grow & Scale",
      description: "Access new features, advanced analytics, and scale your operations as your institution grows with us.",
      icon: "📈",
      duration: "Ongoing"
    }
  ];

  const benefits = [
    {
      title: "Quick Implementation",
      description: "Get your institution up and running in less than a week",
      icon: "⚡"
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface that requires minimal training",
      icon: "🎯"
    },
    {
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime guarantee",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Dedicated support team available around the clock",
      icon: "💪"
    }
  ];

  return (
    <div className="howitworks-page">
      {/* Hero Section */}
      <div className="howitworks-hero">
        <h1>How <span className="gold-text">SchoolERP</span> Works</h1>
        <p>Get started in just a few simple steps and transform your institution management</p>
      </div>

      {/* Steps Section */}
      <div className="howitworks-steps">
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-duration">
                <span className="duration-icon">⏱️</span>
                <span>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="process-flow-section">
        <h2>Simple & Seamless Process</h2>
        <div className="process-flow">
          <div className="flow-item">
            <div className="flow-icon">📝</div>
            <div className="flow-label">Setup</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon">⚙️</div>
            <div className="flow-label">Configure</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon">📊</div>
            <div className="flow-label">Import</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon">🎓</div>
            <div className="flow-label">Train</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon">🚀</div>
            <div className="flow-label">Launch</div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="howitworks-benefits">
        <h2>Why Choose Our Process?</h2>
        <p className="benefits-subtitle">We make implementation smooth and hassle-free</p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="support-section">
        <div className="support-content">
          <div className="support-text">
            <span className="support-badge">24/7 Support</span>
            <h2>Need Help Getting Started?</h2>
            <p>Our dedicated support team is here to guide you through every step of the process</p>
            <div className="support-stats">
              <div className="stat">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
              <div className="stat">
                <span className="stat-value">15min</span>
                <span className="stat-label">Avg Response Time</span>
              </div>
              <div className="stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
            <div className="support-buttons">
              <button className="btn-primary">Schedule Demo</button>
              <button className="btn-secondary">Contact Support</button>
            </div>
          </div>
          <div className="support-card">
            <div className="support-icon">💬</div>
            <h3>Live Chat Support</h3>
            <p>Get instant answers from our support team</p>
            <button className="chat-btn">Start Chat →</button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of educational institutions already using SchoolERP</p>
        <div className="cta-buttons">
          <button className="cta-primary">Start Free Trial</button>
          <button className="cta-secondary">Watch Demo Video</button>
        </div>
      </div>
    </div>
  );
}