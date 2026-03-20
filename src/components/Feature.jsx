"use client";
import { useEffect, useRef, useState } from "react";
import "../styles/Features.css";

export default function AurachhsaFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      id: 1,
      icon: "💬",
      title: "Seamless Communication",
      description: "Transparent and Effective Communication is the key for everlasting relationship and we understand that better. Smart Notification is an Innovation by Schoolknot.",
      gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
    },
    {
      id: 2,
      icon: "📈",
      title: "Admissions+",
      description: "Growth is the key and it starts with Admissions in School. We ensure robust Admission Management built with Analytics.",
      gradient: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)"
    },
    {
      id: 3,
      icon: "💰",
      title: "Finance Management",
      description: "Get your money on time. Smart Fee Reminders, Offline and Online Fee Collection, Simple yet detailed Collection Reports, Complete Expense Management and more.",
      gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
    },
    {
      id: 4,
      icon: "👥",
      title: "Admin",
      description: "Manage exclusive logins for Cashier, Librarian, Counselor, Teachers and other Employees in one platform.",
      gradient: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)"
    },
    {
      id: 5,
      icon: "🏷️",
      title: "School Branding",
      description: "Get customized mobile application (Android/iOS) for your school brand. Building your school's online visibility.",
      gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
    },
    {
      id: 6,
      icon: "🏢",
      title: "Multi-Branch Management",
      description: "If you are a franchise or have multiple schools to manage, we help you manage everything you need at once.",
      gradient: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)"
    }
  ];

  return (
    <section className="aura-section" ref={sectionRef}>
      <div className="aura-container">
        {/* Section Header */}
        <div className="aura-header">
          <span className="aura-badge">Premium Features</span>
          <h2 className="aura-title">
            Everything You Need to <span className="aura-highlight">Run Your School</span>
          </h2>
          <p className="aura-description">
            Complete school management solution with powerful features to streamline all operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="aura-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`aura-card ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="aura-glow"></div>
              
              {/* Card Content */}
              <div className="aura-card-content">
                <div className="aura-icon-wrapper">
                  <div className="aura-icon-bg"></div>
                  <div className="aura-icon">{feature.icon}</div>
                </div>
                
                <h3 className="aura-card-title">{feature.title}</h3>
                <p className="aura-card-description">{feature.description}</p>
                
                <div className="aura-card-footer">
                  <a href="#" className="aura-link">
                    Learn More
                    <svg className="aura-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="aura-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}