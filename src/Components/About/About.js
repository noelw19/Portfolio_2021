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
        width: 15vw;
        height: 31vh;
        background-image: url('${img}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        transform: scale(1);
        border-radius: 50%;
        border: #45A29E 3px solid;

        position: absolute;
        left:15%;
        top: 23%;

    `;

    const CenteredContainer = styled.div`
        width: 70%;
        height: auto;
        font-size: 1.2rem;
        padding-top: 1.5rem;

        p {
            color: white;
        }

        span {
            color: #66FCF1;
        }

        .pLeft {
            text-align: left;
            padding-left: 14rem;
        }

        .mainAbout {
            width: 100%;
            height: 90%;
            word-wrap: break-word;
            text-align: left;
            display: flex;
            align-items: end;
            font-size: 1.5rem;
            //color: #C5C6C7;
            color: transparent;
            background: rgb(102,252,241);
            background: linear-gradient(270deg, rgba(102,252,241,1) 57%, rgba(255,255,255,1) 59%); 
            background-clip: text;
        }
    `;

const About = () => {
    return (
        <ProjectContainer>
            <h2> About</h2>
            <ImgContainer></ImgContainer>
            <FullWidthContainer>
            
                <CenteredContainer>
                    <p className='pLeft'><span>Birth Place</span>: Port Moresby, Papua New Guinea.</p>
                    <p className='pLeft'><span>Born</span>: 19th April 1995.</p>
                    <p className='pLeft'><span>Living in</span>: Nelson, NZ.</p>
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