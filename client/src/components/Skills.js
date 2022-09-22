import styled from 'styled-components';

const Container = styled.div`
  background-color:#9fa8a3;
  color:white;
  display:inline-block;
  padding:20px;
  border-radius: 5px;
`;
const Heading = styled.h1`
  text-align: center;
`;

const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  div{
    background-color: white;
    color:black;
    padding:5px;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    margin: 5px;

  }
  
`;


const Skills = () => {

  return (
    <Container>
        <Heading>Skills</Heading>
        <Content>
            <div>JavaScript</div>
            <div>Node</div>
            <div>Express</div>
            <div>HTML/CSS</div>
            <div>React</div>
            <div>Phaser</div>
            <div>TypeScript</div>
        </Content>
    </Container>
  );
}

export default Skills;