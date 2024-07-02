import React from 'react';
import './ServicesSection.css';

const services = [
    { title: "Audit & Account", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Budget & Projections", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Payroll & Bookkeeping", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Software Training & IT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Tax Planning & Returns", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Management Information", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const ServicesSection = () => {
    return (
        <section className="services-section py-5" id="services">
            <div className="container">
                <h2 className="text-center">Services</h2>
                <div className="row mt-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">{service.title}</h3>
                                    <p className="card-text">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
