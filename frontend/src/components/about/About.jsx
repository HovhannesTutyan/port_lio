import React from 'react'
import './about.css';
import ME from '../../assets/img/project-img2.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
    return (
        <section id="about"> 
            <h5> Get To Know </h5>
            <h2> About Me </h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"></img>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5> 
                            <small>3+ Years Working</small>
                        </article>                
                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5> 
                            <small>20+ Worldwide</small>
                        </article>                    
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5> 
                            <small>10+ Completed Projects</small>
                        </article>
                    </div>
                    <p>
                        The American travel writer Paul Theroux once wrote: "Tourists don't know where they've been, travelers don't know where they're going."
                        Healthy pursuits are like traveling. We know there is a wonderland called wellness. But, there are no fixed routes to reach there. The pursuits need effort and determination. We cannot act like tourists who don't know where they've been. We must take notes of warning signs sent by our bodies.
                        On the journey to wellness, there are many dangers to be avoided; there are many footsteps to be taken; unfortunately, there are no short-cuts.
                        Travelers walking in the night follow North Star. Healthy pursuits work similarly. We know our goal; we know the signposts; we know the dangers on the road; we can adjust pace if we are tired; we can change travel plans due to the weather. But, We walk steadily and persistently. With my companionship, hopefully, your journey will be made easier.                       
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
