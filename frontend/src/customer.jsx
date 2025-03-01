import React from "react";
import "./customer.css";
import { FaUserCircle } from "react-icons/fa";

const CustomerReview = () => {
    return (
        <section className="customer-review">
            {/* Floating dots for animation */}
            <div className="floating-dots dot-1"></div>
            <div className="floating-dots dot-2"></div>
            <div className="floating-dots dot-3"></div>
            <div className="floating-dots dot-4"></div>
            <div className="floating-dots dot-5"></div>

            <div className="review-container">
                <div className="review-text">
                   
                    <h2 className="section-heading">What Our Clients Say</h2>
                    <p className="testimonial-description">
                        7 Shouters Media stays ahead of the curve with digital marketing trends.
                    </p>
                </div>
                <div className="review-card">
                    <blockquote>
                        "These guys are incredible. They've helped us to grow our business and now the biggest problem we seem to come across is having too much business - which is the ideal problem to have. We are right where we wanted to be and Thrive made that possible. Thanks guys!"
                    </blockquote>
                    <div className="customer-info">
                        <FaUserCircle className="customer-icon" size={60} />
                        <div>
                            <p className="customer-name">Biltu Debnath</p>
                            <p className="customer-company">Hostasia.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;
