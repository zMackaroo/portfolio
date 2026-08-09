"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (!menuOpen && y > lastY && y > 300) setHidden(true);
      else setHidden(false);
      setScrolled(y > 60);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={[
        "cine-nav",
        scrolled ? "scrolled" : "",
        hidden ? "is-hidden" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a href="/#hero" className="brand" onClick={closeMenu}>
        {siteConfig.brand}
        <b>.</b>
      </a>

      <button
        type="button"
        className={`menu-btn${menuOpen ? " open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
