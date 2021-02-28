import React, {useState} from 'react';
import styled from 'styled-components';

const HoverContainer = styled.div`
    margin:2rem;
    animation: cardFadeIn 1s;

    :hover {
        color: white;
    }


    button {
        background: #66FCF1;
        color: black;
        position: relative;
        bottom: 22%;
        left: 9%;
        border: none;
        padding: 1rem;
        margin-right: 1rem;
        border-radius: 50px;
        z-index: 2;

        :hover {
            background: linear-gradient(to right, #0B0C10, #1F2833);
            color: #66FCF1;
            opacity: 1;
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
    width: 50vw;
    height: 30vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    :hover {
        opacity: 0.5;
    }


    @media(min-width: 660px){
        width: 30vw;
        height: 30vh;

        

    }
    
    `;
    
    const TitleContainer = styled.div`
        width: 10%;
        height: 100%;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        h5 {
            transform: rotate(-90deg);
            height: 50%;
        }

    `;

    const Container = styled.div`
        width: 90%;
        height: 90%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        z-index: 1;

        
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

    function buttonShow() {
        let returnVal;

        if(showOptions === 'initial') {
            returnVal = 'opac';
        } else if(showOptions === true) {
            returnVal = 'fadeIn';
        } else if(showOptions === false) {
            returnVal = 'fadeOut';
        }

        return returnVal;
    }

    return (
        <HoverContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <CardContainer>
                <TitleContainer>
                <h5>{props.name}</h5>
                </TitleContainer>
                <Container style={{backgroundImage: `url('${img}') `}}>
                    
                    
                </Container>
            </CardContainer>
            <button className={buttonShow()} onMouseOver={handleMouseOver} onClick={codeBtnHandler}>View The Code</button>
            <button className={buttonShow()}  onMouseOver={handleMouseOver} onClick={siteBtnHandler}>View The Site</button>
        </HoverContainer>
    )
}

export default ProjectCard;