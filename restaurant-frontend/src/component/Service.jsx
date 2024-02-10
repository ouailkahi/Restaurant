import React from 'react';
import { Link } from 'react-router-dom';



export default function Service() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const photo = [
  {
    title: 'breakfasts',
    image: "../assets/images/service-1.jpg"
  },
  {
    title: 'appetizers',
    image: "../assets/images/service-2.jpg"
  },
  {
    title: 'drinks',
    image: "../assets/images/service-3.jpg"
  }
]
  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>
        <h2 className="headline-1 section-title">We Offer Top Notch</h2>
        <p class="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys
          standard dummy text ever.
        </p>

        <ul className="grid-list">
          {photo.map((value, index) => (
            <li key={index}>
              <div className="service-card">
                <Link to={"/route/" + value.title} className="has-before hover:shine" onClick={scrollToTop}>
                  <figure className="card-banner img-holder" style={{ width: '285px', height: '336px' }}>
                    <img
                      src={value.image}
                      width="285"
                      height="336"
                      loading="lazy"
                      alt="Breakfast"
                      className="img-cover"
                    />
                  </figure>
                </Link>
                <div className="card-content">
                  <h3 className="title-4 card-title" >
                    <p>{value.title}</p>
                  </h3>
                  <Link to={"/route/" + value.title} className="btn-text hover-underline label-2" onClick={scrollToTop}>
                    View Menu
                  </Link>
                </div>
              </div>
            </li>
          ))}


        </ul>
        <img src="./assets/images/shape-1.png" width="246" height="412" loading="lazy" alt="shape" className="shape shape-1 move-anim" />
        <img src="./assets/images/shape-2.png" width="343" height="345" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
      </div>
    </section>
  );
}
