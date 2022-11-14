import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id="services"> 
            <h5> What I Offer </h5>
            <h2> Services </h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3> Manual Testing Skills </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Proficiency in Analyzing business requirements, Functional requirements, Use cases. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Develop solid test Documentation including test plans, test suits, test cases, test metrics. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Experience in documenting and maintaining reports and helping with software release process. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Extensive usage of Bug Tracking and Version Control tools such as Jira, Asana, Yougile, Git, Bitbucket.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Well organized and detail-oriented. Keep track of multiple conflicting priorities.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Pragmatic. Enjoy working as a part of a result-driven team. </p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3> Frontend Testing Automation </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Proficiency in Test driven development for Functional and Integration testing using Python Selenium framework. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Designing, development and enhancing Automated test scripts for User Interface Testing Automation using Cypress, Protractor. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Automation of Mobile Applications testing using Python Appium framework, Appium Server, Appium Inspector </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Building Automation test cases in Virtual Environment using GitHub Actions tools, Merging production ready tests to Staging repository of the Product </p>
                        </li>      
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Well versed with design and development of presentation layer for web applications using technologies like HTML, CSS and JavaScript, Bootstrap </p>
                        </li>                  
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3> Backend Testing Automation </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Validating each API endpoint using Python Requests framework, POSTMAN, Integrated with developers to automate API testing. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Performing Load, Stress testing using such tools as JMeter, Gatling, K6 framework. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Familiar with concepts and technologies such as TCP/IP protocols, routers, OSI layers. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Experience on continuous integration and deployment using Jenkins, Docker </p>
                        </li>                        
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;