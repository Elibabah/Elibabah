import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./Carousel.css"


export const SlideProjects = (props) => {

    var items = [
        {
            name: "Cross Ft Ajusco",
            description: "Probably the most random thing you have ever seen!",
            picture: "https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg", 
            alt: "slide 1", 
            repoLink: "https://www.google.com",
            demoLink: "https://www.google.com" 
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            picture: "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg", 
            alt: "slide 2",
            repoLink: "https://www.youtube.com",
            demoLink: "https://www.youtube.com"
        },
        {
            name: "Random Name #3",
            description: "Hi there!",
            picture: "https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg", 
            alt: "slide 3",
            repoLink: "https://www.facebook.com",
            demoLink: "https://www.facebook.com"
        },
        {
            name: "Random Name #4",
            description: "Here Elibabah!",
            picture: "https://img.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg?size=626&ext=jpg", 
            alt: "slide 4",
            repoLink: "https://www.gmail.com",
            demoLink: "https://www.gmail.com"
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