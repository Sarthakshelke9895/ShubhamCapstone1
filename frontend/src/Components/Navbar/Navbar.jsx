import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.location.reload(); // Reload the page
  };

  const handleclickjobs = () => {
    navigate('/jobs');
  };

  const handleclickcompany = () =>{
    navigate('/companies')
  };

  const handleresourcesclick =() =>{
    navigate('/resources')
  };
  return (
    <div>
      <header className="navbar">
        <div className="logo_and_links">
        <div className="logo" onClick={handleLogoClick}>HireOnyx</div>
       <ul className="nav-links">
        <li className="nav-item" onClick={handleclickjobs}>Jobs</li>
        <li className="nav-item" onClick={handleclickcompany}>Companies</li>
        <li className="nav-item" onClick={handleresourcesclick}>Resources</li>
        <li className="nav-item">Salary Guide</li>
        </ul>
        </div>
    
      
      <div className="auth-buttons">
        <span className="signin">Sign in</span>
        <button className="signup">Sign up</button>
      </div>
    </header>
    </div>
  )
}

export default Navbar
