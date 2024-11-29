import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Home() {
  return (
    <section className='home'>
        <h1>Soy Jared Martinez</h1>
        <p>Soy Desarrollador de Software</p>
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

export default Home;