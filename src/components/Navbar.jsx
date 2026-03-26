"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking link
  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".login-dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO - with proper size that doesn't increase navbar height */}
      <div className="logo">
        <Link href="/" onClick={handleLinkClick}>
          <div className="logo-container">
            <Image
              src="/finalLogo.png"
              alt="School ERP Logo"
              width={130}
              height={45}
              priority
              className="navbar-logo"
              style={{
                width: "auto",
                height: "auto",
                maxHeight: "120px", // This controls logo height - adjust this value
              }}
            />
          </div>
        </Link>
      </div>

      {/* MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link href="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link href="/feature" onClick={handleLinkClick}>
            Feature
          </Link>
        </li>
        <li>
          <Link href="/how-it-works" onClick={handleLinkClick}>
            How it work
          </Link>
        </li>
        <li>
          <Link href="/support" onClick={handleLinkClick}>
            Support
          </Link>
        </li>
      </ul>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <div className="login-dropdown">
          <button className="login-btn" onClick={toggleDropdown}>
            Login
            <span className="dropdown-arrow">▼</span>
          </button>

          {/* Dropdown Menu */}
          <div className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}>
            <Link href="https://school-admin-dashbord.vercel.app/login" onClick={handleLinkClick}>
              <span className="dropdown-icon">🏫</span>
              School Admin Login
            </Link>
            <Link href="#" onClick={handleLinkClick}>
              <span className="dropdown-icon">👨‍💼</span>
              Student Login
            </Link>
            <Link href="#" onClick={handleLinkClick}>
              <span className="dropdown-icon">👩‍🏫</span>
              Teacher Login
            </Link>
            <Link href="#" onClick={handleLinkClick}>
              <span className="dropdown-icon">👨‍💼</span>
              Account Login
            </Link>
          </div>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
