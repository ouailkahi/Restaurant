import React from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'
import SpecialDish from './SpecialDish'
import Menu from './Menu'

export default function Main() {
  return (
    <main>
        <article>
            <Home/>
            <Service/>
            <About/>
            <SpecialDish/>
            <Menu/>
            <Features/>
            <Reservation/>
        </article>
    </main>
  )
}
