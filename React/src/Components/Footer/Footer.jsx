// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <p>&copy; 2025 Wellness Bloom. All rights reserved.</p>
//         <nav>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/journey">Journey</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          
          <span>WELLNESS BLOOM</span>
        </div>

        <div className="footer-brands">
          <span>OUR BRANDS</span>
          <nav className="brand-links">
           
          </nav>
        </div>

        <div className="footer-nav">
          <a href="/about">About</a>
          <span className="divider">|</span>
          <a href="/careers">Careers</a>
          <span className="divider">|</span>
          <a href="/advertise">Advertise with us</a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;