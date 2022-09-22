import styled from 'styled-components';
import { forwardRef } from 'react';

const Container = styled.div`
	background-color:grey;
	background-size: 100% 100%;
	font-size:1.4rem;
	display:flex;
	flex-direction: column;
  	align-items:center;
	justify-content: center;


	@media (min-width:600px){
		font-size:1.6rem;
	} 

	@media (min-width:1000px){
		font-size:2rem;
	}

	@media (min-width:1400px){
		font-size:2.5rem;
	}

`;

const StyledAbout = styled.div`
	background-color: black;
	border-radius:0.5em;
	padding:1.5em;
	width:80vw;
	margin:1em 0;
	color:white;

		h1{
			text-align:center;
		}

		p{
			padding:1em 0;
		}

		div{
			text-align: center;

			a{
				padding:0.5em;
				border:1px solid white;
				color:inherit;
				display: inline-block;
				text-decoration:none;
				border-radius:0.2em;

				&:hover{
					background-color: white;
					color:black;
				}
			}

		}
	
`;


const Skills = styled.div`
  	color:white;
  	padding:1em;
  	border-radius: 0.5rem;

	div{
		background-color: black;
		color:white;
		padding:0.5em;
		width: 8em;
		text-align: center;
		border-radius: 0.25em;
		margin: 0.4em;
	}
`;





const About = forwardRef(({ baseURL }, ref) => {

	return (

		<Container className="background-image" id="about" ref={ref}>
			<StyledAbout>
				
					<h1>About</h1>
					<p>
						Hi! My name is John; I am an aspiring web developer living in Dublin, Ireland.

						Initially, I studied mechanical engineering as I had an uptidude for maths. After 3 years of this, I was offered the oppurtunity to study biomedical engineeering, and, as I am interested in physiology, I decided to take it. My thesis focused on digital holography: an optical technique which can be used to analyze cells in three dimensions. I found it to be a compelling topic which is why, subsequent to my graduation, I studied it for a further 2 months in Ilmenau, Germany.

						My first job after college was as a project engineer in BOC gases (a company which specializes in the profuction of industrial and medical grade gases). Working there equipped me with a wide variety of skills: communicaton, project management, sales and managing client's expectations. While I enjoyed my time at this componay, I decided to leave after 7 years as I have always been passionate about software.

						To see some of the websites I have built, check out the projects section below. Desktop and laptop users can hover over the images to reveal more info; mobile users will need to click them.

						Outside of programming I enjoy going to the gym, tennis and, of course, socialising with friends.

						If you have any queries, please drop me a message via the form at the bottom of the page.
					</p>
					<div>
						<a href={`${baseURL}downloads/John-CV.pdf`} target="_blank"   >View CV</a>  
					</div>
				
			</StyledAbout>


			<Skills>
				<div>JavaScript</div>
				<div>TypeScript</div>
				<div>HTML/CSS</div>
				<div>React</div>
				<div>Phaser</div>
				<div>Node</div>
				<div>Express</div>
				<div>MongoDB</div>
			</Skills>
		</Container>
	
	);
})

export default About;