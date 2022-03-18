import React from 'react'
import "./Home.css"

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
    <div>
      <div className='ojo'>
        <div className='punto'></div>
      </div>
    </div>
  )
}