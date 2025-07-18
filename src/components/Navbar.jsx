import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 70;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdmin(isAdminLoggedIn);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdmin(false);
    navigate('/admin-login');
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light custom-navbar"
      style={{
        backgroundImage: `url(/image/logo/Untitled-1.png)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container-fluid">
        <Link to="/kalakendra" className="navbar-brand">
          <img
            src={`/image/logo/icon green.png`}
            alt="Kala Kendra Logo"
            className="navbar-logo"
            style={{ height: '40px' }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <HashLink smooth to="/kalakendra#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
                HOME
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink smooth to="/kalakendra#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                ABOUT
              </HashLink>
            </li>

            {/* Portfolio with Dropdown */}
            <li className="nav-item dropdown " 
            onMouseEnter={() => document.getElementById('portfolioDropdown').classList.add('show')}
            onMouseLeave={() => document.getElementById('portfolioDropdown').classList.remove('show')}
            >
            <HashLink
              smooth
              to="/kalakendra#portfolio"
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              id="portfolioToggle"
              role="button"
              aria-expanded="false"
            >
              PORTFOLIO
            </HashLink>
              <ul className="dropdown-menu custom-dropdown" id="portfolioDropdown">
              <li><Link to="/bedroom" className="dropdown-item">BEDROOM</Link></li>
              <li><Link to="/kids-room" className="dropdown-item">KIDSROOM</Link></li>
              <li><Link to="/kitchen" className="dropdown-item">KITCHEN</Link></li>
              <li><Link to="/living-room" className="dropdown-item">LIVING & DINING</Link></li>
              <li><Link to="/puja-room" className="dropdown-item">PUJA ROOM</Link></li>
              <li><Link to="/office" className="dropdown-item">OFFICE</Link></li>
              <li><Link to="/washroom" className="dropdown-item">WASHROOM</Link></li>
              <li><Link to="/entrance" className="dropdown-item">ENTRANCE</Link></li>
              <li><Link to="/exterior" className="dropdown-item">EXTERIOR</Link></li>
             </ul>
            </li>

            <li className="nav-item">
              <HashLink smooth to="/kalakendra#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>
                SERVICES
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink smooth to="/kalakendra#reviews" className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}>
                REVIEWS
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink smooth to="/kalakendra#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                CONTACT
              </HashLink>
            </li>

            {isAdmin && (
              <li className="nav-item">
                <Link to="/admin-login" onClick={handleLogout} className="nav-link text-danger">
                  LOGOUT
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
