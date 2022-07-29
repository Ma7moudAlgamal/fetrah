import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

const Footer = () => {

return (
  <footer id='footer'>
    <p className="footer-title">Copyrights @ <span>Mahmoud Algamal</span></p>
        <div className="social-icons">
            
            <a href="https://www.facebook.com/profile.php?id=100026950424988" target='_blank'><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
            <a href="https://www.instagram.com/ma7m0ud_algamal/" target='_blank'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
        </div>
  </footer>
)

}


export default Footer