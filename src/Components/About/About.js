import React from 'react';
import styled from 'styled-components';

import img from '../../Images/colors.png';

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: .5rem;
    background: linear-gradient(to right, #0B0C10, #1F2833);
    color: #66FCF1;

    h2 {
        animation: growIn 2s;
    }

    @keyframes growIn {
        0% {
            color: linear-gradient(to right, #0B0C10, #1F2833);
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

const FullWidthContainer = styled.div`
        width: 100vw;
        height: 40%;
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    `;

    const ImgContainer = styled.div`
        width: 20vw;
        height: 40vh;
        background-image: url('${img}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 50%;
        border: white 3px solid;

        position: absolute;
        left:10%;
        top: 10%;

    `;

    const CenteredContainer = styled.div`
        width: 50%;
        height: auto;
        font-size: 1rem;
        padding-left: 12rem;
        text-align: left;

        p {
            color: white;
        }

        .center {
            text-align: center;
        }

        .mainAbout {
            width: 100%;
            height: auto;
            word-wrap: break-word;
            text-align: right;
        }
    `;

const About = () => {
    return (
        <ProjectContainer>
            <h2> About</h2>
            <ImgContainer></ImgContainer>
            <FullWidthContainer>
            
                <CenteredContainer>
                <p className='center'>A web developer living in Nelson, NZ.</p>
                <p className='center'>Born in Port Moresby, Papua New Guinea.</p>
                    <p className='center'>Born on 19th April 1995.</p>
                    <p className='mainAbout'>In the pursuit of knowledge, I applied for a bachaelor of Information Tech and realised my hidden love for it. Currently I am working with Javascript, Html, Css and React, which I enjoy alot and working on building my knowledge within the front-end and back-end. </p>
                </CenteredContainer>
            </FullWidthContainer>
        </ProjectContainer>
    )
}

export default About;