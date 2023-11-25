import { Link } from "react-router-dom";
import { FaApple, FaAndroid, FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function FooterComponent() {

    return (
      <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h5>Explore</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-column">
            <h5>Products & Services</h5>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="footer-column">
            <h5>Company</h5>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
          </div>
          <div className="footer-column">
            <h5>Mobile Apps</h5>
            <Link to="/ios"><FaApple /> iOS App</Link>
            <Link to="/android"><FaAndroid /> Android App</Link>
          </div>
          <div className="footer-column">
            <h5>Connect with Us</h5>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
          </div>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 Voylio. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
  }
  