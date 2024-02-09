
import React, { useState } from 'react';
import axios from 'axios';
import { IonIcon } from '@ionic/react';
import { personOutline, calendarClearOutline, timeOutline } from 'ionicons/icons';
import { useSelector } from 'react-redux';

export default function Reservation() {
    const { data, status } = useSelector((state) => state.contact);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        numberOfPeople: '1',
        reservationDate: '',
        reservationTime: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/reservation', formData);
            console.log(response.data); // Afficher la réponse du serveur
            // Réinitialiser le formulaire après l'enregistrement des données
            setFormData({
                name: '',
                phone: '',
                numberOfPeople: '1',
                reservationDate: '',
                reservationTime: '',
                message: ''
            });
            alert('Booking successful!');
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement des données de réservation : ', error);
            alert('Booking failed. Please try again later.');
        }
    };



    return (
        <>
            <section className="section testi text-center has-bg-image" style={{ backgroundImage: `url('./assets/images/testimonial-bg.jpg')` }} aria-label="testimonials" >
                <div className="container">
                    <div className="quote">”</div>
                    <p className="headline-2 testi-text">
                        I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
                    </p>
                    <div className="wrapper">
                        <div className="separator"></div>
                        <div className="separator"></div>
                        <div className="separator"></div>
                    </div>
                    <div className="profile">
                        <img src="./assets/images/testi-avatar.jpg" width="100" height="100" loading="lazy" alt="Sam Jhonson" className="img" />
                        <p className="label-2 profile-name">Sam Jhonson</p>
                    </div>
                </div>
            </section>
            <section className="reservation" id='reservation'>
                <div className="container">
                    <div className="form reservation-form bg-black-10">

                        <form onSubmit={handleSubmit} className="form-left">
                            <h2 className="headline-1 text-center">Online Reservation</h2>
                            <p className="form-text text-center">
                                Booking request <a href="tel:+88123123456" className="link">+88-123-123456</a> or fill out the order form
                            </p>
                            <div className="input-wrapper">
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" autoComplete="off" className="input-field" />
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" autoComplete="off" className="input-field" />
                            </div>
                            <div className="input-wrapper">
                                <div className="icon-wrapper">
                                    <IonIcon icon={personOutline} />
                                    <select name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} className="input-field">
                                        <option value="1">1 Person</option>
                                        <option value="2">2 Person</option>
                                        {/* Ajoutez les autres options ici */}
                                    </select>
                                    <ion-icon name="chevron-down"></ion-icon>
                                </div>
                                <div className="icon-wrapper">
                                    <IonIcon icon={calendarClearOutline} />
                                    <input
                                        type="date"
                                        name="reservationDate"
                                        value={formData.reservationDate}
                                        onChange={handleChange}
                                        className="input-field"
                                        min={new Date().toISOString().split("T")[0]} // Spécifiez une date minimale si nécessaire
                                    />
                                    <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                                </div>
                                <div className="icon-wrapper">
                                    <IonIcon icon={timeOutline} />
                                    <select name="reservationTime" value={formData.reservationTime} onChange={handleChange} className="input-field">
                                        <option value="08:00am">08 : 00 am</option>
                                        <option value="09:00am">09 : 00 am</option>
                                        <option value="10:00am">10 : 00 am</option>
                                        <option value="11:00am">11 : 00 am</option>
                                        <option value="12:00am">12 : 00 am</option>
                                        <option value="01:00pm">01 : 00 pm</option>
                                        <option value="02:00pm">02 : 00 pm</option>
                                        <option value="03:00pm">03 : 00 pm</option>
                                        <option value="04:00pm">04 : 00 pm</option>
                                        <option value="05:00pm">05 : 00 pm</option>
                                        <option value="06:00pm">06 : 00 pm</option>
                                        <option value="07:00pm">07 : 00 pm</option>
                                        <option value="08:00pm">08 : 00 pm</option>
                                        <option value="09:00pm">09 : 00 pm</option>
                                        <option value="10:00pm">10 : 00 pm</option>
                                    </select>
                                    <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                                </div>
                                {/* Ajoutez les deux autres div avec des icônes et des sélecteurs ici */}
                            </div>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" autoComplete="off" className="input-field"></textarea>
                            <button type="submit" className="btn btn-secondary">
                                <span className="text text-1">Book A Table</span>
                                <span className="text text-2" aria-hidden="true">Book A Table</span>
                            </button>
                        </form>

                        <div className="form-right text-center" style={{ backgroundImage: `url('./assets/images/form-pattern.png')` }}>
                            <h2 className="headline-1 text-center">Contact Us</h2>
                            <p className="contact-label">Booking Request</p>
                            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">{data.phone}</a>
                            <div className="separator"></div>
                            <p className="contact-label">Location</p>
                            <address className="body-4">
                                {data.location}
                            </address>
                            <p className="contact-label">Lunch Time</p>
                            <p className="body-4">
                                {data.lunch_time_start}<br/>
                                {data.lunch_time_end}
                            </p>
                            <p className="contact-label">Dinner Time</p>
                            <p className="body-4">
                            {data.dinner_time_start}<br/>
                            {data.dinner_time_end}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
