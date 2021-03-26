import React from 'react';
import styled from 'styled-components';

import img from '../../Images/cvNew';

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: .5rem;
    background: linear-gradient(to right, #0B0C10, #1F2833);
    color: #66FCF1;


    h2 {
        animation: growIn 2s;
        margin-top: 2%;
        @media (max-width: 888px) {
            width: 100%;
            text-align: left;
            padding-left: 2rem;
            position: relative;
            top: 15%;
            
        }
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
        margin-top: 2rem;

        @media (max-width: 888px) {
            width: 100%;
            height: 50%;
            padding-top: 3.7rem;
            
        }
    `;

    const ImgContainer = styled.div`
        width: 180px;
        height: 180px;
        background-image: url('${img}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        transform: scale(1);
        border-radius: 50%;
        border: #45A29E 3px solid;

        position: absolute;
        left:15%;
        top: 22%;

        @media (max-width: 888px) {
            left: 55%;
            top 16%;
            width: 130px;
            height: 130px;

        }

    `;

    /* Holds all of the text elements bar the header */
    const CenteredContainer = styled.div`
        width: 70%;
        height: auto;
        font-size: 1rem;
        padding-top: 2rem;

        @media (max-width: 888px) {
            width: 100%;
            
        }

        p {
            color: white;
        }

        span {
            color: #66FCF1;
        }

        .pRight {
            text-align: left;
            padding-left: 14rem;

            //mobile
            @media (max-width: 888px) {
                padding-left: 2rem;
                margin-top: 0rem;
                font-size: .8rem;
            }
        }

        //main about holds the bio paragraph
        .mainAbout {
            width: 80%;
            height: auto;
            word-wrap: break-word;
            text-align: left;
            font-size: 1.2rem;
            padding-top: 1rem;
            color: transparent;
            background: rgb(102,252,241);
            background: linear-gradient(270deg, rgba(102,252,241,1) 57%, rgba(255,255,255,1) 59%); 
            background-clip: text;
            margin-top: 4rem;

            //mobile
            @media (max-width: 888px) {
                font-size: .8rem;
                margin-left: 2rem;
                padding-right: 2rem;
                margin-top: 0;
            }
        }
    `;

const About = () => {
    return (
        <ProjectContainer>
            <h2> About</h2>
            <ImgContainer></ImgContainer>
            <FullWidthContainer>
            
                <CenteredContainer>
                    <p className='pRight'><span>Born</span>: 19th April 1995.</p>
                    <p className='pRight'><span>Living in</span>: Nelson, NZ.</p>
                    <p className='pRight'><span>Birth Place</span>: Port Moresby, Papua New Guinea.</p>
                    <p className='mainAbout'>
                        A 26 year old with a thirst for knowledge, 
                        a bubbly personality and a never give-up attitude. 
                        I pride myself on my work, progessing daily to continue 
                        to be proud of the work I do and how far I have come, 
                        currently within the hospitality industry I am slowly 
                        progressing toward finding a job within the I.T industry, 
                        by building my skills and finding enjoyment in fixing bugs 
                        both within my code and life.</p>
                </CenteredContainer>
            </FullWidthContainer>
        </ProjectContainer>
    )
}

export default About;