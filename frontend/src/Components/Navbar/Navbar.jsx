import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleclickjobs = () => {
    navigate('/jobs');
    setIsMenuOpen(false);
  };

  const handleclickcompany = () => {
    navigate('/companies');
    setIsMenuOpen(false);
  };

  const handleresourcesclick = () => {
    navigate('/resources');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo_and_links">
        <div className="logo" onClick={handleLogoClick}>HireOnyx</div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item" onClick={handleclickjobs}>Jobs</li>
          <li className="nav-item" onClick={handleclickcompany}>Companies</li>
          <li className="nav-item" onClick={handleresourcesclick}>Resources</li>
          <li className="nav-item">Salary Guide</li>
        </ul>
      </div>

      <div className="auth-buttons">
        <span className="signin">Sign in</span>
        <button className="signup">Sign up</button>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
