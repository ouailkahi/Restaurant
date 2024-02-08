import React from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'
import Reservation from './Reservation'

export default function Main() {
  return (
    <main>
        <article>
            <Home/>
            <Service/>
            <About/>
            
            <Reservation/>
        </article>
    </main>
  )
}
