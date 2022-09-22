import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import styled from 'styled-components';

const StyledProject = styled.div`
    position:relative;
    width:60vw;
    height:30vh;
    margin:1em;
    border-radius:0.5em;
    font-size:1.15rem;

    @media (min-height:700px){
		font-size:1.3rem;
	}

    @media (min-width:550px){
		font-size:1.6rem;
	}


    @media (min-width:800px){
        width:50vw;
	}

    @media (min-width:1200px){
        font-size:2rem;
        height:50vh;
    }

    @media (min-width:1400px){
        font-size:2.5rem;
      
    }


    &:hover .details{
        height:100%;
    }

    img{
        width:100%;
        height:100%;
        border-radius: inherit;
        background-color: grey;
     
    }

    .details{
        width:100%;
        height:${({ desciptionHeight }) => desciptionHeight};
        background-color:#232b2b;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        top:0;
        left:0;
        transition:height 0.5s;
        overflow:hidden;
        border-radius: inherit;
        padding:0 0.5em;

        button{
            position: absolute;
            top:0;
            right:0.2em;
            font-size:1.5em;
            padding:0.3em;
            background-color: transparent;
            color:inherit;
            border:none;

        }


        .title{
            text-align:center;
            font-size:1.4em;
            text-decoration: underline;
        }
       
        p{
            margin:10px 5px;

            span{
                font-weight: bold;
            }
        }

        .link-container{
            text-align:center;
            position: relative;
            top:1em;

            a{
                color:white;
                background-color:inherit;
                text-decoration:none;
                border:0.1em solid white;
                border-radius:0.3em;
                padding:0.4em;
                margin: 0 0.6em;
                font-weight: bold;

                &:hover{
                    color:black;
                    background-color:white;
                }
            }
        
        }

    }

`;


const Project = ({title, about, techStack, image, gitHub, website}) => {

    const [desciptionHeight, setDescriptionHeight] = useState("0%");

    const isTouchEnabled = () => {
        return ( 'ontouchstart' in window ) ||( navigator.maxTouchPoints > 0 ) ||
       ( navigator.msMaxTouchPoints > 0 );
    }
 
    const openProjectDetails = ()=> {
        isTouchEnabled() && setDescriptionHeight("100%");
    };

    const closeProjectDetails = ()=> {
        setDescriptionHeight("0%");
    };

    return (
        <StyledProject desciptionHeight={desciptionHeight}>
            <img image={image} onClick={openProjectDetails} />
            <div className="details">
                <div>
                    { isTouchEnabled() && <button onClick={closeProjectDetails} ><FontAwesomeIcon icon={solid("xmark")}/></button>}
                    <h4 className="title">{title}</h4>
                    <p><span>About: </span>{about}</p>
                    <p><span>Stack: </span>{techStack}</p>
                    <div className="link-container">
                        <a href={website} target="_blank" >Launch</a>
                        <a href={gitHub}  target="_blank"  >Github</a>
                </div>
            </div>
        </div>
        </StyledProject >

    );
}

export default Project;