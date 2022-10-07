import styled from 'styled-components';
import { useState, forwardRef } from "react";
import barChartImage from "../images/bar-chart.png";
import spaceImage from "../images/space-game.jpg";
import passwordManagerImage from "../images/password-manager.webp";
import Project from './Project.js';

const Container = styled.div`
    background-color:grey;
    background-size: 100% 100%;
    color:white;
    font-size:1.5rem;

    @media (min-width:800px){
		font-size:2rem;
	}

    @media (min-width:1200px){
        height:100vh;
    } 

    @media (min-width:1400px){
        font-size:3.5rem;
      
    }

    h1{
        text-align: center;
    }

    .projects{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 95%;

        @media (min-width:1200px){
            flex-direction: row;
            justify-content: center;
	    }
    }

`;


const Projects = forwardRef(({ lazyLoadImage }, ref) => {

    const [projectsList] = useState([
        {
            title:"Password Manager",
            about:"App which can be used to store encrypted passwords.",
            techStack:"JavaScript, React, HTML/CSS, Node, Express.", 
            image:passwordManagerImage,
            lazyLoadImage,
            gitHub: "https://github.com/Johnp179/securi-pass",
            website: "https://securi-pass.herokuapp.com",
        },
  
        {
            title:"Space Game",
            about:"Arcade style game which incorporates a high-score table and form.",
            techStack:"JavaScript, Phaser, HTML/CSS, Node, Express.", 
            image:spaceImage,
            lazyLoadImage,
            gitHub: "https://github.com/Johnp179/space-game",
            website: "https://space-game2133.herokuapp.com/",
        },
        {
            title:"Bar-chart generator",
            about:"Responsive web app which can be used to generate bar-charts.",
            techStack:"JavaScript, HTML/CSS, Node, Express.",
            image:barChartImage,
            lazyLoadImage,
            gitHub: "https://github.com/Johnp179/bar-chart-generator",
            website: "https://bar-chart-generator.herokuapp.com",
        },
    ])
  
    
    return (
        <Container className="background-image" id="projects" ref={ref} >
            <h1>Projects</h1>
            <div className="projects">
                {projectsList.map((project, index) => (
                    <Project 
                        key={index}
                       {...project}
                    />
                ))}
            </div>
        </Container>
    );
})

export default Projects;