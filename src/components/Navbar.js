import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          JPH
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/mage" className={isActive('/mage') ? 'active' : ''}>
              Mage
            </Link>
          </li>
          <li>
            <Link to="/underline" className={isActive('/underline') ? 'active' : ''}>
              Underline
            </Link>
          </li>
          <li>
            <Link to="/lastof7" className={isActive('/lastof7') ? 'active' : ''}>
              Lastof7
            </Link>
          </li>
          <li>
            <Link to="/freelance" className={isActive('/freelance') ? 'active' : ''}>
              Freelance
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
