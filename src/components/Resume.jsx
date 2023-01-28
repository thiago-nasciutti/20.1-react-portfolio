import React from 'react'
import resumeImg from '../assets/resume-img.png'

const Resume = () => {

    return (
        <div className='resumePg'>
            <a href="resume_Thiago.pdf" download>
                <button className='download'>Download</button>
            </a>
            <img className='resumeImg' src={resumeImg} alt="resume" />
        </div>
    );
}

export default Resume