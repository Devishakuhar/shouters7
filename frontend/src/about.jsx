import React from "react";
import './about.css';
import { FaCode, FaChartLine, FaPalette, FaVideo, FaSearch, FaServer } from "react-icons/fa";



const services = [
    { icon: <FaChartLine />, title: "Proven Expertise", description: "We have successfully achieved many milestones of lead generation and first page rankings.", link: "/expertise" },
    { icon: <FaCode />, title: "Web, Apps & Software Development", description: "We are a reputed Website & App Development company in Bhilwara, India.", link: "/development" },
    { icon: <FaPalette />, title: "Graphics Design", description: "We have delivered highly creative logo designs and branding.", link: "/graphics" },
    { icon: <FaVideo />, title: "Video Promotion", description: "Raise a promotional video to grow your business and attract new customers.", link: "/video-promotion" },
    { icon: <FaSearch />, title: "SEO", description: "7 Shouters Media is a leading Search Engine Optimization service provider in Bhilwara.", link: "/seo" },
    { icon: <FaServer />, title: "Hosting", description: "Our team ensures your website stays up and running anytime.", link: "/hosting" },
];

const AboutUs = () => {
    return (
        <section className="about-us">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <a key={index} href={service.link} className="service-card">
                        <div className="icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </a>
                ))}

        
            </div>
        </section>
    );
};

export default AboutUs;
