"use client";
import "../../styles/about.css";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Our School ERP</h1>
        <p>Smart. Simple. Powerful School Management System</p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            School ERP is a complete digital solution designed to manage
            schools efficiently. From attendance to exams, everything is
            automated and easy to use.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify school management and make education
            smarter using technology.
          </p>
        </div>

        <div className="about-image">
          <img src="https://img.freepik.com/free-vector/isometric-online-education-round-concept-with-devices-online-training-graduation-cap-students-books-magnifier-alarm-clock-backpack-certificate-pencil-illustration_1284-51233.jpg" alt="School ERP" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        <h2>Why Choose Us</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 Easy Management</h3>
            <p>Manage students, teachers, and classes easily.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Fast & Secure</h3>
            <p>High performance with secure data handling.</p>
          </div>

          <div className="feature-card">
            <h3>📱 Mobile Friendly</h3>
            <p>Access from any device anytime.</p>
          </div>
        </div>
      </section>

    </div>
  );
}