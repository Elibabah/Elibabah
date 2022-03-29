import React from 'react'
import "./Home.css"
import Typical from 'react-typical'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export const Home = () => {
  return (

  <div className='Home'>
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
    <a href="Elibabah_english.pdf" target="_blank" download='Elibabah_english.pdf'>
    <button className="btn btn-resume"><FileDownloadOutlinedIcon/> Resume</button></a>
    </main>
    </div>
  )
}