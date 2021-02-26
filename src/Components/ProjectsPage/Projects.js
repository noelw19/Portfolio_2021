import React from 'react';
import styled from 'styled-components';
import Card from '../ProjectsCard/ProjectsCard';

import img from '../../Images/Screenshot_2021-02-26 Aromatherapy.png';
import img1 from '../../Images/Screenshot_2021-02-27 React App.png';

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: .5rem;
    background: linear-gradient(to right, #0B0C10, #1F2833);
    color: #66FCF1;

    h2{
        margin: 0;
    }
`;

const FullWidthContainer = styled.div`
        width: 100vw;
        height: 40%;
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    `;

    const CenteredContainer = styled.div`
        width: 70%;
        height: auto;

        display: flex;
        justify-content: center;
    `;

const Projects = () => {
    return (
        <ProjectContainer>
            <h2> Projects</h2>
            <FullWidthContainer>
                <CenteredContainer>
                    <Card 
                    name='Aromatherapy'
                    bg={img}/>

                    <Card 
                    name='Stock Tracker'
                    bg={img1}/>
                </CenteredContainer>
            </FullWidthContainer>
        </ProjectContainer>
    )
}

export default Projects;