import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import introductionImage from "../images/introduction.jpeg";


const Content = styled.div`
    background-image: ${({ image }) => `url(${image})` };
	background-size: 100% 100%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
	font-size:1.5rem;

	@media (min-width:600px){
		font-size:2rem;
	}

	@media (min-width:800px){
		font-size:2.5rem;
	}

    .front-page-text{
        text-align:center;
		opacity: ${({ opacity }) => opacity};
		transition:opacity 4s;
		position:relative;
		bottom:12vh;

        a{
          color:inherit;
          text-decoration:none;
          font-size:1.2em;
		  margin: 0 5px;
        }

       
    }
`;



const Introduction = () => {

	const [opacity, setOpacity] = useState(0);

	useEffect(()=>{
		setOpacity(1)
	},[])

	return (
		<>
    		<Content  className="background-image" id="introduction" image={introductionImage} opacity={opacity}>
        		<div className="front-page-text">
					<h1>John O'Connor</h1>
					<h2>Web developer</h2>
          			<p>
						<a href="https://github.com/Johnp179"><FontAwesomeIcon icon={brands('github')}/> </a>
						<a href="https://www.linkedin.com/in/john-o-connor-9a459277/"><FontAwesomeIcon icon={brands('linkedin')}/> </a>
           			</p>
        		</div>
    		</Content>
    	</>
  	);
}


export default Introduction;