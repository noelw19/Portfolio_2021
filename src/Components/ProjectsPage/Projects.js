import React from 'react';
import styled from 'styled-components';
import Card from '../ProjectsCard/ProjectsCard';

import img from '../../Images/Screenshot_2021-02-26 Aromatherapy.png';
import img1 from '../../Images/Screenshot_2021-02-27 React App.png';

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100%;
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
        height: auto;
        display: flex;
        justify-content: center;
        margin-top: 1rem;


        @media (max-width: 888px) {
            
            overflow-y: hidden;
            margin-right: 10rem;
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
            left: 10%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: nowrap;
            
        }
    `;

const Projects = () => {

    return (
        <ProjectContainer>
            <h2> Projects</h2>
            <FullWidthContainer className='scrollContainer'>
                <CenteredContainer>
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