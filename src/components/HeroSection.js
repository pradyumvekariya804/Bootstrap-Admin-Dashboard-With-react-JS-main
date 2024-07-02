import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            
            <div className="container main1">
                <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Gecko Accountancy</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blogs">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#case-studies">Case Studies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact us</a>
                            </li>
                        </ul>
                        <button className="btn btn-warning ml-lg-3">Contact us</button>
                    </div>
                </nav>
                </div>
                <div className="row">
                    <div className="col-6">
                    <h2>HOW MUCH COULD YOU SAVE?</h2>
                <p>Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.</p>
                <div className="question my-3">
                    <p>Is your turnover expected to be more than £85k?</p>
                    <button className="btn btn-warning mx-2">Yes</button>
                    <button className="btn btn-warning mx-2">No</button>
                </div>
                <p>Takes less than 30 seconds</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default HeroSection;
