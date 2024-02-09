import React from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'

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
