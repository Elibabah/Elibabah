import React from 'react'
import "./Home.css"
import Typical from 'react-typical'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

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
    <header className='headerHome'></header>
    <main className="mainHome">
      <h1 className='hello'>Hello, World!</h1>
      <h2 className='Im'>I'm<p className='name'>Elías Hernández</p></h2>
      {/*<h3 className='elibabah'>(Elibabah)</h3>*/}
        <h4 className='types'>      
        <Typical
        loop={Infinity}
        steps={[
          "Frontend developer ⚛",
          1500,
          "Responsive designer 💻 📱",
          1500,
          "Linguist",
          1500,
          "Father",
          1500,
        ]}
      /></h4>
    <a href="Elias_Hernandez_resume_eng.pdf" target="_blank" download='Elias_Hernandez_resume_eng.pdf'>
    <button className="btn btn-resume"><FileDownloadOutlinedIcon/> Resume</button></a>
    
    </main>
    <footer className="footerHome"></footer>
    </div>
  )
}