"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/aboutme", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/aboutme/contact", label: "Contact" },
  { href: "/pixelart", label: "Pixel Art" },
];

const pixelStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  .pixel-nav {
    image-rendering: pixelated;
    font-family: 'Press Start 2P', monospace;
  }

  .pixel-nav::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background: repeating-linear-gradient(
      90deg,
      #a855f7 0px,
      #a855f7 8px,
      transparent 8px,
      transparent 12px
    );
  }

  .pixel-link {
    position: relative;
    display: inline-block;
    transition: color 0.1s;
  }

  .pixel-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 3px;
    background: #a855f7;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.15s steps(4);
    image-rendering: pixelated;
  }

  .pixel-link:hover::after {
    transform: scaleX(1);
  }

  .pixel-link:hover {
    color: #d8b4fe;
    text-shadow: 2px 2px 0px #7c3aed;
  }

  .mobile-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s steps(6);
  }

  .mobile-menu.open {
    max-height: 300px;
  }

  .pixel-bar {
    display: block;
    width: 20px;
    height: 3px;
    background: #d8b4fe;
    image-rendering: pixelated;
    transition: transform 0.15s steps(3), opacity 0.15s steps(2);
  }

  .hamburger.open .bar1 {
    transform: translateY(7px) rotate(45deg);
  }
  .hamburger.open .bar2 {
    opacity: 0;
    transform: scaleX(0);
  }
  .hamburger.open .bar3 {
    transform: translateY(-7px) rotate(-45deg);
  }

  .pixel-brand::after {
    content: '|';
    margin-left: 4px;
    animation: blink 1s steps(1) infinite;
    color: #a855f7;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .mobile-link {
    display: block;
    border-left: 3px solid transparent;
    transition: border-color 0.1s steps(2), background 0.1s steps(2);
  }

  .mobile-link:hover {
    border-left-color: #a855f7;
    background: rgba(168, 85, 247, 0.1);
    color: #d8b4fe;
  }
`;

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* dangerouslySetInnerHTML avoids the SSR/client mismatch hydration error */}
      <style dangerouslySetInnerHTML={{ __html: pixelStyles }} />

      <header className="pixel-nav bg-foreground text-background w-full fixed top-0 left-0 right-0 z-50 shadow-md relative">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">

          {/* Brand */}
          <Link href="/" className="pixel-brand text-purple-300 text-sm hover:text-purple-200 transition-colors">
            Portfolio
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="pixel-link text-background">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger md:hidden flex flex-col gap-[5px] items-center justify-center p-1 ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="pixel-bar bar1" />
            <span className="pixel-bar bar2" />
            <span className="pixel-bar bar3" />
          </button>
        </nav>

        {/* Mobile dropdown */}
        <div className={`mobile-menu md:hidden bg-foreground border-t border-purple-800 ${open ? "open" : ""}`}>
          <ul className="flex flex-col text-[9px] uppercase tracking-widest px-6 py-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="mobile-link px-3 py-3 text-background"
                  onClick={() => setOpen(false)}
                >
                  {">"} {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
