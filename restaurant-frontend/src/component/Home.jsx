import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import { Link } from 'react-router-dom';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); // Cette dépendance vide assure que l'effet ne se déclenche qu'une seule fois lors du montage du composant

    const slides = [
        {
            bgImage: './assets/images/hero-slider-1.jpg',
            subtitle: 'Traditionnel & Hygiénique',
            title: 'For the love of delicious food',
            text: 'Come with family & feel the joy of mouthwatering food',
        },
        {
            bgImage: './assets/images/hero-slider-2.jpg',
            subtitle: 'Expérience délicieuse',
            title: 'Flavors Inspired by the Seasons',
            text: 'Come with family & feel the joy of mouthwatering food',
        },
        {
            bgImage: './assets/images/hero-slider-3.jpg',
            subtitle: 'Étonnant et délicieux',
            title: 'Where every flavor tells a story',
            text: 'Come with family & feel the joy of mouthwatering food',
        },
    ];

    return (
        <section className="hero text-center" aria-label="home" id="home">
            <ul className="hero-slider" data-hero-slider>
                {slides.map((slide, index) => (
                    <li key={index} className={`slider-item ${activeIndex === index ? 'active' : ''}`} data-hero-slider-item>
                        <div className="slider-bg">
                            <img src={slide.bgImage} width="1880" height="950" alt="" className="img-cover" />
                        </div>
                        <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>
                        <h1 className="display-1 hero-title slider-reveal" style={{fontSize:'100px'}}>{slide.title}</h1>
                        <p className="body-2 hero-text slider-reveal" >{slide.text}</p>
                        <Link to={"/service"} className="btn btn-primary slider-reveal">
                            <span className="text text-1">View Our Menu</span>
                            <span className="text text-2" aria-hidden="true">View Our Menu</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
                <IonIcon icon={chevronBack} />
            </button>
            <button className="slider-btn next" aria-label="slide to next" data-next-btn onClick={nextSlide}>
                <IonIcon icon={chevronForward} />
            </button>
            <a href="#reservation" className="hero-btn has-after">
                <img src="./assets/images/hero-icon.png" width="48" height="48" alt="booking icon" />
                <span className="label-2 text-center span">Book A Table</span>
            </a>
        </section>
    );
}
