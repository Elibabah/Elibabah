import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./Carousel.css"

export const SlideProjects = (props) => {

    var items = [
        {
            name: "Cross Ft Ajusco",
            description: "Cross Ft Ajusco",
            picture: "https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg", 
            alt: "Cross Fit Ajusco", 
            repoLink: "https://github.com/albertoouu/crossfit_ajusco",
            demoLink: "https://albertoouu.github.io/crossfit_ajusco/" 
        },
        {
            name: "Pachamama",
            description: "Network",
            picture: "https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/Projects/pachamama.jpg", 
            alt: "Pachamama",
            repoLink: "https://github.com/Elibabah/pachamama",
            demoLink: "https://elibabah.github.io/pachamama/"
        },
        {
            name: "Schedule To Do",
            description: "Schedule To Do",
            picture: "https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/Projects/schedule2.jpg", 
            alt: "Schedule To Do",
            repoLink: "https://github.com/Elibabah/technicalChallenge_2ndBlock",
            demoLink: "https://elibabah.github.io/technicalChallenge_2ndBlock/src/login.html"
        },
        {
            name: "Visitors reception",
            description: "Visitors Reception Coworking App",
            picture: "https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/Projects/coworking.jpg", 
            alt: "Visitors reception",
            repoLink: "https://github.com/Elibabah/07_Visitors_Reception",
            demoLink: "https://elibabah.github.io/07_Visitors_Reception/src/index.html"
        },
        {
            name: "Mexflix",
            description: "Mexflix Movie App",
            picture: "https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/Projects/mexflix2.jpg", 
            alt: "slide 4",
            repoLink: "https://github.com/Elibabah/Mexflix",
            demoLink: "https://elibabah.github.io/Mexflix/src/index.html"
        },
        {
            name: "Caesar Cipher",
            description: "Cipher",
            picture: "https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/Projects/cipher.jpg", 
            alt: "slide 4",
            repoLink: "https://github.com/Drancer55/03_SecurityCypher-",
            demoLink: "https://drancer55.github.io/03_SecurityCypher-/src/index.html"
        },
        {
            name: "Musical Keyboard",
            description: "Musical Keyboard",
            picture: "https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/Projects/keyboard.jpg", 
            alt: "Musical Keyboard",
            repoLink: "https://github.com/Elibabah/01_MusicalKeyBoard_project",
            demoLink: "https://elibabah.github.io/01_MusicalKeyBoard_project/index.html"
        },
        {
            name: "Memory Game",
            description: "Memory Game",
            picture: "https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/Projects/memory.jpg", 
            alt: "Memory Game",
            repoLink: "https://github.com/Elibabah/Memory-Game",
            demoLink: "https://elibabah.github.io/Memory-Game/src/index.html"
        },
        {
            name: "Trivia Studio Ghibli",
            description: "Trivia",
            picture: "https://raw.githubusercontent.com/Elibabah/elibabah/release/src/assets/Components/Projects/trivia.jpg", 
            alt: "Trivia Studio Ghibli",
            repoLink: "https://github.com/Elibabah/Trivia",
            demoLink: "https://elibabah.github.io/Trivia/"
        }
    ]

    return (
        <Carousel className='Carousel'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

const Item = (props) => {
    return (
        <div className="rotate">

        <Paper className='Paper'>
            <h5 className='repoName'>{props.item.name}</h5>
            <image>
            <a href={props.item.demoLink} target="_blank">
                <img className="d-block w-100"
                src={props.item.picture}
                alt={props.item.alt}
                />
            </a>
            </image>
            <p className="description">{props.item.description}</p>
            <a href={props.item.repoLink} target="_blank" className='repo'>
                <Button className="CheckButton">
                    View code
                </Button>
            </a>
        </Paper>
        </div>
    )
}