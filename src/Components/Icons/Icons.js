import React from 'react';
import styled from 'styled-components';

import { DiJsBadge, DiCss3, DiHtml5, DiReact, DiGithubBadge } from "react-icons/di";
import { SiStyledComponents, SiTailwindcss, SiLinkedin} from "react-icons/si";

const IconContainer = styled.div`
    width: 50vw;
    transform: rotate(-45deg);
    position: absolute;
    right: 10%;
    bottom: 35%;
    z-index: 100;

    p{
      text-align: center;
    }

    //working on responsive icons
    //corresponds with app file title media query
      @media(max-width: 888px) {

        transform: rotate(0deg);
        bottom: 10%;
        left: 25%;
        
      }
`;

const InnerContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2.5rem;

    div {
        height: 5rem;
        width: 5rem;
        display: flex;
        font-size: .8rem;
        flex-direction: column;
        justify-content: center;
      }

      .icon {
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
        animation: spin 2s;
        animation-delay: 1.5s;
        animation-fill-mode: backwards;
      }

      @keyframes spin {
        0% {transform:rotate(-360deg) translateX(40px); opacity: 0;}

        100% {
          transform: rotate(45deg);

        }
      }
  

      //working on responsive icons
      //changes may affect the event listeners in the app file.
      @media(max-width: 888px) {

          .icon {
            transform: rotate(0deg);
          }
      }
    
    
    .js {
        color: yellow;
    }

    .html {
        color: orangered;
    }

    .css {
        color: #2965f1 ;
    }

    .git {
        color: white;
    }

    .lnkIn {
        color: #0077B5;
    }

    .TWCss {
        color: #87CEFA;
    }

    .iconC:hover {
        animation: iconFlip 1s ease-out;

    }

    @keyframes iconFlip {
        from {
            opacity: 1;
            transform: rotate(360deg);
            
        }
        to {
            transform: rotate(0deg);
            backface-visibility: visible;
        }
    }

`;



const Icons = (props) => {
    return (
        <IconContainer style={props.css}>
            <InnerContainer>
                <div className='iconC'><DiJsBadge className='icon js' style={props.color}/></div>
                <div className='iconC'><DiHtml5 className='icon html' style={props.color}/></div>
                <div className='iconC'><DiCss3 className='icon css' style={props.color}/></div>
                <div className='iconC'><DiReact className='icon' style={props.color}/></div>
            </InnerContainer>
            <InnerContainer>
                <div className='iconC'><SiStyledComponents className='icon' style={props.color}/></div>
                <div className='iconC'><DiGithubBadge className='icon git' style={props.color}/></div>
                <div className='iconC'><SiLinkedin className='icon lnkIn' style={props.color}/></div>
                <div className='iconC'><SiTailwindcss className='icon TWCss' style={props.color}/></div>
            </InnerContainer>
        </ IconContainer>
        
    )
}

export default Icons;