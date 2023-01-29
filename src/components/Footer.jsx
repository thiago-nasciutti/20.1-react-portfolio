import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='footer'>
            <h5 className='footerTitle'>2022 | Made in React by Thiago Nasciutti</h5>
            <div className='footerRight'>
                nasciutti.thiago@gmail.com
                <a className="linkedinIcon" href="https://www.linkedin.com/in/thiago-nasciutti/">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a className="githubIcon" href="https://github.com/thiago-nasciutti?tab=repositories">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    );
};

export default Footer;