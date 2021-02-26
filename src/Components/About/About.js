import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: .5rem;
    background: linear-gradient(to right, #0B0C10, #1F2833);
    color: #66FCF1;
`;

const About = () => {
    return (
        <ProjectContainer>
            <h2> About</h2>
        </ProjectContainer>
    )
}

export default About;