import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/notification', { email: email });
            setMessage(response.data.message);
            setEmail('');
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'e-mail : ', error.response.data.message);
            setMessage(error.response.data.message);
        }
    };
    const [contactInfo, setContactInfo] = useState({
        phone: '',
        location: '',
        lunchTimeStart: '',
        lunchTimeEnd: '',
        dinnerTimeStart: '',
        dinnerTimeEnd: '',
        email: ''
    });

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const response = await axios.get('http://localhost:5000/contact');
                const contactData = response.data[0]; // Assuming only one row of contact info
                setContactInfo({
                    phone: contactData.phone,
                    location: contactData.location,
                    lunchTimeStart: contactData.lunch_time_start,
                    lunchTimeEnd: contactData.lunch_time_end,
                    dinnerTimeStart: contactData.dinner_time_start,
                    dinnerTimeEnd: contactData.dinner_time_end,
                    email: contactData.email
                });
            } catch (error) {
                console.error('Erreur lors de la récupération des informations de contact : ', error);
            }
        };

        fetchContactInfo();
    }, []); // Empty dependency array ensures the effect runs only once



    return (
        <footer className="footer section has-bg-image text-center" style={{ backgroundImage: `url('./assets/images/footer-bg.jpg')` }} id="contact">
            <div className="container">
                <div className="footer-top grid-list">
                    <div className="footer-brand has-before has-after">
                        <a href="#" className="logo">
                            <img src="./assets/images/logo.svg" width="160" height="50" loading="lazy" alt="grilli home" />
                        </a>
                        <address className="body-4">
                            {contactInfo.location}
                        </address>
                        <a href={`mailto:${contactInfo.email}`} className="body-4 contact-link">{contactInfo.email}</a>
                        <a href={`tel:${contactInfo.phone}`} className="body-4 contact-link">Booking Request : {contactInfo.phone}</a>
                        <p className="body-4">
                            Open : {contactInfo.lunchTimeStart} - {contactInfo.lunchTimeEnd} | {contactInfo.dinnerTimeStart} - {contactInfo.dinnerTimeEnd}
                        </p>
                        <div className="wrapper">
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                        </div>
                        <p className="title-1">Get News & Offers</p>
                        <p className="label-1">
                            Subscribe us & Get <span className="span">25% Off.</span>
                        </p>
                        <form onSubmit={handleSubmit} className="input-wrapper">
                            <div className="icon-wrapper">
                                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Mettre à jour l'e-mail dans l'état
                                    placeholder="Your email"
                                    autoComplete="off"
                                    className="input-field"
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary">
                                <span className="text text-1">Subscribe</span>
                                <span className="text text-2" aria-hidden="true">Subscribe</span>
                            </button>
                            
                             {/* Afficher le message de succès ou d'erreur */}
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                    <ul className="footer-list">
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Home</a>
                        </li>
                        <li>
                            <Link to={"/service"} className="label-2 footer-link hover-underline">Menus</Link>
                        </li>
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Our Chefs</a>
                        </li>
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Contact</a>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Facebook</a>
                        </li>
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Instagram</a>
                        </li>
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Twitter</a>
                        </li>
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Youtube</a>
                        </li>
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Google Map</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; ouail kahi 2024 | Crafted by <a href="https://github.com/ouailkahi" target="_blank" className="link">Ouail_KAHI</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
