import React from 'react'
import "./Home.css"
import Typical from 'react-typical'

export const Home = () => {

  let ojo = document.querySelector(".ojo")
  let punto = document.querySelector(".punto")

  document.onmousemove = (e) => {
    let x = e.clientX * 100 / window.innerWidth + "%"
  
    let y = e.clientY * 100 / window.innerHeight + "%"

    punto.style.left = x;
    punto.style.top = y;
  }

  return (

    <div className='Home'>

    <aside className='asideHome'>
      <div className='ojo'>
        <div className='punto'></div>
      </div>
    </aside>
    <header className='headerHome'>Hello, World!</header>
    <main className="mainHome">Hi, There! I'm Elías Hernández <p>Elibabah</p>
      <Typical
        loop={Infinity}
        steps={[
          "React frontend developer",
          1500,
          "Responsive designer",
          1500,
          "Linguist",
          1500,
          "Father",
          1500,
        ]}
      />
    </main>
    <footer className="footerHome"></footer>
    </div>
  )
}