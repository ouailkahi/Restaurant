import React from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'
import SpecialDish from './SpecialDish'
import Features from './Features'
import Reservation from './Reservation'
import Menu from './Menu'

export default function Main() {
  return (
    <main>
        <article>
            <Home/>
            {/* <Service/> */}
            <section id="about-section">
          <About />
        </section>
            <SpecialDish/>
            <Menu/>
            <Features/>
            <Reservation/>
            
        </article>
    </main>
  )
}
