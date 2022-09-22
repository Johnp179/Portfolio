import styled from 'styled-components';

const Div = styled.div`

    --height:8px;
    --triangleLength:1em;

    display:flex;
    visibility: hidden;
        
    .triangle-left{
        width: 0;
        height: 0;
        border-bottom: var(--height) solid red;
        border-left: var(--triangleLength) solid transparent;

    }
    .rectangle{
        height: var(--height); 
        width: calc(100% - 2 * var(--triangleLength));
        background-color: red;

    }
    .triangle-right{
        width: 0;
        height: 0;
        border-bottom: var(--height) solid red;
        border-right: var(--triangleLength)  solid transparent;
    }
`;



const NavHoverEffect = () => {

    return (
        <Div className="hover-effect" >
            <div className="triangle-left"></div>
            <div className="rectangle"></div>
            <div className="triangle-right"></div>
        </Div>
    );
}


export default NavHoverEffect;