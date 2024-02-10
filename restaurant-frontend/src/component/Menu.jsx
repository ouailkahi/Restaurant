import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Menu() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

  const { repas, status } = useSelector(state => state.repas)

  useEffect(() => {
    if (status === "succeeded") {
      console.log(repas);
    }
  }, [status])
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>
        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>
        <ul className="grid-list">

          {repas.slice(0, 4).map(value => (
            <li key={value.id}>
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
                  <img src={value.photo} width="100" height="100" loading="lazy" alt="Greek Salad" className="img-cover" />
                </figure>
                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">{value.nom}</a>
                    </h3>
                    <span className="badge label-1">{value.type}</span>
                    <span className="span title-2">{value.prix}</span>
                  </div>
                  <p className="card-text label-1">
                    {value.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="menu-text text-center">
          During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
        </p>
        <Link to={"/service"} className="btn btn-primary" onClick={scrollToTop}>
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">View All Menu</span>
        </Link>
        <img src="./assets/images/shape-5.png" width="921" height="1036" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
        <img src="./assets/images/shape-6.png" width="343" height="345" loading="lazy" alt="shape" className="shape shape-3 move-anim" />
      </div>
    </section>
  );
}

export default Menu;
