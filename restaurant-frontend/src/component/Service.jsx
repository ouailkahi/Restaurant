import React from 'react';

const photo =[
    {
        title:'breakfast',
        image:"./assets/images/service-1.jpg"
    },
    {
        title:'Appetizers',
        image:"./assets/images/service-2.jpg"
    },
    {
        title:'Drinks',
        image:"./assets/images/service-3.jpg"
    }
]

export default function Service() {
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
            {photo.map((value,index)=>(
                <li key={index}>
                <div className="service-card">
                  <a href="#" className="has-before hover:shine">
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
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">{value.title}</a>
                    </h3>
                    <a href="#" className="btn-text hover-underline label-2">
                      View Menu
                    </a>
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
