import React from 'react'
import './Companies.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import company1 from '../../Assets/company1.jpg'
import company2 from '../../Assets/company2.png'
import company3 from '../../Assets/company3.png'
import Contact from '../../Assets/email.png'
const Companies = () => {
  return (
   <div>
   <Navbar/>
    <div class="container">
      
    <aside class="sidebar">
      <h3>Industry</h3>
      <label><input type="checkbox"/> Technology</label>
      <label><input type="checkbox"/> Finance</label>
      <label><input type="checkbox"/> Healthcare</label>
      <label><input type="checkbox"/> Manufacturing</label>

      <h3>Company Size</h3>
      <label><input type="checkbox"/> 1-10 employees</label>
      <label><input type="checkbox"/> 11-50 employees</label>
      <label><input type="checkbox"/> 51-200 employees</label>
      <label><input type="checkbox"/> 201-500 employees</label>

      <h3>Region</h3>
      <label><input type="checkbox"/> North America</label>
      <label><input type="checkbox"/> Europe</label>
      <label><input type="checkbox"/> Asia Pacific</label>
      <label><input type="checkbox"/> Latin America</label>
    </aside>

    <main class="main-content">
      <section class="featured">
        <h2>Featured Companies</h2>
        <div class="card-container">
          <div class="card">
            <img class="companyimg" src={company1} alt="TechCorp Solutions" />
            <h3>TechCorp Solutions</h3>
            <p>Leading provider of enterprise software solutions</p>
            <span class="tag tech">Technology</span>
            <div class="btn-group">
            <div className="contact">
              <img class='contactimg' src={Contact} alt="Contact" />
              <label htmlFor="contact">Contact</label>
              </div>
              <button class="view">View Profile</button>
            </div>
          </div>
          <div class="card">
          <img class="companyimg" src={company2} alt="Global Finance" />
            <h3>Global Finance Group</h3>
            <p>International financial services and consulting</p>
            <span class="tag finance">Finance</span>
            <div class="btn-group">
            <div className="contact">
              <img class='contactimg' src={Contact} alt="Contact" />
              <label htmlFor="contact">Contact</label>
              </div>
              <button class="view">View Profile</button>
            </div>
          </div>
          <div class="card">
          <img class="companyimg" src={company3} alt="Helatcare Innovations" />
            <h3>HealthCare Innovations</h3>
            <p>Innovative healthcare technology solutions</p>
            <span class="tag health">Healthcare</span>
            <div class="btn-group">
              <div className="contact">
              <img class='contactimg' src={Contact} alt="Contact" />
              <label htmlFor="contact">Contact</label>
              </div>
              <button class="view">View Profile</button>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <h2>Client Testimonials</h2>
        <div class="testimonial-card">
          <strong>Sarah Johnson</strong><br/>
          <span>★★★★★ TechCorp Inc.</span>
          <p>Working with TechCorp Solutions has transformed our business operations. Their enterprise software solutions are innovative and reliable.</p>
        </div>
      </section>

      <section class="services">
        <h2>Services Overview</h2>
        <div class="services-container">
          <div class="service-box">
            <h3>Software Development</h3>
            <p>Custom software solutions for enterprise needs</p>
          </div>
          <div class="service-box">
            <h3>Financial Consulting</h3>
            <p>Expert financial guidance and strategy</p>
          </div>
          <div class="service-box">
            <h3>Healthcare Technology</h3>
            <p>Innovative healthcare solutions</p>
          </div>
        </div>
      </section>
    </main>
    
  </div>
  <Footer/>
  </div>
  )
}

export default Companies
