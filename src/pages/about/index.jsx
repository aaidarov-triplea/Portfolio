import './about.css'

import avatar from './img/avatar.jpg'
import cv from './img/CV.pdf'

import Skills from './Skills';

function About() {
    return ( 
        
        <div className='container'>
            <div className="about-wrapper">
            <p className='subtitle'>Information</p>
            <h2 className='titles'>About me</h2>
            <div className='about-row'>
                <div className='about-img'>
                    <img className='avatar-img' src={ avatar } alt="avatar" />
                </div>
                <div className='about-row__col'>
                    <div className='about-info'>
                        <h3>I'm Aidarov Akzhol</h3>
                        <p>Frontend developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dolores?</p>
                    </div>
                    <div className='about-row__col-2'>
                    <div className='personaly-info'>
                        <span><b>Birthday:</b> 05 April 1991</span>
                        <span><b>Website:</b> www.triplea.com</span>
                        <span><b>Phone:</b> +996 556-400-977</span>
                    </div>

                    <div className='personaly-info'>
                        <span><b>Degree:</b> Junior</span>
                        <span><b>Mail:</b> aaidarov.triplea@gmail.com</span>
                        <span><b>Linkedin</b> /aaidarov</span>
                    </div>
                    </div>

                    <div className='cv'>
                        <a 
                        href={cv}
                        target='_blank'
                        >
                            Download CV
                        </a>
                    </div>
                </div>

            </div>

            </div>
            <Skills />
        </div>
     );
}

export default About;