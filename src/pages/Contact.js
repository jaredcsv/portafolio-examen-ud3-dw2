import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Contact() {
  return (
    <section>
        <h2>Contactame</h2>
        <p>Puedes contactarme a traves de mi correo electronico:</p>
        <h2>jaredcsv@proton.me</h2>
        <p>Sigueme en mis redes sociales:</p>
        <div className='social-links'>
            <a href='https://www.facebook.com/jaredcsv' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebook} size='2x'/>
            </a>
            <a href='https://www.linkedin.com/in/jaredcsv/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>
            </a>
            <a href='https://github.com/jaredcsv' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='2x'/>
            </a>
        </div>
    </section>
  );
}

export default Contact;