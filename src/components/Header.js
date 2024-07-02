import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
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
        </header>
    );
}

export default Header;
