import React from 'react';
import styled from 'styled-components';
import Card from '../ProjectsCard/ProjectsCard';

import img from '../../Images/Screenshot_2021-02-26 Aromatherapy.png';
import img1 from '../../Images/Screenshot_2021-02-27 React App.png';
import img2 from '../..//Images/Calculator.png';

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100%;
    text-align: center;
    background: linear-gradient(to right, #0B0C10, #1F2833);
    color: #66FCF1;

    h2{
        margin-top: 1rem;
        margin-bottom: .5rem;

        @media (max-width: 888px) {
            padding-top:2rem;
        }
    }
`;

const FullWidthContainer = styled.div`
        width: 100vw;
        height: 70vh;
        display: flex;
        justify-content: center;
        

        @media (max-width: 888px) {
            width: 100vw;
            height: 60%;
            display: flex;
            align-items:center;
            overflow-x: hidden;
            overflow-y: scroll;
            
        }
    `;

    const CenteredContainer = styled.div`
        width: 80%;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        


        @media (max-width: 888px) {
            position: relative;
            left: 5%;
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            
        }
    `;

const Projects = () => {

    return (
        <ProjectContainer>
            <h2> Projects</h2>
            <FullWidthContainer>
                <CenteredContainer>
                    <Card 
                    name='Modern Calculator'
                    bg={img2}
                    site='https://dreamy-yalow-484b54.netlify.app/'
                    code='https://github.com/noelw19/modernCalculator'/>
                    
                    <Card 
                    name='Aromatherapy'
                    bg={img}
                    site='https://keen-poitras-6360a4.netlify.app/'
                    code='https://github.com/noelw19/Aromatherapy_site'/>

                    <Card 
                    name='Stock Tracker'
                    bg={img1}
                    site='https://unruffled-borg-11a2bb.netlify.app/'
                    code='https://github.com/noelw19/stock-app'/>

                </CenteredContainer>
            </FullWidthContainer>
        </ProjectContainer>
    )
}

export default Projects;