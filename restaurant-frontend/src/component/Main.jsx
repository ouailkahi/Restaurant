import React from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'
import Menu from './Menu'
import Reservation from './Reservation'
import Features from './Features'
import SpecialDish from './SpecialDish'


export default function Main() {
  return (
    <main>
        <article>
            <Home/>
            {/* <Service/> */}
            <About/>
            <SpecialDish/>
            <Menu/>
            <Features/>
            
            <Reservation/>
            <Features/>
        </article>
    </main>
  )
}
