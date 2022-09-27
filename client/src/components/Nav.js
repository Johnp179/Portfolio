import styled from 'styled-components';
import NavHoverEffect  from './Nav-hover-effect';


const StyledNav = styled.div`
    z-index: 10;
    background-color: black;
    display:flex;
    justify-content:space-around;
    position:fixed;
    width:${props => props.width}; 
    transition:width 1s;
    overflow:hidden;
    font-size: 1.6rem;


	@media (min-width:600px){
		font-size:2rem;
	}

    @media (min-width:800px){
		font-size:2rem;
	}

    @media (min-width:1500px){
		font-size:2.5rem;
	}

`;


const Button = styled.div`
    .text{
        padding:0.5em;
        color: white;

    }

`;



const Nav = ({scrollToElement, width}) => {


    return (
        <StyledNav width={width}>
            <Button onClick={()=>scrollToElement("about")} >
                <div className="text">About</div>
                <NavHoverEffect />
                
            </Button>

            <Button onClick={()=>scrollToElement("projects")}>
                <div className="text">Projects</div>
                 <NavHoverEffect />
                
            </Button>

            <Button onClick={()=>scrollToElement("contact")}>
                <div className="text">Contact</div>
                 <NavHoverEffect />
                
            </Button>
        </StyledNav>

    );
}


export default Nav;
