import React from 'react';
import '../css/Home.css'; // Ensure the correct path for your CSS file
import ditection from '../assets/Image/ditection.png';
import protection from '../assets/Image/protection.png';
import seamless from '../assets/Image/seamless.png';
import developer from '../assets/Image/developer.png';
import Educators from '../assets/Image/educators.png';
import companies from '../assets/Image/companies.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='body'>
    <div className="home-container">
      
      <section className="image">
        <div className="hero-text">
          <h1>Welcome to Our Service</h1>
          <p>Your First Line of Defense Against Plagiarism</p>
          <center>
            <button className="cta-button">
              <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Get Started</Link>
            </button>
          </center>
        </div>
        <div className="hero-image">
          {/* Add any image or content here if necessary */}
        </div>
      </section>
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <center><h2>Why Choose Us?</h2></center>
        <div className="features">
          <div className="feature-item">
            <img src={ditection} height={300} width={450} alt="detection" />
            <h3>Accurate Detection</h3>
            <p>Scan and analyze code across repositories to identify duplicates, similarities, and copied content.</p>
          </div>
          <div className="feature-item">
            <img src={protection} height={300} width={450} alt="protection" />
            <h3>Protect Your Code</h3>
            <p>Ensure originality and safeguard your intellectual property.</p>
          </div>
          <div className="feature-item">
            <img src={seamless} height={300} width={450} alt="seamless" />
            <h3>Seamless Integration</h3>
            <p>Works effortlessly with your Github repos for quick and reliable results.</p>
          </div>
        </div>
      </section>

      {/* Who's it For Section */}
      <section className="whos-it-for">
        <center><h2>Who's it For?</h2></center>
        <div className="target-audience">
          <div className="audience-item">
            <img src={developer} height={300} alt="developer" />
            <h3>Developers</h3>
            <p>Verify the uniqueness of your code.</p>
          </div>
          <div className="audience-item">
            <img src={Educators} height={300} alt="educators" />
            <h3>Educators</h3>
            <p>Evaluate student projects for originality.</p>
          </div>
          <div className="audience-item">
            <img src={companies} height={300} alt="companies" />
            <h3>Companies</h3>
            <p>Maintain IP compliance and ethical coding standards.</p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started">
        <h2>Get Started Today</h2>
        <p>Start your journey with us today and reach your goals faster!</p>
        <div>
          {/* Link wrapped inside the button */}
          <Link to="/signup">
            <button className="cta-button">Sign Up Now</button>
          </Link>
        </div>
      </section>
    </div>
    
  );
};

export default Home;
