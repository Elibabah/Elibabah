import "./About.css"
import {SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiMaterialui, SiWebpack, SiBabel, SiChartdotjs, SiPlaycanvas, SiGnubash, SiGit, SiGithub, SiFirebase, SiJest, SiMarkdown, SiLinux, SiWindows, SiTailwindcss, SiNpm } from "react-icons/si";
import {BsKanbanFill} from "react-icons/bs"
import Typical from 'react-typical'


function About() {

  const style = { width: '100%', height: '2em'}
  return (
    <div className="About">

      <div className="headerDes">
      <Typical
        steps={[
          "Hi there! I am Elibabah, and my passions, besides software, are literature, philosophy, mathematics and physics.",
          1500,
          "Hi there! I am Elibabah. I am a frontend developer and I  have interest in Data Science and Artificial Intelligence.",
          1500,
        ]}
      />
      </div>

<div className="picture">
  <img className="photo" src="https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/About/Elibaba's%20photo.jpg"/>
  <div className="details">
    <ul>
      <li><a href="https://www.freecodecamp.org/certification/elibabah/responsive-web-design" target="blank" className="certifica">Responsive Web Design</a></li>
      <li><a href="https://www.freecodecamp.org/certification/elibabah/javascript-algorithms-and-data-structures" target="blank" className="certifica">JavaScript, Algorithms and Data Structures</a></li>
      <li><a href="#" target="blank" className="certifica">React frontend development libraries</a></li>
    </ul>
  </div>
  

</div>

    <tech className="hardskills">

<div className="uno">       
  <button className="btn-skills">
    <a id="react" href="https://reactjs.org/" target="_blank" ><SiReact style={style}/> <span className="enlaces">ReactJs</span> </a>
  </button></div>
<div className="dos">
<button className="btn-skills">
            <a id="javascript" href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" ><SiJavascript style={style}/> <span className="enlaces">JavaScript</span> </a>
        </button>
</div>
<div className="tres">
<button className="btn-skills">
          <a id="html" href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" ><SiHtml5 style={style} /> <span className="enlaces">HTML5</span> </a>
        </button>
</div>
<div className="cuatro">
<button className="btn-skills">
            <a id="css" href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" ><SiCss3 style={style}/> <span className="enlaces">CSS3</span> </a>
        </button>
</div>
<div className="cinco">
<button className="btn-skills">
          <a id="webpack" href="https://webpack.js.org/" target="_blank" ><SiWebpack style={style} /> <span className="enlaces">Webpack</span> </a>
        </button>
</div>
<div className="seis">
<button className="btn-skills">
          <a id="babel" href="https://babeljs.io/" target="_blank" ><SiBabel style={style} /> <span className="enlaces">Babel</span> </a>
        </button>
</div>
<div className="siete">
<button className="btn-skills">
          <a id="chart" href="https://www.chartjs.org/" target="_blank" ><SiChartdotjs style={style} /> <span className="enlaces">Chart.js</span> </a>
        </button>
</div>
<div className="ocho"><button className="btn-skills">
          <a id="canvas" href="https://canvasjs.com/" target="_blank" ><SiPlaycanvas style={style} /> <span className="enlaces">Canvas.js</span> </a>
        </button></div>
<div className="nueve">
<button className="btn-skills">
          <a id="gnu" href="https://www.gnu.org/software/bash/" target="_blank" ><SiGnubash style={style} /> <span className="enlaces">GNU Bash</span> </a>
        </button>
</div>
<div className="diez">
<button className="btn-skills">
          <a id="git" href="https://git-scm.com/" target="_blank" ><SiGit style={style} /> <span className="enlaces">Git</span> </a>
        </button>
</div>
<div className="once"><button className="btn-skills">
          <a id="github" href="https://github.com/" target="_blank" ><SiGithub style={style} /> <span className="enlaces">GitHub</span> </a>
        </button>
        </div>
<div className="doce">
<button className="btn-skills">
          <a id="firebase" href="https://firebase.google.com/" target="_blank" ><SiFirebase style={style} /> <span className="enlaces">Firebase</span> </a>
        </button>
</div>
<div className="trece">
  <button className="btn-skills">
          <a id="jest" href="https://jestjs.io/" target="_blank" ><SiJest style={style} /> <span className="enlaces">Jest</span> </a>
        </button>
        </div>
<div className="catorce">
  <button className="btn-skills">
            <a id="bootstrap" href="https://getbootstrap.com" target="_blank" ><SiBootstrap style={style}/> <span className="enlaces">Bootstrap</span> </a>
        </button>
        </div>
<div className="quince">
  <button className="btn-skills">
          <a id="material" href="https://mui.com/" target="_blank" ><SiMaterialui style={style} /> <span className="enlaces">MaterialUI</span> </a>
        </button>
        </div>
<div className="dieciseis">
  <button className="btn-skills">
          <a id="Tailwindcss" href="https://tailwindcss.com/" target="_blank" ><SiTailwindcss style={style} /> <span className="enlaces">Tailwindcss</span> </a>
        </button>
        </div>
<div className="diecisiete"><
  button className="btn-skills">
          <a id="linux" href="https://www.linux.org/" target="_blank" ><SiLinux style={style} /> <span className="enlaces">Linux</span> </a>
        </button>
        </div>
<div className="dieciocho">
<button className="btn-skills">
          <a id="Kanban" href="https://ora.pm/" target="_blank" ><BsKanbanFill style={style} /> <span className="enlaces">Kanban</span> </a>
        </button>

</div>
<div className="diecinueve">
  <button className="btn-skills">
          <a id="markdown" href="https://www.markdownguide.org/" target="_blank" ><SiMarkdown style={style} /> <span className="enlaces">Markdwon</span> </a>
        </button>
        </div>
<div className="veinte">
<button className="btn-skills">
          <a id="npm" href="https://www.npmjs.com/" target="_blank" ><SiNpm style={style} /> <span className="enlaces">npm</span> </a>
        </button>
</div>





      {/*<div>
      <p>Frontend development:</p>
        <button className="btn-skills">
            <a id="react" href="https://reactjs.org/" target="_blank" ><SiReact style={style}/> <span className="enlaces">ReactJs</span> </a>
        </button>
        <button className="btn-skills">
            <a id="javascript" href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" ><SiJavascript style={style}/> <span className="enlaces">JavaScript</span> </a>
        </button>
        <button className="btn-skills">
          <a id="html" href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" ><SiHtml5 style={style} /> <span className="enlaces">HTML5</span> </a>
        </button>
        <button className="btn-skills">
            <a id="css" href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" ><SiCss3 style={style}/> <span className="enlaces">CSS3</span> </a>
        </button>
        <button className="btn-skills">
          <a id="webpack" href="https://webpack.js.org/" target="_blank" ><SiWebpack style={style} /> <span className="enlaces">Webpack</span> </a>
        </button>
        <button className="btn-skills">
          <a id="babel" href="https://babeljs.io/" target="_blank" ><SiBabel style={style} /> <span className="enlaces">Babel</span> </a>
        </button>
      </div>
      <div>Data visualization:
        <button className="btn-skills">
          <a id="chart" href="https://www.chartjs.org/" target="_blank" ><SiChartdotjs style={style} /> <span className="enlaces">Chart.js</span> </a>
        </button>
        <button className="btn-skills">
          <a id="canvas" href="https://canvasjs.com/" target="_blank" ><SiPlaycanvas style={style} /> <span className="enlaces">Canvas.js</span> </a>
        </button>
      </div>
      <div>Devops:
        <button className="btn-skills">
          <a id="gnu" href="https://www.gnu.org/software/bash/" target="_blank" ><SiGnubash style={style} /> <span className="enlaces">GNU Bash</span> </a>
        </button>
        <button className="btn-skills">
          <a id="git" href="https://git-scm.com/" target="_blank" ><SiGit style={style} /> <span className="enlaces">Git</span> </a>
        </button>
        <button className="btn-skills">
          <a id="github" href="https://github.com/" target="_blank" ><SiGithub style={style} /> <span className="enlaces">GitHub</span> </a>
        </button>
      </div>
      <div>Backend as a service:
        <button className="btn-skills">
          <a id="firebase" href="https://firebase.google.com/" target="_blank" ><SiFirebase style={style} /> <span className="enlaces">Firebase</span> </a>
        </button>
      </div>
      <div>Testing:
        <button className="btn-skills">
          <a id="jest" href="https://jestjs.io/" target="_blank" ><SiJest style={style} /> <span className="enlaces">Jest</span> </a>
        </button>
      </div>
      <div>SDLC:
        <button className="btn-skills">
          <a id="Kanban" href="https://ora.pm/" target="_blank" ><BsKanbanFill style={style} /> <span className="enlaces">Kanban</span> </a>
        </button>
        <button className="btn-skills">
          <a id="markdown" href="https://www.markdownguide.org/" target="_blank" ><SiMarkdown style={style} /> <span className="enlaces">Markdwon</span> </a>
        </button>
      </div>
      <div>UI:
        <button className="btn-skills">
            <a id="bootstrap" href="https://getbootstrap.com" target="_blank" ><SiBootstrap style={style}/> <span className="enlaces">Bootstrap</span> </a>
        </button>
        <button className="btn-skills">
          <a id="material" href="https://mui.com/" target="_blank" ><SiMaterialui style={style} /> <span className="enlaces">MaterialUI</span> </a>
        </button>
        <button className="btn-skills">
          <a id="Tailwindcss" href="https://tailwindcss.com/" target="_blank" ><SiTailwindcss style={style} /> <span className="enlaces">Tailwindcss</span> </a>
        </button>
      </div>
      <div>operating systems:
        <button className="btn-skills">
          <a id="linux" href="https://www.linux.org/" target="_blank" ><SiLinux style={style} /> <span className="enlaces">Linux</span> </a>
        </button>
        <button className="btn-skills">
          <a id="windows" href="https://www.microsoft.com/en-us/windows" target="_blank" ><SiWindows style={style} /> <span className="enlaces">Windows</span> </a>
        </button>
      </div>*/}
    </tech>

    <soft className="softskills">soft</soft>

    
    </div>
  );
}

export default About;
