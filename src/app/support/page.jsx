"use client";
import { useState } from "react";
import "../../styles/Support.css";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      id: 1,
      question: "How do I get started with School ERP?",
      answer: "Getting started is easy! Contact our sales team, and we'll schedule a demo, set up your account, and provide training for your staff."
    },
    {
      id: 2,
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required."
    },
    {
      id: 3,
      question: "Can I access School ERP on mobile devices?",
      answer: "Absolutely! School ERP is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android."
    },
    {
      id: 4,
      question: "How secure is my data?",
      answer: "We use bank-level encryption, regular backups, and strict access controls to ensure your data is always safe and secure."
    },
    {
      id: 5,
      question: "Do you provide training and support?",
      answer: "Yes! We provide comprehensive training, documentation, video tutorials, and 24/7 customer support via chat, email, and phone."
    },
    {
      id: 6,
      question: "Can I customize the system for my school?",
      answer: "Yes! School ERP is highly customizable. You can add custom fields, modules, and integrate with other systems as needed."
    }
  ];

  const supportChannels = [
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help via email",
      availability: "Response within 24h",
      action: "support@schooleerp.com"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Call our support team",
      availability: "Mon-Fri, 9AM-6PM",
      action: "+91 98765 43210"
    },
    {
      icon: "📚",
      title: "Knowledge Base",
      description: "Browse documentation",
      availability: "Self-service",
      action: "Browse Articles"
    }
  ];

  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="support-hero">
        <div className="support-hero-content">
          <h1>How Can We Help You?</h1>
          <p>Get support, find answers, or reach out to our team</p>
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search for help articles..." />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="channels-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Support Channels</span>
            <h2>Ways to Get Support</h2>
            <p>Choose the best way to reach us</p>
          </div>
          <div className="channels-grid">
            {supportChannels.map((channel, index) => (
              <div className="channel-card" key={index}>
                <div className="channel-icon">{channel.icon}</div>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <span className="channel-availability">{channel.availability}</span>
                <button className="channel-btn">
                  {channel.action}
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div className="faq-card" key={faq.id}>
                <div className="faq-icon">❓</div>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Still Have Questions?</h2>
              <p>Our support team is here to help you 24/7. Fill out the form and we'll get back to you within 24 hours.</p>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Education Street, Bangalore, India</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>support@schooleerp.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="success-message">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}