import styled from 'styled-components';
import { forwardRef } from 'react';

const Container = styled.div`
	background-image: ${({ lazyLoadImage }) => `url(${lazyLoadImage})`};
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
			font-size: 0.9em;
		}

		div{
			text-align: center;

			p{
				text-align: left;
			}

			a{
				padding:0.5em;
				border:1px solid white;
				color:inherit;
				display: inline-block;
				text-decoration:none;
				border-radius:0.2em;
				text-align: center;
				

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



const About = forwardRef(({ baseURL, lazyLoadImage }, ref) => {

	return (

		<Container lazyLoadImage={lazyLoadImage}  className="background-image" id="about" ref={ref}>
			<StyledAbout>
				
					<h1>About</h1>
					<div>
						<p>
							Hi! My name is John; I am an aspiring web developer living in Dublin, Ireland.
						</p>
						<p>
							Initially, I studied mechanical engineering as I had an aptitude for maths. After obtaining my degree, I commenced a masters in biomedical engineering because I find physiology fascinating. My thesis focused on digital holography: an optical technique which can be used to analyze cells in three dimensions.
						</p>
						<p>
							My first job after college was as a project engineer in BOC gases (a company which specializes in the production of industrial and medical grade gases). Working there equipped me with a wide variety of skills: communication, project management, sales and managing client's expectations. While I enjoyed my time at this company, I decided to leave after 7 years as I have always been passionate about software.
						</p>
						<p>
							To see some of the websites I have built, check out the projects section below.
						</p>
						<p>
							If you have any queries, please drop me a message via the form at the bottom of the page.
						</p>
						<a href={`${baseURL}downloads/John-CV.pdf`} rel="noreferrer"  target="_blank">View CV</a>  
					</div>
				
			</StyledAbout>


			<Skills>
				<div>JavaScript</div>
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