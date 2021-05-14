import React, {useState} from 'react';
import styled from 'styled-components';

const HoverContainer = styled.div`
    
    margin:0rem 3.5rem 0rem 0rem;
    width: 30%;
    height: 40%;
    animation: cardFadeIn 1s;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    box-shadow: 10px 10px 10px;
    border-radius: 25px;
    border:2px solid black;
    margin-bottom: 1rem;

    :hover {
        color: white;
    }

    //mobile breakpoint
    @media(max-width: 888px) {
        margin:1rem 1rem 1rem 2rem;
        width: 70vw;
        height: 30vh;
        margin-left: 5rem;
        left: -3rem;
    }


    button {
        background: #66FCF1;
        color: black;
        position: relative;
        bottom: 30px;
        left: 5%;
        border: none;
        padding: .7rem;
        margin-right: 1rem;
        border-radius: 50px;
        z-index: 2;

        :hover {
            background: linear-gradient(to right, #0B0C10, #1F2833);
            color: #66FCF1;
            opacity: 1;
        }

        @media(max-width: 888px) {
            bottom: 35px;
            width: 5.5rem;
            opacity: 1;
            font-size: 10px;
        }
        
    }

    .opac {
        opacity: 0;
    }

    .fadeIn {
        animation: fadeIn 1s;
    }

    .fadeOut {
        animation: fadeOut .5s;
        animation-fill-mode: forwards;
    }

    @keyframes cardFadeIn {
        0% {transform: translateX(20rem)}

        100% { transform: translateX(0)}
    
    }

    @keyframes fadeIn {
        0% {opacity: 0; transform: translateY(-30px);}

        50% {transform: translateX(0px); z-index: 1;}

        100% {opacity: 1}
    }

    @keyframes fadeOut {
        0% {z-index: 1;}

        100% {opacity: 0; transform: translateX(30px);}
}

`;

const CardContainer = styled.div`
    width: 20vw;
    height: 30vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    

    :hover {
        opacity: 0.5;
    }


    @media(max-width: 888px){
        width: 70vw;
        height: 30vh;
    }

    
    
    `;
    
    const TitleContainer = styled.div`
        width: 10%;
        height: 12rem;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        left: -2rem;
        top: 0rem;

        h5 {
            height: 20%;
            width: 10rem;
            transform: rotate(-90deg);
        }

        @media (max-width: 600px) {

            h5 {
                transform: rotate(-90deg) translateY(-80px) translateX(10%);
            }
        }

        @media(max-width: 888px) {

            h5 {
                transform: rotate(-90deg) translateY(-20px) translateX(20%);
            }
        }
    `;

const ProjectCard = (props) => {
    const [showOptions, setShowOptions] = useState('initial');

    const img = props.bg;

    function handleMouseOver() {
        setShowOptions(true);
    }

    function handleMouseOut(){
        setShowOptions(false);
    }

    function siteBtnHandler() {
        return (
            window.open(`${props.site}`)
        )
    }

    function codeBtnHandler() {
        return (
            window.open(`${props.code}`)
        )
    }

    /* function to either show or hide the project buttons */
    // and also to show in or out animations
    function buttonShow() {
        let returnVal;
    if(window.innerWidth > 888) {
        if(showOptions === 'initial') {
            returnVal = 'opac';
        } else if(showOptions === true) {
            returnVal = 'fadeIn';
        } else if(showOptions === false) {
            returnVal = 'fadeOut';
        }
    }

        return returnVal;
    }

    return (
        <HoverContainer style={{backgroundImage: `url('${img}')`}} onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
            <CardContainer >
                <TitleContainer>
                <h5>{props.name}</h5>
                </TitleContainer>
                
            </CardContainer>
            <button className={buttonShow()} onMouseOver={handleMouseOver} onClick={codeBtnHandler}>View Code</button>
            <button className={buttonShow()}  onMouseOver={handleMouseOver} onClick={siteBtnHandler}>View Site</button>
        </HoverContainer>
    )
}

export default ProjectCard;