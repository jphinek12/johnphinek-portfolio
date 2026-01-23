'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const isWorkPage = ['/safetykit', '/mage', '/underline', '/lastof7', '/freelance'].includes(pathname);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <img src="/logo.png" alt="JPH" className="navbar-logo-img" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="nav-dropdown">
            <span className={`nav-dropdown-trigger ${isWorkPage ? 'active' : ''}`}>
              Work Experience
            </span>
            <ul className="nav-dropdown-menu">
              <li>
                <Link href="/mage" className={isActive('/mage') ? 'active' : ''}>
                  Mage
                </Link>
              </li>
              <li>
                <Link href="/underline" className={isActive('/underline') ? 'active' : ''}>
                  Underline
                </Link>
              </li>
              <li>
                <Link href="/lastof7" className={isActive('/lastof7') ? 'active' : ''}>
                  Lastof7
                </Link>
              </li>
              <li className="nav-dropdown-parent">
                <Link href="/freelance" className={isActive('/freelance') ? 'active' : ''}>
                  Freelance
                </Link>
                <Link href="/safetykit" className={`nav-dropdown-child ${isActive('/safetykit') ? 'active' : ''}`}>
                  SafetyKit
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-dropdown">
            <span className="nav-dropdown-trigger">
              Let's Connect
            </span>
            <ul className="nav-dropdown-menu">
              <li>
                <a href="https://www.linkedin.com/in/johnpatrickhinek" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:johnphinek@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
