// AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // Import your custom CSS for additional styling

const AboutUs = () => {
    return (
        <div className="container main mt-5">
            <div className="row bgimg">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2>About us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consectetur sadipscing elitr.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src="aboutus.jpeg" alt="About Us" className="img-fluid" />
                </div>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-md-4">
                    <div className="process-step">
                        <div className="circle">
                            <span>Step 1</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="process-step">
                        <div className="circle">
                            <span>Step 2</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="process-step">
                        <div className="circle">
                            <span>Step 3</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
