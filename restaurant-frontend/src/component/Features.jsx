import React from 'react';

function Features() {

    const list = [
        {
            icon: "./assets/images/features-icon-1.png",
            title: "Hygienic Food",
            description: "Lorem Ipsum is simply dummy printing and typesetting"
        },
        {
            icon: "./assets/images/features-icon-2.png",
            title: "Hygienic Food",
            description: "Lorem Ipsum is simply dummy printing and typesetting"
        },
        {
            icon: "./assets/images/features-icon-3.png",
            title: "Skilled Chefs",
            description: "Lorem Ipsum is simply dummy printing and typesetting"
        },
        {
            icon: "./assets/images/features-icon-4.png",
            title: "Event & Party",
            description: "Lorem Ipsum is simply dummy printing and typesetting"
        }
    ]
    return (
        <section className="section features text-center" aria-label="features">
            <div className="container">
                <p className="section-subtitle label-2">Why Choose Us</p>
                <h2 className="headline-1 section-title">Our Strength</h2>
                <ul className="grid-list">

                    {list.map((value, index) => (
                        <li key={index} className="feature-item">
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img src={value.icon} width="100" height="80" loading="lazy" alt="icon" />
                                </div>
                                <h3 className="title-2 card-title">{value.title}</h3>
                                <p className="label-1 card-text">{value.description}</p>
                            </div>
                        </li>
                    ))}


                </ul>
                <img src="./assets/images/shape-7.png" width="208" height="178" loading="lazy" alt="shape" className="shape shape-1" />
                <img src="./assets/images/shape-8.png" width="120" height="115" loading="lazy" alt="shape" className="shape shape-2" />
            </div>
        </section>
    );
}

export default Features;
