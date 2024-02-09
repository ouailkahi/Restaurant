import React from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'
import SpecialDish from './SpecialDish'
import Features from './Features'
import Menu from './Menu'
import Reservation from './Reservation'

export default function Main() {
  return (
    <main>
        <article>
            <Home/>
            {/* <Service/> */}
            <About/>
            <SpecialDish/>
            <Menu/>
            
            <Reservation/>
            <Features/>
        </article>
    </main>
  )
}
