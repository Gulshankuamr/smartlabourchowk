"use client";
import React, { useState } from "react";
import "../../styles/Nav-Feature.css";

export default function Features() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Features", icon: "✨" },
    { id: "academic", name: "Academic", icon: "📚" },
    { id: "administration", name: "Administration", icon: "🏛️" },
    { id: "finance", name: "Finance", icon: "💰" },
    { id: "communication", name: "Communication", icon: "💬" },
    { id: "analytics", name: "Analytics", icon: "📊" }
  ];

  const features = [
    {
      id: 1,
      category: "academic",
      icon: "📝",
      title: "Student Information System",
      description: "Centralized database for managing student profiles, attendance, grades, and academic history.",
      benefits: ["Complete student profiles", "Automated attendance", "Grade management", "Progress tracking"],
      popular: true
    },
    {
      id: 2,
      category: "academic",
      icon: "👨‍🏫",
      title: "Teacher Management",
      description: "Efficiently manage teacher profiles, schedules, workload, and performance evaluations.",
      benefits: ["Teacher profiles", "Schedule management", "Performance tracking", "Leave management"],
      popular: true
    },
    {
      id: 3,
      category: "academic",
      icon: "📅",
      title: "Timetable Management",
      description: "Create and manage class schedules, teacher assignments, and room allocations automatically.",
      benefits: ["Auto-scheduling", "Conflict resolution", "Room management", "Easy modifications"],
      popular: false
    },
  
    {
      id: 5,
      category: "administration",
      icon: "👥",
      title: "Admission Management",
      description: "Streamline the admission process from inquiry to enrollment with automated workflows.",
      benefits: ["Online applications", "Document management", "Fee calculation", "Enrollment tracking"],
      popular: true
    },

    {
      id: 7,
      category: "finance",
      icon: "💳",
      title: "Fee Management",
      description: "Automated fee collection, invoice generation, payment tracking, and financial reporting.",
      benefits: ["Online payments", "Invoice generation", "Payment reminders", "Financial reports"],
      popular: true
    },
    {
      id: 8,
      category: "finance",
      icon: "💰",
      title: "Accounting System",
      description: "Complete accounting solution with income, expense tracking, and financial statements.",
      benefits: ["Income tracking", "Expense management", "Budget planning", "Tax management"],
      popular: false
    },
    {
      id: 9,
      category: "communication",
      icon: "💬",
      title: "Parent-Teacher Communication",
      description: "Real-time communication platform connecting teachers, parents, and students.",
      benefits: ["Instant messaging", "Announcements", "Parent portal", "Meeting scheduling"],
      popular: true
    },
    {
      id: 10,
      category: "communication",
      icon: "📱",
      title: "Mobile App",
      description: "Native mobile apps for iOS and Android to access information on the go.",
      benefits: ["Real-time updates", "Push notifications", "Easy access", "User-friendly"],
      popular: true
    },

    {
      id: 12,
      category: "academic",
      icon: "🎓",
      title: "Exam Management",
      description: "Complete exam management system for scheduling, conducting, and grading exams.",
      benefits: ["Exam scheduling", "Question bank", "Result processing", "Grade cards"],
      popular: true
    }
  ];

  const filteredFeatures = activeFilter === "all" 
    ? features 
    : features.filter(feature => feature.category === activeFilter);

  return (
    <div className="features-page">
      {/* Hero Section */}
      <div className="features-hero">
        <h1>Powerful <span className="gold-text">Features</span></h1>
        <p>Everything you need to run your institution efficiently</p>
      </div>

      {/* Category Filters */}
      <div className="features-category-section">
        <div className="category-container">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeFilter === category.id ? "active" : ""}`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-grid-section">
        <div className="features-grid">
          {filteredFeatures.map((feature, index) => (
            <div key={feature.id} className="feature-card">
              {feature.popular && (
                <div className="popular-badge">
                  <span className="popular-icon">⭐</span>
                  Popular
                </div>
              )}
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-benefits">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="benefit-item">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="feature-btn">
                Learn More
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="integration-section">
        <div className="integration-content">
          <div className="integration-text">
            <span className="integration-badge">Seamless Integration</span>
            <h2>Works with Your Favorite Tools</h2>
            <p>SchoolERP integrates smoothly with popular tools and platforms you already use</p>
            <div className="integration-features">
              <div className="integration-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Google Workspace Integration</span>
              </div>
              <div className="integration-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Microsoft 365 Integration</span>
              </div>
              <div className="integration-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Payment Gateway Integration</span>
              </div>
              <div className="integration-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>API Access for Custom Solutions</span>
              </div>
            </div>
          </div>
          <div className="integration-icons">
            <div className="icon-circle">📧</div>
            <div className="icon-circle">📊</div>
            <div className="icon-circle">💳</div>
            <div className="icon-circle">☁️</div>
            <div className="icon-circle">🔗</div>
            <div className="icon-circle">📱</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="features-cta">
        <h2>Ready to Transform Your Institution?</h2>
        <p>Join thousands of educational institutions already using SchoolERP</p>
        <div className="cta-buttons">
          <button className="cta-primary">Start Free Trial</button>
          <button className="cta-secondary">Request Demo</button>
        </div>
      </div>
    </div>
  );
}