import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img/project-img3.png';
import Player from '../../assets/img/teams.jpg';
import Evernow from '../../assets/img/evernow.png';
import Cincopa from '../../assets/img/cincopa.png';

const data = [
    {
        id: 1,
        image: Player,
        title: 'Website for soccer players, agents and fans',
        github: "https://github.com/AtticusFinch1/VVPPlayers",
        demo: "https://foothunters.com/"
    },
    {
        id: 2,
        image: Evernow,
        title: 'Evernow - парная медитация',
        github: "https://github.com",
        demo: "https://play.google.com/store/apps/details?id=com.everbuddy&gl=US"
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio"> 
            <h5> My Recent Work </h5>
            <h2> Portfolio </h2>
            <div className="container portfolio__container">{
                data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} style={{ height: 300 }}/>
                        </div>
                        <h3> {title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className='btn' target='_blank'>Github</a>
                            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>  
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;
